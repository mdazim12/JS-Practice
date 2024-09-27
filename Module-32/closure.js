
    function khichen(){
        let roest = 0;
        return function(){
            roest++;
            return roest;
        }
    }

    const fristServer = khichen()
    console.log(fristServer())
    console.log(fristServer())
    console.log(fristServer())
    console.log(fristServer())
    console.log(fristServer())