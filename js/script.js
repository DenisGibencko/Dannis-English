'use strict'

let shuffleArea = document.querySelector('.shuffle__area');
let shuffleButton = document.querySelector('.shuffle__button');

shuffleButton.addEventListener('click', function (event) {
   function shuffleMyWords() {
      let shuffleString = shuffleArea.value;
      let shuffleWords = shuffleString.split('\n');
      shuffleWords.sort(() => Math.random() - 0.5);
      shuffleArea.value = shuffleWords.join('\n');

   }
   shuffleMyWords();
})