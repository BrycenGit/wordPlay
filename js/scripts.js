$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userInput = $("input#sentence").val();
    console.log(userInput);
    const array = userInput.split(" ");
    console.log(array.length);
    let newArray = [];
    array.forEach(function(element) {
      if (element.length >= 3) {
      newArray.push(element);  
      } 
    });
    let reverseArray = newArray.reverse();
    console.log(reverseArray);
    let joined = reverseArray.join(" ");
    $("#show").append(joined);


    // if words.length >= 3;
    
    // words.forEach(function(jumble) {
    //   finish += jumble:
    //   console.log(finish);
    // });


  });
});