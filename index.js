// goal is to change the image1 from dice1.png to dice6.png
// Angela yu sol:-

let randomNumber1 = Math.floor(Math.random() * 6 + 1); // random no (1 - 6)

let randomDiceImage = "dice" + randomNumber1 + ".png"; // concactination method used to get (dice1.png - dice6.png)
let randomImageSources = "images/" + randomDiceImage;

// now how to change source atrribute
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSources);

// now for right image1
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let randomImageSourse2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSourse2);

if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = " 😊 Player 1 Wins 🏳️‍🌈. "
}
 else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🎌 Player 2 Wins 🤓. "
}
else  {
  document.querySelector("h1").innerHTML = " Draw.. 😂 "
}


// always remember to difrence between healthy conde an short codes
// write code like anybody can understand.





// // all above codes my way of doing.
//
// // for left img:-
// let randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
// let randomImageSourse = "images/" + "dice" + randomNumber1 + ".png"
// let image1 = document.querySelector(".img1");
// image1.setAttribute("src", randomImageSourse);
//
// // for right image
// let randomNumber2 =  Math.floor(Math.random() * 6) + 1;
// let randomImageSourse2 = "images/dice"+ randomNumber2 + ".png"
// let image2 = document.querySelector(".img2");
// image2.setAttribute("src", randomImageSourse2);





// // shortest code after understanding:-
//
// let randOne1 = Math.floor(Math.random() * 6 ) + 1;
// let randImgSrc1 = "images/dice" + randOne1 + ".png";;
// document.querySelector(".img1").setAttribute("src", randImgSrc1);
//
// let randOne2 = Math.floor(Math.random() * 6 ) + 1;
// let randImgSrc2 = "images/dice" + randOne2 + ".png";
// document.querySelector(".img2").setAttribute("src", randImgSrc2);
