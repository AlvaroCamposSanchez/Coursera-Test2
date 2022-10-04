// Event handling
document.addEventListener("DOMContentLoaded",
    function (event) {


        document.querySelector("button")
        .addEventListener("click", function(){
            var self = this;
            var name = "";

            $ajaxUtils
                .sendGetRequest("/data/name.txt",
                    function (request) {
                        name = request.responseText;
                        
                        document.querySelector("#content")
                        .innerHTML = "<h2>Hello " + name + "!";
                });
        })  
    }
);