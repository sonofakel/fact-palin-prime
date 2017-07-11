var factorialize = function(num) {
  var product = 1;
  if (num === 0) {
    return 1;
  } else {
    for (i = num; num > 0; num--) {
      product *= num;
    }
  }
  return product;
}

var factorializeRecursion = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return (num * factorializeRecursion(num - 1));
  }
}





$(function(){
  $("#factorial-form").submit(function(event){
    event.preventDefault();
    var origNumber = $("#factorial").val();
    $(".output").text(factorializeRecursion(origNumber));
  });

  $("#palindromes").submit(function(event){
    debugger;
    event.preventDefault();
    var origString = $("#palindrome").val();
    if (origString.toLowerCase().replace(/ /g, "") === origString.toLowerCase().split('').reverse().join('').replace(/ /g, "")) {
      $(".output1").text('true');
    } else {
      $(".output1").text('false');
    }

  });
});
