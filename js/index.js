// console.log('js file connected');


//  get value function by id

function getValueInputById(id){

    const value=parseFloat(document.getElementById(id).value);
    return value;
}

// validation function

function showError(id){
    document.getElementById(id).classList.remove('hidden');
}

function formatCurrency(amount){
    return ` ${amount.toFixed(2)}`;

}

// history function
function addToHistory(income, totalExpenses, balance){
    const historyItem=document.createElement('div');
    historyItem.className='bg-white p-3 rounded-md border-l-2 border-indigo-500';
    historyItem.innerHTML=`
    <p class="text-xs text-gray-500"> Serial: ${count} </p>
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500">Income: $${formatCurrency(income)}</p>
    <p class="text-xs text-gray-500">Expense: $${formatCurrency(totalExpenses)}</p>
    <p class="text-xs text-gray-500">Balance: $${formatCurrency(balance)}</p>
   
    `
    // bactric er vitore silo pore function korar por comment kore diyeci alternet function diye kaj korci tai

    // <p class="text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
    // <p class="text-xs text-gray-500">Expense: $${totalExpenses.toFixed(2)}</p>
    // <p class="text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>

    
    const historyContainer=document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild); //insertBefore ( কি ইনসার্ট করাবো, কোথায় ইনসার্ট করবো) =১ম টা কি ইনসার্ট করবো ২টা কোথায়  ইনসার্ট করবো।


    
}


let count =0;

// add event listeners for calculate button:

const calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function () {



    count +=1;

    // const income = parseFloat(document.getElementById('income').value);
    // const software = parseFloat(document.getElementById('software').value);
    // const courses = parseFloat(document.getElementById('courses').value);
    // const internet = parseFloat(document.getElementById('internet').value);

    // get value from function: 

    const income=getValueInputById('income');
    const software=getValueInputById('software');
    const courses=getValueInputById('courses');
    const internet=getValueInputById('internet');
   

    // console.log(income, software, courses, internet)
    // console.log({income, software, courses, internet}) // অবজেক্ট আকারে কনসল দেখাবে। 
    // console.table({income, software, courses, internet}) // অবজেক্ট  টেবিল আকারে কনসল দেখাবে। 

    // validation income
    if(income<=0 || isNaN(income)){
        // document.getElementById('income-error').classList.remove('hidden');

        showError('income-error');
        return;
    }
    if(software<=0 || isNaN(software)){
        // document.getElementById('software-error').classList.remove('hidden');
        showError('software-error');
        return;
    }
    //   sum total
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    if(totalExpenses > income){
        // document.getElementById('logic-error').classList.remove('hidden');
        showError('logic-error');
        return;
    }
    // console.table({totalExpenses, balance})

    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);
    const result = document.getElementById('results');
    result.classList.remove('hidden');

    // history section

    // const historyItem=document.createElement('div');
    // historyItem.className='bg-white p-3 rounded-md border-l-2 border-indigo-500';
    // historyItem.innerHTML=`
    // <p class="text-xs text-gray-500"> Serial: ${count} </p>
    // <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    // <p class="text-xs text-gray-500">Income: $${formatCurrency(income)}</p>
    // <p class="text-xs text-gray-500">Expense: $${formatCurrency(totalExpenses)}</p>
    // <p class="text-xs text-gray-500">Balance: $${formatCurrency(balance)}</p>
   
    // `
    // // bactric er vitore silo pore function korar por comment kore diyeci alternet function diye kaj korci tai

    // // <p class="text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
    // // <p class="text-xs text-gray-500">Expense: $${totalExpenses.toFixed(2)}</p>
    // // <p class="text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>

    
    // const historyContainer=document.getElementById('history-list');
    // historyContainer.insertBefore(historyItem, historyContainer.firstChild); //insertBefore ( কি ইনসার্ট করাবো, কোথায় ইনসার্ট করবো) =১ম টা কি ইনসার্ট করবো ২টা কোথায়  ইনসার্ট করবো।


    // get function call
    addToHistory(income, totalExpenses, balance);
});

// add event listeners for savings button:
const calculateSavingsButton = document.getElementById('calculate-savings');
calculateSavingsButton.addEventListener('click', function () {
    // console.log('savings button clicked');
    const savingsPercentage = parseFloat(document.getElementById('savings').value);
    console.log(savingsPercentage)
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    const savingsAmount = (savingsPercentage * balance) / 100;
    const remainingBalance = balance - savingsAmount;
    const savingsElementAmount = document.getElementById('savings-amount');
    savingsElementAmount.innerText = savingsAmount.toFixed(2);
    const remainingBalanceElement = document.getElementById('remaining-balance');
    remainingBalanceElement.innerText = remainingBalance.toFixed(2);

});

// history tab functionality: 
const historyTabButton = document.getElementById('history-tab');
const assistantTabButton = document.getElementById('assistant-tab');
historyTabButton.addEventListener('click', function () {
    historyTabButton.classList.add('text-white', 'font-semi-bold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    historyTabButton.classList.remove('text-gray-600')
    assistantTabButton.classList.remove('text-white', 'font-semi-bold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    assistantTabButton.classList.add('text-gray-600');

    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');

});

assistantTabButton.addEventListener('click', function(){
    assistantTabButton.classList.add(
        'text-white', 
        'font-semi-bold', 
        'bg-gradient-to-r', 
        'from-blue-500', 
        'to-purple-600'
    );
    assistantTabButton.classList.remove('text-gray-600');
    historyTabButton.classList.remove(
        'text-white', 
        'font-semi-bold', 
        'bg-gradient-to-r', 
        'from-blue-500', 
        'to-purple-600'
    );

    document.getElementById('expense-form').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');

})

// live validation fo input🧮 

document.getElementById('income').addEventListener('input', function(){
    const inputValue=parseFloat(document.getElementById('income').value);
    // console.log(inputValue)
    if(inputValue <=0 || isNaN(inputValue)){
        document.getElementById('income-error').classList.remove('hidden');
        return;
    }
})