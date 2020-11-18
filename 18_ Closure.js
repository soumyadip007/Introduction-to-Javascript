function init(){
    var firstName="Soumyadip"
    function sayFirstName(){
        console.log(firstName)
    }
    return sayFirstName;
}

var value=init()
console.log(value)
value();

//Passing Function Reference