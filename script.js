// Define answers for each puzzle
const answers = {
    answer1: "time",
    answer2: "priya",
    answer3: "heart"
};

// Function to control page display
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}

// Start Puzzle Sequence
function startPuzzle() {
    showPage('puzzle1');
}

// Puzzle 1 Check
function checkAnswer1() {
    const answer = document.getElementById('answer1').value.toLowerCase().trim();
    if (answer === answers.answer1) {
        showPage('puzzle2');
    } else {
        alert("Incorrect answer. Please try again.");
    }
}

// Puzzle 2 Check
function checkAnswer2() {
    const answer = document.getElementById('answer2').value.toLowerCase().trim();
    if (answer === answers.answer2) {
        showPage('puzzle3');
    } else {
        alert("Incorrect answer. Please try again.");
    }
}

// Puzzle 3 Check
function checkAnswer3() {
    const answer = document.getElementById('answer3').value.toLowerCase().trim();
    if (answer === answers.answer3) {
        showPage('final-message');
    } else {
        alert("Incorrect answer. Please try again.");
    }
}
