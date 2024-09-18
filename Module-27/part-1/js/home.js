
    document.getElementById('btn-money-add').addEventListener('click',function(event){
        event.preventDefault();
        
        const addMoneyInput = document.getElementById('input-money-add').value;
        const inputPinNumber = document.getElementById('input-pin-number').value;
        
        if(inputPinNumber === '1122'){
            const balace = document.getElementById('account-balance').innerText;
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balaceNumber = parseFloat(balace);
            const newBalance = addMoneyNumber + balaceNumber;
            
            document.getElementById('account-balance').innerText = newBalance;
            addMoneyInput.value = ' ';
            inputPinNumber.value = ' ';
        }
        else{
            alert('Enter the right PIN!')
        }
    })