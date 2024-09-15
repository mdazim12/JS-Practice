

       // document.getElementById('make-goldenrod', function(){})
        
       document.getElementById('make-goldenrod').addEventListener('click', function(){
        document.body.style.backgroundColor = 'goldenrod';
    })




    function makeYellow() {
        document.body.style.backgroundColor = 'yellow';
    }

    function makeRed() {
        document.body.style.color = 'red';
    }

    const purleBtn = document.getElementById('make-purple');
    purleBtn.onclick = function testPurple(){
        document.body.style.backgroundColor = 'purple';
    }

    const pinkButton = document.getElementById('make-pink');
    pinkButton.addEventListener('click', makePink )

    function makePink(){
        document.body.style.backgroundColor = 'pink';
    }

   const makeGreen = document.getElementById('make-green');
   makeGreen.addEventListener('click', function makeGreen(){
        document.body.style.backgroundColor = 'green';
   })
 
