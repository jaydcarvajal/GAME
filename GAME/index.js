  
/*
  Setup an object for you with name, guess, winningPercentage & win properties
*/

/*
  Setup a game object with randomWord, roundWinner, rounds array, and a roundNumber
*/

/*
  Create a random words array with at least 10 random words
*/

/*
  when the 'guess-text' button is clicked:
  - set your guess input value to lowercase ---
  - make sure the length of the input is 1, if not alert the user to only input 1 letter
  - set your guess text on the ui
  - set the game's random word to a random word from your word array
  - set the random word text on the ui
  - increment the round number
  - if the letter that you guessed is in the random word
    - set yourself as the round winner
    - increment your wins by 1
    - set a message that you won and append it to hte ui
  - if the letter that you guessed is not in the random word
    - set the round winner as the Computer
    - set a message that you lost and append it to the ui
  - calculate your winning percentage and append it to the ui
  - For each round, push the stats of the round to the game rounds array.
    Have it be html text that you push to the rounds array, where you bolden:
    - your guess
    - the computer's random word
    - your winning percentage. Bonus: make this text have a glow effect
    Display the information for all of the rounds on the html
  - clear the value in the input
  - Bonus: Create logic to eventually end the game
*/


 var Arr = ["load","leaflet","looting","seller","earthwax","favour","district","small","make","correspondence"];

 var win=0;
 var cont2=0;
 var Arr2=[];
 var game=0;
$('#guess-text-button').click(function(){
  
  var ran = Math.floor(Math.random() * 10); 
  var word = Arr[ran];
  var val = document.getElementById("guess-text-input").value;
  val = val.toLowerCase();
  valB = val.bold();
  wordB=word.bold();
  var Len = val.length;
  if (Len==1){
    if (game<10){
    game=game+1;
    cont2=cont2+1;
    document.getElementById("your-guess").innerHTML = val;
    document.getElementById("your-guess").style.fontWeight = "900";
    document.getElementById("random-word").innerHTML = word;
    document.getElementById("random-word").style.fontWeight = "900";
    var Lenw=word.length;
    console.log(Lenw);
    var cont=0;
    for(var i=0; i<Lenw ; i++){
      if (val==word[i]){
        cont=cont+1;
        document.getElementById("message-text").innerHTML = "You Win. The letter '" +valB+"' Is  in the word '" + wordB + "' ";
        break;

        
      } else{
        document.getElementById("message-text").innerHTML = "You Lose. The letter " +valB+" Is not in the word '" + wordB + "' ";
      }
    }

    if(cont>0){
      win=win+1;
    }
    var per=Math.floor((win*100)/cont2); 
    document.getElementById("winning-percentage").style.fontWeight = "900";
    document.getElementById("winning-percentage").innerHTML =per+"%";
    var x="Your Guess:"+val+", Random Word:"+word+", Your Winning percetage:"+per;
    Arr2.push(x);
    var LenAr=Arr2.length;
    console.log(Arr2[0]);


    var node = document.createElement("LI");
    var node1 = document.createElement("P");
    var textnode = document.createTextNode("Your Guess:"+val+", Random Word:"+word+", Your Winning percetage:"+per);
    node.appendChild(textnode);
    document.getElementById("rounds-list").appendChild(node); 
    document.getElementById('guess-text-input').value = '';
    




  }else{
    alert("The game is over.");
  }
  }else{
    alert("Introduce just 1 caracter");
  }

});