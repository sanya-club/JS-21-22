let createTestString = JSON.stringify(createTest);
localStorage.setItem('createTest', createTestString);
let createTest = JSON.parse(localStorage.getItem('createTest'));
console.log(createTest);
let {
    title, subtitle, QA
} = createTest;
let container = document.createElement('div');
container.classList.add('container');
let body = document.querySelector('body');
body.appendChild(container);
container.innerHTML = `<h1>${title}</h1>
<h4>${subtitle}</h4>
<form name="quiz">
  <ol>
  </ol>
</form>`;
for (let q = 0; q < QA.length; ++q) {
    let question = QA[q];
    let idx = 1 + q;
    let list = document.createElement('li');
    document.querySelector('ol').appendChild(list);
    let qestion = document.createElement('h3');
    qestion.innerHTML = `${question.question}`;
    let parent = document.querySelectorAll('li');
    parent[q].appendChild(qestion);
    for (let j = 0; j < question.answers.length; j++) {
        let answer = document.createElement('p');
        answer.innerHTML = `<label><input type = "checkbox" name = "q${idx}" value="${j}" ><span>${question.answers[j]}</span></label>`;
        document.querySelectorAll('li')[q].appendChild(answer);
    }
}
let submit = document.createElement('input');
submit.classList.add('btn');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Проверить мои результаты');
document.querySelector('form').appendChild(submit);
let yourAns = [];
let rightAns = [];
for (let i = 0; i < QA.length; i++) {
    rightAns.push(QA[i].correctAnswer);
};
let modalTitle = document.querySelector('.modal-title');
let modalText = document.querySelector('.modal-text');

function test() {
    for (let i = 0; i < (QA.length) * (question.answers.length); i++) {
        if (checkbox[i].checked) {
            yourAns.push(+checkbox[i].value);
        }
    }
    let yourAnswer = yourAns.join(',');
    let rightAnswer = rightAns.join(',');
    //    console.log(yourAnswer);
    //    console.log(rightAnswer);
    if (yourAns.length < QA.length) {
        modalTitle.innerHTML = 'Упс!';
        modalText.innerHTML = 'Вы не выбрали ответы!';
        modal.style.background = 'rgba(73, 99, 115, .8)';
    }
    else if (yourAnswer !== rightAnswer) {
        modalTitle.innerHTML = 'Увы :(';
        modalText.innerHTML = 'Вы не прошли этот тест';
        modal.style.background = 'rgba(179, 0, 0, .8)';
    }
    else {
        modalTitle.innerHTML = 'Ура!';
        modalText.innerHTML = 'Вы прошли этот тест!';
    }
}
let modal = document.getElementById('modal');
let close = document.getElementById('close');
let checkbox = document.querySelectorAll('input[type="checkbox"]');
modal.style.display = 'none';
submit.onclick = function (e) {
    e.preventDefault();
    modal.style.display = 'block';
    test();
}
close.onclick = function () {
    modal.style.display = 'none';
    location.reload();
};
