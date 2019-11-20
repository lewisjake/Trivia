// on ready function to load the page
$(document).ready(function() {
    // trivia game
    // initialize values
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var timeRemaining = 15;
    var intervalId;
    var QandA = 0; // allows another question to load with the game restarting
    var answered = false; // stop timer if user clicks an answer
    var triviaGame = [{
            question: "How many games are played in the regular season?",
            answer: [110, 150, 100, 162],
            correctAnswer: "3",
            image:
        },
    
    }];

}