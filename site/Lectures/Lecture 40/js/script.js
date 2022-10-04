var message = "in global";
console.log("global: message = " + message);


var a = function() {
    var message = "inside a";
    console.log("a: message = " + message);

 
}

var c = function() {
    var message = "test";
    console.log("c:message =" + message);

    function b () {
        console.log("b:message = " + message)
    }

    b();
    

}


c();
a();