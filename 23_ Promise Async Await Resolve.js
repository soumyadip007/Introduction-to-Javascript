const uno = () =>{
    return "Hi, I'm a uno";
}

const dos1 = async () =>{
    setTimeout(()=>{
        return "Hello, Timer";
    },3000);
 //  return "Hi, I'm a dos";
}

const dos = async () =>{
    return new Promise((resolve,reject)=>{
        // resolve("I got that");
        setTimeout(()=>{
            resolve("I got that")
           // reject("I got that")
            //  return "Hi, I'm a dos";
    },3000);
    })
}

const tres = () =>{
    return "Hi, I'm a tres";
}


// uno()
// tres()
// dos()

const call = async() =>{
    let unoVal= uno();
    console.log(unoVal);

    let dosVal1= await dos();
    console.log(dosVal1);

    let dosVal= await dos();
    console.log(dosVal);

    let tresVal= tres();
    console.log(tresVal);
};


call()