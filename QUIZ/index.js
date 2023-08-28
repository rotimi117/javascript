const questions = [
    {
        question: "1. What is a correct syntax to output 'Hello World' in Python?",
        choices: ["echo 'Hello World'", "p('Hello World')", "echo('Hello World')", "print('Hello World')"],
        correctAnswer: "print('Hello World')"
    },
    {
        question: "2. What is a correct syntax to return the first character in a string?",
        choices: ["x = 'Hello'[0]", "x = 'Hello'.sub(0,1)", "x = sub('Hello',0,1)", "x = pop('Hello')"],
        correctAnswer: "x = 'Hello'[0]"
    },
    {
        question: "3. In Python 3, the maximum value for an integer is 2^63 - 1:",
        choices: ["TRUE", "FALSE", "BOTH", "NONE"],
        correctAnswer: "FALSE"
    },
    {
        question: "4. Which one is NOT a legal variable name?",
        choices: ["_myvar", "Myvar", "my-var", "my_var"],
        correctAnswer: "my-var"
    },
    {
        question: "5. How do you create a variable with the numeric value 5?",
        choices: ["x = int(5)", "Both the other answers are correct", "x = 5", "5 = x"],
        correctAnswer: "x = 5"
    },
    {
        question: "6. What is the correct file extension for Python files?",
        choices: [".pyth", ".pt", ".py", ".pyt"],
        correctAnswer: ".py"
    },
    {
        question: "7. How do you create a variable with the floating number 2.8?",
        choices: ["x = float(2.8)", "x = 2.8", "Both the other answers are correct", ""],
        correctAnswer: "Both the other answers are correct"
    },
    {
        question: "8. What is the correct syntax to output the type of a variable or object in Python?",
        choices: ["print(type(x))", "print(typeOf(x))", "print(typeof x)", "print(typeof(x))"],
        correctAnswer: "print(type(x))"
    },
    {
        question: "9. What is the correct way to create a function in Python?",
        choices: ["def myFunction():", "function myfunction", "create myFunction():", "make myFunction"],
        correctAnswer: "def myFunction():"
    },
    {
        question: "10. In Python, 'Hello' is the same as \"Hello\"",
        choices: ["TRUE", "FALSE", "", ""],
        correctAnswer: "TRUE"
    }        
];

// Initialize variables
let currentQuestionIndex = 0;
let score = 0;

// Function to load the current question
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    // Display the current question
    questionElement.textContent = questions[currentQuestionIndex].question;

    // Clear the previous choices
    choicesElement.innerHTML = '';

    // Display the choices for the current question
    questions[currentQuestionIndex].choices.forEach((choice, index) => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "choice";
        input.value = choice;

        li.appendChild(input);
        li.appendChild(document.createTextNode(choice));
        choicesElement.appendChild(li);
    });

    // Enable/disable next and previous buttons based on the current question
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = currentQuestionIndex === questions.length - 1;
}

// Function to check the user's answer
function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');

    if (selectedChoice) {
        const userAnswer = selectedChoice.value;

        // Check if the user's answer is correct
        if (userAnswer === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }
    }
}

function goToNextQuestion() {
    checkAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

// Function to go to the previous question
function goToPreviousQuestion() {
    checkAnswer();
    currentQuestionIndex--;
    loadQuestion();
}

// Function to finish the quiz and display the score
function finishQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h1>Quiz Complete</h1>
    <p>Your Score: ${score} out of ${questions.length}</p>`;
}

// Load the first question when the page loads
loadQuestion();

// Event listener for the Next button
const nextButton = document.getElementById("next");
nextButton.addEventListener("click", goToNextQuestion);

// Event listener for the Previous button
const prevButton = document.getElementById("prev");
prevButton.addEventListener("click", goToPreviousQuestion);
