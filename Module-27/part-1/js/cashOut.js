
 document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    
    const cashOut = document.getElementById('input-cash-out').value;
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    console.log(cashOut , pinNumber)

    if(pinNumber === '1234'){
        const balace = document.getElementById('account-balance').innerText;
        const balaceNumber = parseFloat(balace);
        const cashOutNumber = parseFloat(cashOut);

        const newBalance = balaceNumber - cashOutNumber;
        document.getElementById('account-balance').innerText = newBalance;
        cashOut.value = ' ';
        pinNumber.value = ' ';

    }
    else{
        alert('Invalid PIN!')
    }
 })