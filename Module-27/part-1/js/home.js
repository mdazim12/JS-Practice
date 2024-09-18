
    document.getElementById('btn-money-add').addEventListener('click',function(event){
        event.preventDefault();
        
        const addMoneyInput = document.getElementById('input-money-add').value;
        const inputPinNumber = document.getElementById('input-pin-number').value;
        console.log(addMoneyInput , inputPinNumber)
    })