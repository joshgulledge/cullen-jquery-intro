console.log('Js is linked');

$(document).ready(onReady);

function onReady() {
  console.log('jQuery linked');

  const h1 = $('h1');
  console.log(h1);

  const h2 = $('h2');
  h2.css('background-color', 'blue');
  $('h1').addClass('froggy');

  const h1Text = $('h1');
  h1Text.text('Goodbye');

  $('#submit-button').on('click', btnClicked);
  $('#games').on('click', '.delete-button', deleteMe);
}

function deleteMe() {
  console.log('delete me');
}

function btnClicked() {
  let brand = $('#brand').val();

  $('#games').append(`
  <li>
  You picked the game: ${brand}
  <button class="delete-button"> delete </button>
  </li>
  `);
}
