'use strict';

var createTestString = JSON.stringify(createTest);
localStorage.setItem('createTest', createTestString);
var createTest = JSON.parse(localStorage.getItem('createTest'));
console.log(createTest);
var title = createTest.title;
var subtitle = createTest.subtitle;
var QA = createTest.QA;

var container = document.createElement('div');
container.classList.add('container');
var body = document.querySelector('body');
body.appendChild(container);
container.innerHTML = '<h1>' + title + '</h1>\n<h4>' + subtitle + '</h4>\n<form name="quiz">\n  <ol>\n  </ol>\n</form>';
for (var q = 0; q < QA.length; ++q) {
    var question = QA[q];
    var idx = 1 + q;
    var list = document.createElement('li');
    document.querySelector('ol').appendChild(list);
    var qestion = document.createElement('h3');
    qestion.innerHTML = '' + question.question;
    var parent = document.querySelectorAll('li');
    parent[q].appendChild(qestion);
    for (var j = 0; j < question.answers.length; j++) {
        var answer = document.createElement('p');
        answer.innerHTML = '<label><input type = "checkbox" name = "q' + idx + '" value="' + j + '" ><span>' + question.answers[j] + '</span></label>';
        document.querySelectorAll('li')[q].appendChild(answer);
    }
}
var submit = document.createElement('input');
submit.classList.add('btn');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Проверить мои результаты');
document.querySelector('form').appendChild(submit);
var yourAns = [];
var rightAns = [];
for (var i = 0; i < QA.length; i++) {
    rightAns.push(QA[i].correctAnswer);
};
var modalTitle = document.querySelector('.modal-title');
var modalText = document.querySelector('.modal-text');

function test() {
    for (var _i = 0; _i < 9; _i++) {
        if (checkbox[_i].checked) {
            yourAns.push(+checkbox[_i].value);
        }
    }
    var yourAnswer = yourAns.join(',');
    var rightAnswer = rightAns.join(',');
    //    console.log(yourAnswer);
    //    console.log(rightAnswer);
    if (yourAns.length < QA.length) {
        modalTitle.innerHTML = 'Упс!';
        modalText.innerHTML = 'Вы не выбрали ответы!';
        modal.style.background = 'rgba(73, 99, 115, .8)';
    } else if (yourAnswer !== rightAnswer) {
        modalTitle.innerHTML = 'Увы :(';
        modalText.innerHTML = 'Вы не прошли этот тест';
        modal.style.background = 'rgba(179, 0, 0, .8)';
    } else {
        modalTitle.innerHTML = 'Ура!';
        modalText.innerHTML = 'Вы прошли этот тест!';
    }
}
var modal = document.getElementById('modal');
var close = document.getElementById('close');
var checkbox = document.querySelectorAll('input[type="checkbox"]');
modal.style.display = 'none';
submit.onclick = function (e) {
    e.preventDefault();
    modal.style.display = 'block';
    test();
};
close.onclick = function () {
    modal.style.display = 'none';
    location.reload();
};
//# sourceMappingURL=scriptES-6.js.map
