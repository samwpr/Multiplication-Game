const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 100);
const questionEl = document.getElementById('question');
const inputEl = document.getElementById('input');
const formEl = document.getElementById('form');
const scoreEl = document.getElementById('score');
const answerEl = document.getElementById('answer');

let score = JSON.parse(localStorage.getItem("score"));

if(!score) {
    score = 0;
}

scoreEl.innerHTML = `Score: ${score}`;

questionEl.innerHTML = `What is ${num1} x ${num2} ?`;

const answer = num1 * num2;

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;
    if (userAns === answer){
        score++;
        updateLocationStorage();
    } else {
        score --;
        updateLocationStorage();
        answerEl.innerHTML = `Answer ${answer}`;
    }

});

function updateLocationStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}