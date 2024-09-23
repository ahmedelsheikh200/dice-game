function rollDice() {
    // Generate random numbers for both players
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  
    // Update the dice images based on the random numbers
    changephoto(document.getElementsByClassName("img1"), randomNumber1);
    changephoto(document.getElementsByClassName("img2"), randomNumber2);
  
    // Display the winner
    winner(randomNumber1, randomNumber2);
  }
  
  function changephoto(img, number) {
    if (number === 1) {
      img[0].src = "./images/dice1.png";
    } else if (number === 2) {
      img[0].src = "./images/dice2.png";
    } else if (number === 3) {
      img[0].src = "./images/dice3.png";
    } else if (number === 4) {
      img[0].src = "./images/dice4.png";
    } else if (number === 5) {
      img[0].src = "./images/dice5.png";
    } else if (number === 6) {
      img[0].src = "./images/dice6.png";
    }
  }
  
  function winner(num1, num2) {
    if (num1 > num2) {
      document.querySelector("h1").innerHTML = "Player 1 wins!";
    } else if (num1 === num2) {
      document.querySelector("h1").innerHTML = "It's a DRAW!";
    } else {
      document.querySelector("h1").innerHTML = "Player 2 wins!";
    }
  }
  