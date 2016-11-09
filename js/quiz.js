//A Simple Quiz Engine
/* 
  *Author: U'el Azdrian small
  *Date:August 15 2016
  *File Name: quiz.js
  *Website: https://azdrian.github.io/simple-quiz-engine/
*/

//assign variables
var pos = 0,
	testArea, testStatus, question, choice, choices, choiceA, choiceB, choiceC, correct = 0;

//store all questions in multi-dimensional array
var questions = [
	['How many moons does Earth have?', "3", " 1", "5", "B"],
	['How many moons does Saturn have?', "31", "21", "5", "A"],
	['How many moons does Venus have?', "2", "1", "0", "C"],
	['How many seas does Earth have?', "2", "1", "4", "B"],
	['How many stars does Earth have?', "Infinity", "1060", "2400", "A"],
	['How many days it will take to die without water?', "365", "245", "364", "A"],
	['How many glasses of water you should drink in a day?', "4", "6", "8", "C"],
	['How many months in a year?', "13", "12", "11", "B"],
	['How many coins make a dollar?', "3", "2", "4", "C"],
	['How many days in a week?', "7", "8", "6", "A"]
];

//assign an id reference
function getId(x) {
	return document.getElementById(x);
}

function renderQuestion() {
	testArea = getId("testArea");
	testStatus = getId("testStatus");

	//show results  when the user reached the end of the quiz
	if (pos >= questions.length) {
		testStatus.innerHTML = "<h5>Test Results</h5>";
		testArea.innerHTML = "<p>You Got " + correct + " out of " + questions.length + " questions correct! </p>";

		//Add a link to id =testArea
		// 1. Create the button
		var button = document.createElement("a");
		button.innerHTML = "Start Over";
		button.href="https://azdrian.github.io/simple-quiz-engine/";
		button.id="new-quiz";

		// 2. Append after results
		var body = document.getElementsByTagName("p")[0];
		body.appendChild(button);


		pos = 0;
		correct = 0;

		return false;
	}

	//question status: Lets the user know what question they are currently on
	testStatus.innerHTML = "<p class='text-info question-status'>Question " + (pos + 1) + " of " + questions.length + "</p>";

	//populate the TestArea div with questions
	question = questions[pos][0];
	choiceA  = questions[pos][1];
	choiceB  = questions[pos][2];
	choiceC  = questions[pos][3];

	testArea.innerHTML = "<h2>" + question + "</h2>";
	testArea.innerHTML += "A: <input type = 'radio' name='choices' value= 'A'> " + choiceA + "<br>";
	testArea.innerHTML += "B: <input type = 'radio' name='choices' value= 'B'> " + choiceB + "<br>";
	testArea.innerHTML += "C: <input type = 'radio' name='choices' value= 'C'> " + choiceC + "<br>";
	testArea.innerHTML += "<div class='text-center submit-answer'><input class='btn btn-primary btn-sm' type='button' id='submit' value='Submit Answer'/></div>";

	// when submit button is pressed the checkAnswer() is called
	getId("submit").addEventListener('click', checkAnswer);
}

//checks the answer from the user's input against the correct answer
function checkAnswer() {
	choices = document.getElementsByName("choices");

	for (var i = 0, len = choices.length; i < len; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}

	if (choice === questions[pos][4]) {
		correct++;
	}
	
	pos++;
	renderQuestion();
}


//get start Quiz button
var button = getId("start-quiz-button"); //get button
//Add event on startGame button
button.addEventListener("click", renderQuestion);

