(function (global) {

    // Set up a namespace for our utility
    var ajaxUtils = {};

    //  Returns an HTTP request object
    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }
        else if (window.ActiveXObject) {
            // For every old IE browsers(optional)
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else {
            global.alert("Ajax is not supported");
            return(null);
        }
    }


// GET request to 'requestURl'
ajaxUtils.sendGetRequest = 
    function (requestUrl, responseHandler) {
        var request = getRequestObject();
        request.onreadystatechange = 
            function() {
                handleRespone(request, responseHandler)
            };
        request.open("GET", requestUrl, true);
        request.send(null); // For post only
    };

    // Only calls user provided 'responseHandler'
    // Function if response is ready
    // and not  and error

    function handleRespone(request, responseHandler) {
        if (
            (request.readyState == 4) && 
            (request.status == 200)
             ) {
                responseHandler(request);
        }
    }

global.$ajaxUtils = ajaxUtils;
    


})(window);