 const nameTag = () => {
   var userInput= document.getElementById("myText").value;
   document.getElementById("Hayden").innerHTML = userInput;
}

// The code above is a much simpler version of the one below, but nonetheless they both work correctly



//  function nameTag() {
//    var x = document.getElementById("myText");
//    var defaultVal = x.defaultValue;
//    var currentVal = x.value;
  
//    if (defaultVal == currentVal) {
//      document.getElementById("Hayden").innerHTML = x.defaultValue;
//    } else {
//      document.getElementById("Hayden").innerHTML = currentVal;
//    }
//  }