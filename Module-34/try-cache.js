

    function checkAge(){
        const age = document.getElementById('age');
        const ageText = age.value;
        const error = document.getElementById('error')
        console.log(ageText)
       
        

        try{
            const age = parseInt(ageText);

            if(isNaN(age)){
                throw 'please enter a number'
            }
        }
    
        catch(err){
            console.log('ERROR', err)
            error.innerHTML = 'Error ' + err
        }
        finally {
            console.log('All done by')
        }
        console.log(111111111)

    }

    