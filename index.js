var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name?\n")
console.log("Hey", userName, "! Welcome to 'Do you know Joy.'");

var score = 0

function quiz(question, answer){
    var userAnswer = readlineSync.question(question);
    if (userAnswer === answer){
        score += 1;
        console.log("Correct! Your current score is: ",score);
    }
    else{
        if(score < 1){
            console.log("Wrong! Your scores won't go down anymore. Your current score is: ",score);
        }
        else{
            score -= 1;
            console.log("Wrong! Your score is: ",score);
        }
        
    }
    console.log("---------------------------------------")
}
 var questions = [{
     ques: "What is my nick name?\n",
     ans: "shanu"
 },
 {
     ques: "Where do I live?\n",
     ans: "lucknow"
 },
 {
     ques: "When is my birthday? (answer format: date month (small letters))\n",
     ans: "25 january"
 },
 {
     ques: "How many friends do I have?\n",
     ans: "2"
 },
 {
     ques: "What is my favourite game?\n",
     ans: "pokemon"
 },
 {
     ques: "Who is my all time favourite Pokemon?\n",
     ans: "charizard"
 },
 {
     ques: "What is my all time favourite attack?\n",
     ans: "dragon claw"
 }
 ];

 for(let i = 0; i < questions.length; i++){
     currQues = questions[i]
     quiz(currQues.ques, currQues.ans)
 }

 console.log("Your final score is: ", score, ".")
