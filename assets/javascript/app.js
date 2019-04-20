///create a timer that decriments by 1 second from 30
///use an on click function
///if you click on the correct answer, call a function that changes the html to the congratulations screen for 5 seconds
///then call a function that changes the html to the second question
///if you click on the wrong answer, call a function that changes the html to the wrong answer screen for 5 seconds

///make an answer array - use random function that changes the location of the displayed correct answer
///use an on click function that calls the answer array function

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//make a function that will display the answers
//make a function that displays a correct answer screen
//make a function that displays an incorrect answer screen


///questions and answers stored in objects



// var trivia = [{

//     question: "What muscle flexes the elbow?",
//     answer: ["tricep", "bicep", "deltoid", "trapezius"],
//     correctAnswer: 1,
// }, {
//     question: "What muscle internally rotates the shoulder?",
//     answer: ["supraspinatus", "infraspinatus", "teres minor", "subscapularis"],
//     correctAnswer: 3,
// }, {
//     question: "What muscle abducts the hip?",
//     answer: ["gluteus medius", "hamstrings", "psoas major", "quadriceps"],
//     correctAnswer: 0,
// }];
var trivia = [
    {
        question: "What muscle flexes the elbow?",
        answer0: "tricep",
        answer1: "bicep",
        answer2: "deltoid",
        answer3: "trapezius",
        correctAnswer: "bicep",

    },

    {
        question: "What muscle internally rotates the shoulder?",
        answer0: "supraspinatus",
        answer1: "infraspinatus",
        answer2: "teres minor",
        answer3: "subscapularis",
        correctAnswer: "subscapularis"
    },

    {
        question: "What muscle abducts the hip?",
        answer0: "gluteus medius",
        answer1: "hamstrings",
        answer2: "psoas major",
        answer3: "quadriceps",
        correctAnswer: "gluteus medius"
    },

    {
        question: "What muscle plantarflexes the foot?",
        answer0: "sartorious",
        answer1: "popliteus",
        answer2: "soleus",
        answer3: "peroneus longus",
        correctAnswer: "soleus"
    },

    {
        question: "What muscle protracts the scapula?",
        answer0: "serratus anterior",
        answer1: "anterior deltoid",
        answer2: "latissimus dorsi",
        answer3: "middle trapezius",
        correctAnswer: "serratus anterior"
    }


];


// var IntervalId = setInterval(function () {
//     timer--;
//     $("#timer").text(timer);
// }, 30000);
var IntervalId;
var numberCorrect = 0;
var numberIncorrect = 0;
var timer = 30;
var questionNumber = 0;


//this function displays the answers and question on the screen
function displayQandA(index) {

    $("#question").text(trivia[index].question);
    $("#ans0").text(trivia[index].answer0);
    $("#ans1").text(trivia[index].answer1);
    $("#ans2").text(trivia[index].answer2);
    $("#ans3").text(trivia[index].answer3);
    $("#numberCorrect").html("Correct: " + numberCorrect);
    $("#numberIncorrect").html("Incorrect: " + numberIncorrect);

    timer = 30;

    IntervalId = setInterval(function () {
        timer--;
        console.log(timer);
        $("#timer").text(timer);

        if (timer === 0) {
            console.log("GAME OVER")
            timeOut();
        }

    }, 1000);
};

function timeOut() {
    clearInterval(IntervalId);
    displayWrongAnsScreen();
    numberIncorrect++;

    setTimeout(function () {
        displayQandA(questionNumber);
    }, 2000);

    questionNumber++;
}


function displayCorrectAnsScreen() {
    $("#question").text("Correct!");
    $("#ans0").text("");
    $("#ans1").text("");
    $("#ans2").text("");
    $("#ans3").text("");
    $("#numberCorrect").html("");
    $("#numberIncorrect").html("");

};

function displayWrongAnsScreen() {
    $("#question").text("Oops! thats incorrect!");
    $("#ans0").text("");
    $("#ans1").text("");
    $("#ans2").text("");
    $("#ans3").text("");
    $("#numberCorrect").html("");
    $("#numberIncorrect").html("");
};

function gameOverScreen() {
    $("#question").text("Game Over");
    $("#ans0").text("");
    $("#ans1").text("");
    $("#ans2").text("");
    $("#ans3").text("");
    $("#timer").text("");
    $("#numberCorrect").html("Correct: " + numberCorrect);
    $("#numberIncorrect").html("Incorrect: " + numberIncorrect);
    clearInterval(IntervalId);
    $("h2").off("click");
    $(".btn").show();

};

function resetGame() {
    questionNumber = 0;
    numberIncorrect = 0;
    numberCorrect = 0;
    timer = 30;
};



$("button").on("click", function () {

    resetGame();
    $(".btn").hide();
    displayQandA(0);

    // var questionNumber = 0;

    $("h2").on("click", function () {

        var clickedText = $(this).html();


        questionNumber++;


        if (clickedText === trivia[questionNumber - 1].correctAnswer) {
            displayCorrectAnsScreen();

            clearInterval(IntervalId);

            numberCorrect++;

            setTimeout(function () {
                displayQandA(questionNumber);
            }, 2000);

        }

        if (clickedText !== trivia[questionNumber - 1].correctAnswer) {
            displayWrongAnsScreen();

            clearInterval(IntervalId);

            numberIncorrect++;

            setTimeout(function () {
                displayQandA(questionNumber);
            }, 2000);
        }

        console.log(questionNumber);

        if (questionNumber === 5) {
            gameOverScreen();

        }




    });



});









