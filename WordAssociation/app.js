const scoredisplay = document.getElementById("scoredisplay");
const questiondisplay = document.getElementById("questiondisplay");
let score = 0;
let clicked =[]
scoredisplay.innerText = score;
const question = [
  {
    correct: 2,
    options: ["jury", "assess"],
    quiz: ["value", "estimate", "evaluate"],
  },
  {
    correct: 2,
    options: ["trace", "adjacent"],
    quiz: ["close", "near", "next"],
  },
  {
    correct: 2,
    options: ["mad", "exotic"],
    quiz: ["foreign", "national", "ethnic"],
  },
  {
    correct: 1,
    options: ["forecast", "sustainable"],
    quiz: ["assume", "insight", "weather"],
  },
  {
    correct: 2,
    options: ["charity", "rapid"],
    quiz: ["fast", "quick", "prompt"],
  },
];



function displayQuestion() {
  question.forEach((element) => {

    let questionBox = document.createElement("div");
    questionBox.classList.add("question-box");


    const logoImage =document.createElement("h1")
    logoImage.innerHTML='✒'
    questionBox.appendChild(logoImage)


    element.quiz.forEach((tip) => {
      let p = document.createElement("p");
      p.textContent = tip;
      questionBox.append(p);
    });
    

  const questionButton= document.createElement("div")
  questionButton.classList.add('question-buttons')
   questionBox.append(questionButton)
   
   element.options.forEach((data ,optionIndex)=>{

    let button = document.createElement("button")
    button.classList.add('question-button')
    button.innerHTML=data
    button.addEventListener('click',()=>checkAnswer(data,questionBox,optionIndex+1,element.correct,button))
    questionButton.append(button)

   })
   const answerDisplay =document.createElement("div")
   answerDisplay.classList.add("answer-display")
   questionBox.append(answerDisplay)

   questiondisplay.append(questionBox);

  });

}

displayQuestion();

const checkAnswer=(option,questionBox,optionIndex,correctAnswer,questionbutton)=>{
    if(optionIndex===correctAnswer){
     score++;
     scoredisplay.textContent=score;
     addResult(questionBox,"Correct","correct")
  
    }
    else{
    score--;
    scoredisplay.textContent=score;
    addResult(questionBox,"Wrong!","wrong")
    }
    clicked.push(option)
    questionbutton.disabled=clicked.includes(option)
  
 }

 function addResult(questionBox,answer,className){
   const answerDisplay=questionBox.querySelector(".answer-display")
   answerDisplay.classList.remove('wrong')
  answerDisplay.classList.remove('correct')
  answerDisplay.classList.add(className)
  answerDisplay.textContent=answer;

 }