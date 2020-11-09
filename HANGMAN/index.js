  
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
 var gl=5;
 var rp=0;
 var pg=[];
 var win=0;
 var cont2=0;
 var Arr2=[];
 var game=0;
 var newgame=0;
  var blank=[];
  var ran = Math.floor(Math.random() * 10); 
  var word = Arr[ran];
  var lenword = word.length;
  var winword=lenword;
  console.log(word)
  console.log(lenword)
  for (var i=0;i<lenword;i++){
    blank.push("_ ");
  }
    document.getElementById("wordguess").innerHTML = blank;

$('#guess-text-button').click(function(){

  var val = document.getElementById("guess-text-input").value;
  val = val.toLowerCase();
  var pglen=pg.length;
  for(var i=0; i<pglen ; i++){
    if (val==pg[i]){
      rp=rp+1;
      break;
    }
  }
  if(rp>0){
    alert("You can not guess a letter that has already been guessed");
  }else{
    pg.push(val);

      console.log(word[0]);
  var K=0;
  for (var i=0;i<lenword;i++){
    if(word[i]==val){
      blank[i]=val;
      K=K+1;
    }
  }
  if(K>0){
    winword=winword-K;
    var correct = document.getElementById("Acorrect");
    correct.play();
  }else{
    gl=gl-1;
    var wrong = document.getElementById("Awrong");
    wrong.play();
  }
  document.getElementById("wordguess").innerHTML = blank;
  document.getElementById("gl").innerHTML = gl;
  document.getElementById("pg").innerHTML = pg;

  valB = val.bold();
  wordB=word.bold();
  var Len = val.length;
  if (Len==1){
    if (game<100){
    game=game+1;
    cont2=cont2+1;
    document.getElementById("your-guess").innerHTML = val;
    document.getElementById("your-guess").style.fontWeight = "900";
    var Lenw=word.length;
    console.log(Lenw);
    var cont=0;
    

    if(cont>0){
      win=win+1;
    } 

    var node = document.createElement("LI");
    var node1 = document.createElement("P");
     if (gl==0){
      var textnode = document.createTextNode("Result:LOSE, Random Word:"+word);
      node.appendChild(textnode);
      document.getElementById("rounds-list").appendChild(node); 
      newgame=1;
      var loser = document.getElementById("loser");
      loser.play();
    }else if(winword==0){
      var textnode = document.createTextNode("Result:WIN, Random Word:"+word);
      node.appendChild(textnode);
      document.getElementById("rounds-list").appendChild(node); 
      newgame=1;
      var wiin = document.getElementById("win");
      wiin.play();

    }
    
    document.getElementById('guess-text-input').value = '';
    if(newgame==1){
      blank=[];
      ran = Math.floor(Math.random() * 10); 
      word = Arr[ran];
      lenword = word.length;
      winword=lenword;
      console.log(word)
      console.log(lenword)
    for (var i=0;i<lenword;i++){
      blank.push("_ ");
    }
    document.getElementById("wordguess").innerHTML = blank;
    gl=5;
    pg=[];
    document.getElementById("gl").innerHTML = gl;
    document.getElementById("pg").innerHTML = pg;
    }
    newgame=0;
    




  }else{
    alert("The game is over.");
  }
  }else{
    alert("Introduce just 1 caracter");
  }



  }
  
  rp=0;

});