// on ready function to load the page
$(document).ready(function() {
    // trivia game
    // initialize values
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var timeRemaining = 15;
    var intervalId;
    var indexQandA = 0; // allows another question to load with the game restarting
    var answered = false; // stop timer if user clicks an answer
    var triviaGame = [{
            question: "How many games are played in a regular season of Baseball?",
            answer: [110, 150, 100, 162],
            correct: "3",
            image: ("assets/images/162.jpg")
        }, {
            question: "The World Series is the Championship Title in baseball, which team has won the most?",
            answer: ["Yankees", "Red Sox", "White Sox", "Tigers"],
            correct: "0",
            image: ("assets/images/yankees.png") 
        }, {
            question: "Arguably the most famous name in baseball, Bath Ruth's real name is?",
            answer: ["George Herman Ruth Jr.", "Hank Ruth", "Sandy Ruth", "George Brett Ruth"],
            correct: "0",
            image: ("assets/images/babeRuth.png")
        }, {
            question: "The highest number of wins in a single season ever recorded is?",
            answer: [110, 116, 98, 121],
            correct: "1",
            image: ("assets/images/116.jpg")
        }, {
            question: "When a batter hits a single, double, triple, and homerun all in the same game this is called hitting for the: ",
            answer: ["Cycle", "Trifecta", "Triple Crown", "Perfection"],
            correct: "0",
            image: ("assets/images/cycle.jpg")
        }, {
            question: "In 1970, pitch Doc Ellis claimed to have thrown a no-hitter while under the influence of what drug?",
            answer: ["LSD", "Cocaine", "Codine", "Marijuana"],
            correct: "0",
            image: ("assets/images/doc.jpg")
        }, {
            question: "Pitcher Joel Zumaya missed three games in 2006 citing his injuring from playing this videogame: ",
            answer: ["Buck Hunter", "Guitar Hero", "Dance Dance Revolution", "Call of Duty"],
            correct: "1",
            image: ("assets/images/guitar.jpg") 
        }];

    // functions to run the game
    function startGame() {
        console.log("Start!");
        $('.start-button').remove();
        correctAnswers = 0;
        incorrectAnswers = 0;
        unansweredQuestions = 0;
        loadQandA();
    }

    function loadQandA() {
        answered = false; // allows time to be pushed after each round
        timeRemaining = 15;
        intervalID = setInterval(timer, 1000);
        if (answered === false) {
            timer();
        }
        correct = triviaGame[indexQandA].correct;
        var question = triviaGame[indexQandA].question;
        $('.question').html(question);
        for (var i = 0; i < 4; i++) {
            var answer = triviaGame[indexQandA].answer[i];
            $('.answers').append('<h4 class= answersAll id=' + i + '>' + answer + '</h4>');
        }

        $("h4").click(function () {
            var id = $(this).attr('id');
            if (id === correct) {
                answered = true; // stops the timer
                $('.question').text("THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
                correctAnswer();
            } else {
                answered = true; //stops the timer
                $('.question').text("YOU CHOSE: " + triviaGame[indexQandA].answer[id] + ".....HOWEVER THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
                incorrectAnswer();
            }
        });
    }

    function timer() {
        if (timeRemaining === 0) {
            answered = true;
            clearInterval(intervalID);
            $('.question').text("THE CORRECT ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
            unAnswered();
        } else if (answered === true) {
            clearInterval(intervalID);
        } else {
            timeRemaining--;
            $('.timeRemaining').text('YOU HAVE ' + timeRemaining + ' SECONDS TO CHOOSE');
        }

}
// check for correct answer
function correctAnswer() {
    correctAnswers++;
    $('.timeRemaining').text("YOU HAVE ANSWERED CORRECTLY!").css({
        'color': '#3D414F'
    });
    resetRound();
}


    }



});