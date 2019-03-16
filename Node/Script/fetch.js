
function helloW(){
    console.log('hello World')
}


function myFetch(){

    // var myHeaders = new Headers();
    // myHeaders.append("contentType": "application/json; charset=utf-8");

    
    var myHeaders = new Headers({
        "Content-Type": "application/json;",
        "X-Custom-Header": "ProcessThisImmediately",
      });
    
    var myInit = { method: 'GET',
                   headers: myHeaders,
                  };
    
    fetch('/json',myInit)
    .then(function(response) {
        console.log(response)
      return response.json();
    })
    .then(function(json) {
        
        console.log(json)
    
    })
    .catch((err)=>{ console.log(err)})
}