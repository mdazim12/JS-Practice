
    function a(){
        console.log('a')
        b();
        console.log('aa')
    }

    function b(){
        console.log('b')
        d()
        console.log('bbb')
    }

    function d(){
        console.log('d')
        console.log('dd')
    }

    a();


