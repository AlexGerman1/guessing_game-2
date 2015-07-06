
var scientist = prompt("Who is Craig's favorite scientist?").toUpperCase();


var showimage = function(src){
  var img = document.createElement('img');
  img.src = src;
  document.body.appendChild(img);
};


var response = function() {

  if (scientist == "FEYNMAN") {
    alert("Wowza! You got it!");

  }
   else if (scientist == "RICHARD FEYNMAN") {
    alert("Wowza! You got it!");

  }
  else {
    alert("No, but here's comes a hint... Click the button. Then refresh the browser and try again!")
}
};



response()
