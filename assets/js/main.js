
function inputValue(inputId, invalidMessage){
    
    const input = document.getElementById(inputId);
    const inputValue = input.value;
    const inputValueParse = parseFloat(inputValue);
    // return inputValueParse;  

    if(inputValue == ''){
        document.getElementById(inputId+'-message').innerText = invalidMessage + ' is empty';
    }else if( inputValueParse <= 0 ){
         document.getElementById(inputId+'-message').innerText = 'Your '+invalidMessage+' Should  be Greater Than 0';
    }else if(isNaN(inputValueParse) ){
        document.getElementById(inputId+'-message').innerText = 'Enter valid '+ invalidMessage;
    }else{
        document.getElementById(inputId+'-message').innerText = '';
        return inputValueParse;    
    }
    
}

function outputCalculation(outputId, expense){
    const outputText = document.getElementById(outputId);
    outputText.innerText = expense;
    return outputText;
}

document.getElementById('expense-button').addEventListener('click', function(){
    const income = inputValue('income-input', 'Income');
    const foodExpense = inputValue('food-input', 'Food expense');
    const rentExpense = inputValue('rent-input', 'Rent expense');
    const clothesExpense = inputValue('clothes-input', 'Clothes expense');
    const totalExpense = foodExpense + rentExpense + clothesExpense;
    const balance = income - totalExpense;
    if( isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothesExpense) || isNaN(totalExpense)){
        const expenseOutput = outputCalculation('total-expense', '');
    }else{
        const expenseOutput = outputCalculation('total-expense','Total Expenses: '+totalExpense);
    }
    if( isNaN(income) || isNaN(totalExpense)){
        const balanceOutput = outputCalculation('total-balance', '');
    }else if( balance < 0 ){
        const balanceOutput = outputCalculation('balance-message','Insufficient Balance your expense is too much!!!');
        console.log(balanceOutput);
    }else{
        const balanceOutput = outputCalculation('total-balance','Balance: '+balance);
    }
    // console.log('income',income);
    // console.log('food',foodExpense);
    // console.log('rent',rentExpense);
    // console.log('clothesExpense',rentExpense);
    console.log('Total Expense',totalExpense);
   
});

