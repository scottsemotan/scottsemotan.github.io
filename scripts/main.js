let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/portrait.jpeg') {
      myImage.setAttribute ('src','images/cat.jpeg');
    } else {
      myImage.setAttribute ('src','images/bike.jpeg');
    } 
    if(mySrc === 'images/bike.jpeg') {
      myImage.setAttribute ('src','images/guitar.jpeg');}
      if(mySrc === 'images/guitar.jpeg') {
        myImage.setAttribute ('src','images/portrait.jpeg');}
  }

var my_element = document.getElementById("about-me, hobbies");

my_element.scrollIntoView({
  behavior: "smooth",
  block: "start",
  inline: "nearest"
});


