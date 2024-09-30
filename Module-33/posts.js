
    function allPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then( data => displayPosts(data))
    }

    function displayPosts(posts){
        const postContainer = document.getElementById('post-container');

       for(const post of posts){
            const div = document.createElement('div')
            div.classList.add('post') 
            console.log(post)
            div.innerHTML = `
                <h4> Post User ${post.id} </h4>
                <h5> Post Title ${post.title}</h5>
                <p> Post Articale ${post.body} </p>

            `
            postContainer.appendChild(div);
       }
    }
    allPosts()