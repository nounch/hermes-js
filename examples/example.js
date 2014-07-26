$(document).ready(function() {

  var hermes = new Hermes();
  var testMessage = 'This is a message to you.'

  var testButton = $('<button type="button" class="btn btn-primary">Generate message</button>')
  $('html').prepend(testButton);
  $(testButton).click(function(e) {
    e.preventDefault();
    hermes.message(testMessage);
  });
  hermes.message("That's it! Hope you like it.", {
    'text-align': 'center',
    'font-weight': 'bold',
  }, false);
  hermes.message('All message can be <b>scrolled back</b>, in case there are too many.', {}, false);
  hermes.message('Did you notice the close button (<span style="background-color: #57534A; color: #F1F1E1; font-size: 19px; border-radius: 0 5px 0 0; text-shadow: none; padding-left: 80px; padding-right: 10px;">&times;</span>) above? Also, there →', {}, false);
  hermes.message('A message can contain HTML, e.g. a <a href="#">link</a>.', {}, false);

  hermes.inverse('This message is <b>inverse</b>.', false);
  hermes.error('This is an <b>error</b> message.', false);
  hermes.warning('This is a <b>warning</b> message.', false);
  hermes.info('This is an <b>info</b> message.', false);
  hermes.success('This is a <b>success</b> message.', false);

  // Source: http://upload.wikimedia.org/wikipedia/en/2/24/Lenna.png
  hermes.message('Here is an image: <img src="http://upload.wikimedia.org/wikipedia/en/2/24/Lenna.png" style="width: 60px; height: 60px; margin-left: 40px;" alt="No image found" />', {}, false);

  // Source: http://www.tizag.com/pics/cssT/smallPic.jpg
  hermes.message('Messages can be styled with CSS.', {
    'background-image': 'url(http://www.tizag.com/pics/cssT/smallPic.jpg)',
    'color': '#FFFF8A',
    'text-shadow': '0 2px 3px #FF0000, 0 -2px 3px #121212',
    'font-weight': 'bold',
  }, false);

  hermes.message('This is a slightly longer message that demonstrates that a message element automatically adjusts to the message length.', {}, false);
  hermes.message(testMessage, {}, false);

});
