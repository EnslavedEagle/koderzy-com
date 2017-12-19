const $ = require('jquery');

module.exports = () => {
  $form = $('#enroll');
  $response = $('#enroll-response');
  $formElements = $('#enroll input, #enroll button');

  function response(response) {
    $response.removeClass('success error');
    $formElements.removeAttr('disabled');
    if (response['success']) {
      $response.addClass('success').html('Gratulacje!<br>Pomyślnie zapisaliśmy Cię na kurs.');
    } else {
      $response.addClass('error').html(
        'Wystąpiły błędy podczas<br>zapisywania Cię na kurs: '
        + '<ul class="errors">'
        + response['errors'].map((item) => '<li>' + item + '</li>')
        + '</ul>'
      );
    }
  }
  
  function error(error) {
    console.error('Error!', error);
  }

  $form.submit((event) => {
    event.preventDefault();
    const data = $form.serialize();
    $formElements.attr('disabled', 'disabled');
    $.post({
      url: 'form-process.php',
      data: data,
      dataType: 'json',
      success: response,
      error: error
    });
  });
};