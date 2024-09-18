

document.getElementById('button-id').addEventListener('click',function(event){
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    if(phoneNumber === "1234" && pinNumber === "1122"){
        window.location.href = './home.html';
    }
    else{
        alert('Invaild Information')
    }

    console.log(phoneNumber , pinNumber)
})