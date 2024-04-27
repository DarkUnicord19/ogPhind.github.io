let squidwardQuestions = [
    {
        question: "Do you like seafood?",
        responses: {
            yes: "Great! We can go to the seafood restaurant.",
            no: "Oh, that's a shame. We'll find something else to do.",
            idk: "It's okay, we can find something else to do."
        }
    },
    {
        question: "Do you enjoy going to the beach?",
        responses: {
            yes: "Perfect! We can have a picnic.",
            no: "No worries, we can find another activity.",
            idk: "We can find something else to do."
        }
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    let question = squidwardQuestions[currentQuestionIndex].question;
    document.getElementById('squidward-text').textContent = question;
}

function playerResponse(response) {
    let responseText = squidwardQuestions[currentQuestionIndex].responses[response];
    document.getElementById('squidward-text').textContent = responseText;

    currentQuestionIndex++;
    if (currentQuestionIndex < squidwardQuestions.length) {
        setTimeout(displayQuestion, 2000);
    } else {
        document.getElementById('squidward-text').textContent = "At the end of the date, Squidward says: 'I think I've found someone who understands me.'";
    }
}

displayQuestion();
