

// Getting input value
function inputValue(inputId, invalidMessage){
    const input = document.getElementById(inputId);
    const inputValue = input.value;
    const inputValueParse = parseFloat(inputValue);

    // Input Field Validation
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

// Show All Calculation Output
function showCalculation(outputId, expense){
    const outputText = document.getElementById(outputId);
    outputText.innerText = expense;
    return outputText;
}

// Expense Button Action
document.getElementById('expense-button').addEventListener('click', function(){
    const income = inputValue('income-input', 'Income');
    const foodExpense = inputValue('food-input', 'Food expense');
    const rentExpense = inputValue('rent-input', 'Rent expense');
    const clothesExpense = inputValue('clothes-input', 'Clothes expense');
    const totalExpense = foodExpense + rentExpense + clothesExpense ;
    const balance = income - totalExpense;

    // Check Nan Condition
    if( isNaN(foodExpense) || isNaN(rentExpense) || isNaN(clothesExpense) || isNaN(totalExpense)){
        showCalculation('total-expense', '');
    }else{
        showCalculation('total-expense','Total Expenses: '+totalExpense);
    }
    // Check Nan Condition
    if( isNaN(income) || isNaN(totalExpense)){
        showCalculation('total-balance', '');
    }else if( balance < 0 ){
        showCalculation('total-balance', '');
        showCalculation('balance-message','Insufficient Balance, Your expense is too much!!!');
    }else{
        showCalculation('total-balance','Balance: '+balance);
        showCalculation('balance-message','');
    }
});

// Saving Button Action
document.getElementById('saving-button').addEventListener('click', function(){
    const saving = inputValue('saving-input', 'Saving');
    const income = inputValue('income-input', 'Income');
    const foodExpense = inputValue('food-input', 'Food expense');
    const rentExpense = inputValue('rent-input', 'Rent expense');
    const clothesExpense = inputValue('clothes-input', 'Clothes expense');
    // Total Expense Calculation
    const totalExpense = foodExpense + rentExpense + clothesExpense;
    // Total Balance Expense
    const balance = income - totalExpense;
    const savingAmount = (income/100)*saving;
    const remainingBalance = balance - savingAmount;

    // Check Nan Condition
    if( isNaN(savingAmount) ){
        showCalculation('saving-amount', '');
    }else{
        showCalculation('saving-amount', 'Saving Amount: ' + savingAmount);
    }

    // Check Nan Condition
    if( isNaN(remainingBalance) ){
        showCalculation('remaining-amount', '');
    }else if( balance < savingAmount){
        showCalculation('remaining-amount', '');
        showCalculation('saving-invalid-message', 'You are not eligible for savings!!!');
    }else{    
        showCalculation('remaining-amount', 'Remaining Balance: ' + remainingBalance);
        showCalculation('saving-invalid-message', '');
    }
});