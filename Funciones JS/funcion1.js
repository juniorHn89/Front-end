import "bootstrap";
import "./style.css";


window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


  let randonWho = who[Math.floor(Math.random() * who.length)]
  let randonAction = action[Math.floor(Math.random() * action.length)]
  let randonWhat = what[Math.floor(Math.random() * what.length)]
  let randonWhen = when[Math.floor(Math.random() * when.length)]


  let randomSentence = `${randonWho} ${randonAction} ${randonWhat} ${randonWhen}`

  document.getElementById("excuse").innerHTML = randomSentence;
  console.log(randomSentence);


};

