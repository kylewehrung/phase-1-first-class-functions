function giverFunc() {
    console.log("I give");
}



function receivesAFunction(func) {
    return func();

}

receivesAFunction(giverFunc);




function returnsANamedFunction() {
    var func = function() {
        console.log("I give");
    };

    return func;
}

returnsANamedFunction();



function returnsAnAnonymousFunction() {
    return function() { 
        console.log('Im an anonymous function');
    }
}

returnsAnAnonymousFunction();





























