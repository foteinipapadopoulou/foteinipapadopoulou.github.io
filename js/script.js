window.addEventListener('load',function(){
    var form=document.getElementsByClassName("needs-validation")

    var validation = Array.prototype.filter.call(form,function(form){
        form.addEventListener('submit',function(event){
            if(form.checkValidity() === false){
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        },false);
    });

    
},false);


function sendData(){
    const XHR = new XMLHttpRequest();
    
    var displayAlert = document.getElementById("displayAlert");
    // Bind the FormData object and the form element
    const FD = new FormData( form );
    // Define what happens on successful data submission
    XHR.addEventListener( "load", function() {
        displayAlert.hidden = false;
        displayAlert.getElementsByTagName("h4")[0].innerHTML = "Success!";
        displayAlert.classList.remove("alert-danger");
        displayAlert.classList.add("alert-success");
        displayAlert.getElementsByTagName("p")[0].innerHTML = "Your message has been sent!"

    } );

    // Define what happens in case of error
    XHR.addEventListener( "error", function( ) {
    displayAlert.hidden = false;
    displayAlert.getElementsByTagName("h4")[0].innerHTML = "Error!";
    displayAlert.classList.remove("alert-success");
    displayAlert.classList.add("alert-danger");
    displayAlert.getElementsByTagName("p")[0].innerHTML = "Sorry , it seems that my mail server is not responding. Please try again later! "

  } );

  // Set up our request
    
  XHR.open( "POST", "https://formcarry.com/s/mprp5IvSAS3");
  XHR.setRequestHeader('Accept', 'application/json');
    
  // The data sent is what the user provided in the form
  XHR.send( FD );
     XHR.onreadystatechange = function(){
      // Resource: https://developer.mozilla.org/tr/docs/Web/API/XMLHttpRequest/readyState
 
      // readyState
      // 0 = UNSENT
      // 1 = OPENED
      // 2 = HEADERS_RECEIVED
      // 3 = LOADING
      // 4 = DONE
      
      if(this.readyState == 4){
        // when request is complete.
        console.log(this.response);
      }
    }
}

// Access the form element...
const form = document.getElementById( "contactForm" );

// ...and take over its submit event.
form.addEventListener( "submit", function ( event ) {
  event.preventDefault();
  if(form.checkValidity()){
    sendData();
  }
});


window.addEventListener('scroll',function(){
    var navbar=document.getElementsByTagName("nav")[0];
    
    if(document.documentElement.scrollTop||document.body.scrollTop>window.innerHeight){
        navbar.classList.remove("transparent-bg");
        navbar.classList.add('bg-dark');
        
    }else{
        navbar.classList.remove("bg-dark");
        navbar.classList.add("transparent-bg");
    }
},false);

