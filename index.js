
 function receivesAFunction(cb) {
    return cb();
}

receivesAFunction(function cb() { return 1 + 1; });


function returnsANamedFunction() {
    
    return function sayHi() {
        console.log("hi")
    };
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("anonymous")
    };
}