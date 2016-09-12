let createTestString = JSON.stringify(createTest);

localStorage.setItem('createTest', createTestString);

let createTest = JSON.parse(localStorage.getItem('createTest'));

let results = document.querySelector('.test-wrap');

results.innerHTML = tmpl("test", createTest);



$(function () {




  let $submitButton = $('#submit');
  let $modal = $('#modal');
  let $close = $('#close');
  let $checkbox = $('input:checked');

  $modal.hide(); /*скрываем модальное окно*/

  $submitButton.each(function () {
    $(this).on('click', function () {
      $modal.fadeIn(300); /*при клике показываем модальное окно*/
      let $checked = []; /*создаем массив в кот. потом запишем выбраные ответы*/

      $('input:checked').each(function () {

        let $ans = $(this).next().text(); /*ищем в активных чекбоксах следующий элемент а в нем выбираем текст */
        let $str = $.trim($ans) /*убираем все побелы в массиве*/
        $checked.push($str); /*добавляем в массив наши ответы*/
      });

      let $myAnswers = $checked.join(','); /*преобразуем массив в строку*/
      console.log('$myAnswers=', $myAnswers.length);


      if ($myAnswers == corectAnswers) {
        $('.modal-title').text('Поздравляем!');
        $('.modal-body p').text('Вы прошли этот тест!');
      } else if ($myAnswers.length == 0) {
        $('.modal-title').text('Упс!');
        $('.modal-body p').text('Вы не выбрали ответы!');
        $modal.css({
          'backgroundColor': 'rgba(73, 99, 115, .8)'
        });
      } else {
        $('.modal-title').text('Увы :(');
        $('.modal-body p').text('Вы не прошли этот тест! Попробуйте еще раз');
        $modal.css({
          'backgroundColor': 'rgba(179, 0, 0, .8)'
        });
      }
    });
  });

  $close.each(function () {
    $(this).on('click', function () {
      $modal.fadeOut(300);
      $("input:checked").attr('checked', false);
      window.localStorage.clear();
      location.reload();
      return false;
    });
  });

});