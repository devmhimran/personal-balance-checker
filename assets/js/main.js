

// Getting input value
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


function showCalculation(outputId, expense){
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
        const expenseOutput = showCalculation('total-expense', '');
    }else{
        const expenseOutput = showCalculation('total-expense','Total Expenses: '+totalExpense);
    }
    if( isNaN(income) || isNaN(totalExpense)){
        showCalculation('total-balance', '');
    }else if( balance < 0 ){
        showCalculation('total-balance', '');
        showCalculation('balance-message','Insufficient Balance, Your expense is too much!!!');
        console.log(balanceOutput);
    }else{
        showCalculation('total-balance','Balance: '+balance);
        showCalculation('balance-message','');
    }
    console.log('Total Expense',totalExpense);
});

