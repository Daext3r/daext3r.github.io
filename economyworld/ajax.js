//ajax function
//completed is a callback function that is called once the request is complete
function ajax(url, method, data = {}, completed) {
    //creamos el objeto xmlhttprequest
    let XHR = new XMLHttpRequest();

    //get ready the response
    XHR.onreadystatechange = function (event) {
        console.log(XHR.readyState);
        if (XHR.readyState == 4 && XHR.status == 200) {
            //catch the response
            completed(XHR.responseText);
        }
    }

    let dataString = "";

    for (let index in data) {
        dataString += index + "=" + datos[index] + "&";
    }

    if (method.toUpperCase() == "GET") {
        XHR.open(method, url + "?" + dataString);
        XHR.send();
    } else {
        XHR.open(method, url);
        XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        XHR.send(dataString);
    }
}