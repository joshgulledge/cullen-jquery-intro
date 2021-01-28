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
}
