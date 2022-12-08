const startQuizBtn = document.querySelector(".start-quiz");
let question = document.querySelector("#question");
let choix1 = document.querySelector("#first-choice");
let choix2 = document.querySelector("#second-choice");
const responseBtns = document.querySelectorAll(".response-button");
const quizBox = document.querySelector(".quiz-box");
const pointsElement = document.querySelector(".points");
const pointsElementChild = document.querySelector(".points > p");
let index = 0;
let points = 0;

const questions = [
    {
        question: "Quel est l'animal considéré comme le plus dangereux",
        response: "Le crocodile du Nil",
        fake_response: "Le chat"
    },
    {
        question: "Combien de rayures y a-t-il sur le drapeau américain ?",
        response: "13",
        fake_response: "11"
    },
    {
        question: "En combien de jours la Terre tourne-t-elle autour du Soleil ?",
        response: "365",
        fake_response: "364"
    },
    {
        question: "Jusqu’en 1923, comment s’appelait la ville turque d’Istanbul ?",
        response: "Constantinople",
        fake_response: "Rome"
    },
    {
        question: "Quel artiste a peint le plafond de la chapelle Sixtine à Rome ?",
        response: "Michel-Ange",
        fake_response: "Lamartine"
    },
    {
        question: "Qui a inventé le World Wide Web ?",
        response: "Tim Berners-Lee",
        fake_response: "Jeff Bezos"
    },
    {
        question: "Que s’est-il passé le 20 juillet 1969 ?",
        response: "Apollo 11 a atterri sur la Lune",
        fake_response: "Fin de la Guerre Froide"
    },
    {
        question: "Quel mot d’argot désignant New York est-il utilisé par la population locale ?",
        response: "Gotham",
        fake_response: "Yaw"
    },
    {
        question: "Quel graffeur célèbre est originaire de Bristol ?",
        response: "Banksy",
        fake_response: "Swoon"
    },
    {
        question: "Quel est le champion du monde de Formule 1 en 2022 ?",
        response: "Max Verstappen",
        fake_response: "Daniel Ricciardo"
    }
];

// initaliser la première question
startQuizBtn.addEventListener("click", () => {
    startQuizBtn.style.display = "none";
    question.innerText = questions[0].question;
    choix1.innerText = questions[0].response;
    choix2.innerText = questions[0].fake_response;
});

responseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // vérifier si la réponse est bonne
        if(btn.innerText !== questions[index].response) {
            btn.style.background = "crimson";
        } else {
            btn.style.background = "green";
            points += 1;
        }

        setNewQuestion();
    });
});

function setNewQuestion() {
    // mettre la réponse de façon aléatoire entre le bouton de gauche et celui de droite
    const randomIndex = Math.floor(Math.random() * 2);

    setTimeout(() => {
        index += 1;

        // vérifier si l'utilisateur est à la dernière question
        if(index === questions.length) {
            // afficher le nombre de points de l'utilisateur
            quizBox.style.display = "none";
            pointsElement.style.display = "block";
            pointsElementChild.innerText = `${points > 0 ? "Bravo ! Vous avez accumulé" : "Dommage ! Vous avez"} ${points} ${points > 0 ? "points" : "point"}`;
            return;
        }

        // mettre les deux réponses dans les deux boutons de façon aléatoire
        question.innerText = questions[index].question;
        responseBtns[randomIndex].innerText = questions[index].fake_response;
        
        if(randomIndex < 1) {
            responseBtns[randomIndex + 1].innerText = questions[index].response;
        } else {
            responseBtns[randomIndex - 1].innerText = questions[index].response;
        }

        // remettre la couleur de fond de base des deux boutons
        responseBtns[0].style.background = "dodgerblue";
        responseBtns[1].style.background = "dodgerblue";
        
    }, 100);
}