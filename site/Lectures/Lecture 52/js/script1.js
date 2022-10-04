(function (window) {
var yaakovGreeter = {};
yaakovGreeter.name = "Yaakov";
yaakovGreeter.sayHello = function () {
    console.log("Hello " + yaakovGreeter.name);
}

    window.yaakovGreeter = yaakovGreeter

})(window);
