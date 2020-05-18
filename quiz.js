// select all elements
const loginn = document.getElementById("login");
const quizz = document.getElementById("quiz");
const questionA = document.getElementById("questionArea");
const qnsnumbr = document.getElementById("qnsnumb");
const choiceP = document.getElementById("opt5");
const choiceQ = document.getElementById("opt4");
const choiceR = document.getElementById("opt3");
const choiceS = document.getElementById("opt2");


let score = 0;
let qnsIndex = 0;
let eventChecker = 0;

// create our questions
let questions = [
    {
        question : "A stud of _______  ",
        qnsnum : "QNS 1",
        choiceA : "birds",
        choiceB : "horses",
        choiceC : "flies",
        choiceD : "flowers",
        correct : 4
    },{
        question : "I bought __________ bread yesterday",
        qnsnum : "QNS 2",
        choiceA : "a bar",
        choiceB : "a loaf",
        choiceC : "a block",
        choiceD : "a stripe",
        correct : 4
    },{
        question : "A litter of _______ ",
        qnsnum : "QNS 3",
        choiceA : "Cows",
        choiceB : "Cats",
        choiceC : "Puppies",
        choiceD : "Bats",
        correct : 3
    },{
        question : "A _______ of sailors",
        qnsnum : "QNS 4",
        choiceA : "crew",
        choiceB : "army",
        choiceC : "gang",
        choiceD : "regiment",
        correct : 5
    },{
        question : "____________  of the flowers  ",
        qnsnum : "QNS 5",
        choiceA : "swarms",
        choiceB : "cluster",
        choiceC : "herd",
        choiceD : "garland",
        correct : 2
    },
    {
        question : "A group of lions is known as _____",
        qnsnum : "QNS 6",
        choiceA : "pide",
        choiceB : "flock",
        choiceC : "team ",
        choiceD : "swarm",
        correct : 5
    },
    {
        question : "A ________ of maps",
        qnsnum : "QNS 7",
        choiceA : "babel",
        choiceB : "band",
        choiceC : "cluster",
        choiceD : "atlas",
        correct : 2
    },{
        question : "A _______ of asteroids ",
        qnsnum : "QNS 8",
        choiceA : "bank",
        choiceB : "cloud",
        choiceC : "belt",
        choiceD : "round",
        correct : 3
    },{
        question : "A _______ of oysters ",
        qnsnum : "QNS 9",
        choiceA : "bed",
        choiceB : "belt",
        choiceC : "bank",
        choiceD : "constallation ",
        correct : 5
    },{
        question : "A _________ of birds",
        qnsnum : "QNS 10",
        choiceA : "flock",
        choiceB : "swarm",
        choiceC : "fleet",
        choiceD : "pack",
        correct : 5

    },{
        question : "A _________ of rhinoceros",
        qnsnum : "QNS 11",
        choiceA : "flock",
        choiceB : "swarm",
        choiceC : "crash",
        choiceD : "fleet",
        correct : 3
        
    },{
        question : "Collective noun of cotton",
        qnsnum : "QNS 12",
        choiceA : "bail",
        choiceB : "bale",
        choiceC : "bile",
        choiceD : "bill",
        correct : 4
        
    },{
        question : "A fleet of ______",
        qnsnum : "QNS 13",
        choiceA : "flowers",
        choiceB : "sheep",
        choiceC : "grass",
        choiceD : "ships",
        correct : 2
        
    },{
        question : "A large ______ of policeman could be seen on the site",
        qnsnum : "QNS 14",
        choiceA : "posse",
        choiceB : "crew",
        choiceC : "army",
        choiceD : "mob",
        correct : 5
        
    },{
        question : "Collective noun of peacocks ",
        qnsnum : "QNS 15",
        choiceA : "muster",
        choiceB : "murder",
        choiceC : "quiver",
        choiceD : "school",
        correct : 5
        
    },{
        question : "Collective noun for guns is ",
        qnsnum : "QNS 16",
        choiceA : "covery",
        choiceB : "flight",
        choiceC : "bask",
        choiceD : "battery",
        correct : 2
        
    },{
        question : "Collective noun of crows",
        qnsnum : "QNS 17",
        choiceA : "muster",
        choiceB : "murder",
        choiceC : "crash",
        choiceD : "fleet",
        correct : 4
        
    },{
        question : "Collective noun of beauties",
        qnsnum : "QNS 18",
        choiceA : "bevy",
        choiceB : "crowd",
        choiceC : "chain",
        choiceD : "box",
        correct : 5
        
    },{
        question : "I saw a ______ of sheep in the field",
        qnsnum : "QNS 19",
        choiceA : "group",
        choiceB : "fleet",
        choiceC : "flock",
        choiceD : "swarm",
        correct : 3
        
    },{
        question : "The women was attacked by a ______ of wolves",
        qnsnum : "QNS 20",
        choiceA : "herd",
        choiceB : "gang",
        choiceC : "pack",
        choiceD : "flock",
        correct : 3
        
    }

    
    
];



const lastQuestion = questions.length - 1;

function playAggain(){
    qnsIndex = 0;
    score = 0;
    eventChecker = 0;
    scoreBoard.style.display = "none"
    startQuiz();
    optionRelease();

}

// start quiz
function startQuiz(){
    loginn.style.display = "none";
    jacknt.style.display  = "none";
    loadQuestion();
    quizz.style.display = "block";
    choices.style.display ="block";
}

function loadQuestion(){
    let q = questions[qnsIndex];
    
    questionA.innerHTML = "<p>"+ q.question +"</p>";
    qnsnumbr.innerHTML= q.qnsnum;

    choiceP.innerHTML = q.choiceA;
    choiceQ.innerHTML = q.choiceB;
    choiceR.innerHTML = q.choiceC;
    choiceS.innerHTML = q.choiceD;
}


// checkAnwer
let prvsChoice;
function checkAnswer(answer){

    eventChecker++;

    optionLock();
    prvsChoice = answer;
    var ide = answer.id.split("");  

    if(ide[ide.length-1]==questions[qnsIndex].correct){
        score++;
        answer.className = "changecolorGreen";
        
    }else{
        answer.className = "changecolorRed";

    }

    
   
}


function nextQns(){
 
    optionRelease();
    if(eventChecker > 0){
        prvsChoice.className = "choice"
    } 

    qnsIndex++;

    if(qnsIndex <= lastQuestion){
        loadQuestion();
    }else{
        optionLock();
        scoreRelease();
    }                                                                                                                                                                                                                                                                                                                                                  

}



// score 
function scoreRelease(){

    scoreBoard.style.display = "grid"; 
    const totalScore = score ;

    document.getElementById("scoreCard").innerHTML = " Your score : "+ totalScore ;
}


function optionLock(){

    choiceP.style.pointerEvents = "none";
    choiceQ.style.pointerEvents = "none";
    choiceR.style.pointerEvents = "none";
    choiceS.style.pointerEvents = "none";
}

function optionRelease(){

    choiceP.style.pointerEvents = "auto";
    choiceQ.style.pointerEvents = "auto";
    choiceR.style.pointerEvents = "auto";
    choiceS.style.pointerEvents = "auto";

}

