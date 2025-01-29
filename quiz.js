  const quesJSON=[{
    correctAnswer:'Three',
    options:['Two','Three','Four','Five'],
    question:"How Many pieces of bun are in a Mcdonald's Big Mac",
  },
  {
    correctAnswer:'Titanic',
    options:['Titanic','Britannic','Olympic','Aquitania'],
    question:"What was the name of the famous ship that sank in 1912",

  },
  {
    correctAnswer:'Mars',
    options:['Earth','Mars','Jupiter','Saturn'],
    question:
    "Which planet in our solar system is known as the 'Red Planet'?",

  },
  {
    correctAnswer:'Amazon River',
    options:['Amazon River','Parana River',' São Francisco River','Ganga River'],
    question:"Which river is the longest in South America?",
  },
  {
    correctAnswer:'Vincent van Gogh',
    options:[' Leonardo da Vinci','Pablo Picasso','Vincent van Gogh',' Claude Monet'],
    question:"Who painted the famous artwork 'The Starry Night'?",

  },
];

    
    let score = 0;
    let currentQuestion=0;
    const totalScore=quesJSON.length;
    // Declaring a variable score

   

     //fetching all elements from the questionObj
     const questionEl= document.getElementById('question');
  
     const optionEl= document.getElementById('options');
  
     const scoreEl= document.getElementById('score');

     const nextEl=document.getElementById('next');
     showQuestion();


     nextEl.addEventListener("click", ()=>{
      scoreEl.textContent= `score: ${score} / ${totalScore}`;
      nextQuestion();
     });
    //for every question we need it (happen for individual question)
    function showQuestion(){
         //destructure the questionObj i want it everywhere 
    const{correctAnswer,options,question}=quesJSON[currentQuestion];

      //setting question text content
    questionEl.textContent=question;

    const shuffledOptions=shuffleOptions(options);

    //populating the options div with the buttons
//looping each element
  shuffledOptions.forEach((opt) => {
    //Createing button and appending it to the option div
  const btn = document.createElement('button');
  btn.textContent=opt;
  
  optionEl.appendChild(btn);

  //Event handeling on the button
  btn.addEventListener('click', () => {
    if (opt === correctAnswer){
      score++;
    }
    else{
      score= score - 0.25;
    }
    //console.log(score);
    scoreEl.textContent= `score: ${score} / ${totalScore}`;
    

  });
});
    }
     
function nextQuestion(){
  currentQuestion++;
  optionEl.textContent="";
  if(currentQuestion>=quesJSON.length){
       questionEl.textContent="Quiz Completed!!";
      nextEl.remove();
    } else{
    showQuestion();
  }
}
  //Manipulating the DOM
  
   

//shuffling the options
function shuffleOptions(options){
  for(let i=options.length-1; i>=0; i--){
    const j= Math.floor(Math.random() * (i + 1));

  [options[i],options[j]] = [options[j],options[i],
];
}
    return options;
}