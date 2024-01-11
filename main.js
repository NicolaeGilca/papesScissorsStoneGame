let firstPlayer = document.querySelector(".game__player-1");
let secondPlayer = document.querySelector(".game__player-2");
let btnGame = document.querySelector(".game__btn");

let choseRock = document.querySelector(".game__user-chose-1");
let chosePaper = document.querySelector(".game__user-chose-2");
let choseScissors = document.querySelector(".game__user-chose-3");

// pun un lister pe button
btnGame.addEventListener("click", function gameStart() {
  //dupa se atribuie cate un numar random foecarui jucator
  firstPlayer = Math.floor(Math.random() * 3 + 1);
  secondPlayer = Math.floor(Math.random() * 3 + 1);

  let gameImgOne = document.querySelector(".game__img-1");
  let gameImgTwo = document.querySelector(".game__img-2");

  let borderColorFirst = document.querySelector(".game__player-1");
  let borderColorSecond = document.querySelector(".game__player-2");

  function playerOne() {
    //fiecare numar are imagiena lui
    if (firstPlayer === 1) {
      borderColorFirst.style.background = "var(--rock-color)";
      gameImgOne.src = "img/rock.png";
    } else if (firstPlayer === 2) {
      gameImgOne.src = "img/paper.png";
      borderColorFirst.style.background = "var(--paper-color)";
    } else if (firstPlayer === 3) {
      gameImgOne.src = "img/scissors.png";
      borderColorFirst.style.background = "var(--scissors-color)";
    }
  }

  function playerTwo() {
    //fiecare numar are imagiena lui

    if (secondPlayer === 1) {
      gameImgTwo.src = "img/rock-second.png";
      borderColorSecond.style.background = "var(--rock-color)";
    } else if (secondPlayer === 2) {
      gameImgTwo.src = "img/paper-second.png";
      borderColorSecond.style.background = "var(--paper-color)";
    } else if (secondPlayer === 3) {
      gameImgTwo.src = "img/scissors-second.png";
      borderColorSecond.style.background = "var(--scissors-color)";
    }
  }
  //conditiile jocului
  let gameResult = document.querySelector(".game__result");
  if (
    (firstPlayer === 1 && secondPlayer === 3) ||
    (firstPlayer === 2 && secondPlayer === 1) ||
    (firstPlayer === 3 && secondPlayer === 1) ||
    (firstPlayer === 3 && secondPlayer === 2)
  ) {
    gameResult.innerHTML = "User 1 WIN!";
  } else if (firstPlayer === secondPlayer) {
    gameResult.innerHTML = "Nobody win!";
  } else {
    gameResult.innerHTML = "User 2 WIN!";
  }
  playerOne();
  playerTwo();
});
console.log(firstPlayer);
console.log(secondPlayer);

//? 1. Posibilitatea de a alege (1 Foarfica,2 Pitara,3 Hartie);
//? 2. Limitarea rundelor de joc .
//? 3. Demonstrarea vizuala a punctelor castigate.
//? 4. Anuntarea castigatorului final.
//? 5. Redenumirea corecta a jucatorilor cu posibilitatea de a modifica numele.
