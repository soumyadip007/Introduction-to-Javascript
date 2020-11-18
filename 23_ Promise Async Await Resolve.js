const uno = () =>{
    return "Hi, I'm a uno";
}

const dos = () =>{
    setTimeout(()=>{
        return "Hello, Timer";
    },3000);
   // return "Hi, I'm a dos";
}

const tres = () =>{
    return "Hi, I'm a tres";
}


// uno()
// tres()
// dos()

const call = () =>{
    let unoVal= uno();
    console.log(unoVal);

    let dosVal= dos();
    console.log(dosVal);

    let tresVal= tres();
    console.log(tresVal);
};


call()