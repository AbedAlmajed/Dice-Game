let btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", clickon);
function clickon() {
  var rand1 = Math.floor(Math.random() * 6 + 1); //0-6
  //player 1
  var img1 = document.getElementsByClassName("img1")[0];
  img1.setAttribute("src", "./images/dice" + rand1 + ".png");

  //player 2
  var rand2 = Math.floor(Math.random() * 6 + 1); //0-6
  var img2 = document.getElementsByClassName("img2")[0];
  img2.setAttribute("src", "./images/dice" + rand2 + ".png");

  //who win player 1 or player 2

  if (rand1 > rand2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 win 🚩";
    document.getElementsByClassName("result")[0].innerHTML =
      "Player 1 =  " + rand1 + " , Player 2 = " + rand2;
  } else if (rand2 > rand1) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 win 🚩";
    document.getElementsByClassName("result")[0].innerHTML =
      "Player 1 =  " + rand1 + " , Player 2 = " + rand2;
  } else {
    document.getElementsByTagName("h1")[0].innerHTML = "Drow !";
    document.getElementsByClassName("result")[0].innerHTML =
      "Player 1 =  " + rand1 + " , Player 2 = " + rand2;
  }
}
