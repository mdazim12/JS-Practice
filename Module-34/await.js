
    function loadUser(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        .then (data => console.log(data))
        .catch(err => console.log(err))
    }

    async function loadUserAsnyc(){
        const req = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await req.json();
        console.log(data)
    }

    const loadUserArrow = async () =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        console.log(data)
    }

    const loadUserCatech = async() =>{
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = res.json();
            console.log(data);
        }
        
        catch(error){

        }
    }