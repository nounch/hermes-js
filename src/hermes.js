var Hermes = (function() {

  function Hermes(parent) {
    var self = this;
    self.parent = parent || 'body';
  }

  Hermes.prototype = new (function() {

    this.message = function(message, style) {
      var self = this;

      var style = style || {};
      var containerId = 'very-special-message-container-element-' +
        'b39aad4e-12c7-11e4-b4d0-60eb69544a6d';
      var innerContainerId = 'very-special-inner-message-container-' +
        'element-38c6bfb6-12d3-11e4-a518-60eb69544a6d';
      var removeAllButtonId = 'very-special-removea-all-button-' +
        '7633e2bc-12d2-11e4-9b7c-60eb69544a6d';
      var messagesThreshold = 5;

      if (!$('#' + containerId).length > 0) {
        var container = $('<div id="' + containerId + '">' +
                          '<div id="' + innerContainerId + '"></div>' +
                          '</div>');

        container.css({
          'z-index': '999998',
          'position': 'fixed',
          'right': '0',
          'top': '0',
          'padding-top': '10px',
          'width': '320px',
          'max-height': '100%',
          'overflow': 'auto',
          'padding': '5px',
        });
        container.hide().appendTo(self.parent).show();
      } else {
        var container = $('#' + containerId)
      }
      var innerContainer = $('#' + innerContainerId)

      var messageClass = 'very-special-message-element-'+
        'd46519d4-12cb-11e4-a2d6-60eb69544a6d';
      var closeButtonClass = messageClass * '-close-button';

      var elm = $('<div class="' + messageClass + '"><div class="' +
                  closeButtonClass + '">&times;</div>' + message +
                  '</div>');
      elm.css({
        'font-size': '15px',
        'font-family': 'Helvetica',
        'font-weight': '500',
        'border': '1px solid #B8B8A7',
        'border-radius': '5px',
        'background-color': '#F1F1F1',
        'color': '#79756C',
        'box-shadow': '0 3px 5px rgba(0, 0, 0, 0.5)',
        'text-shadow': '1px 1px rgba(255, 255, 255, 0.5)',
        'padding': '10px',
        'z-index': '999999',
        'top': '10px',
        'right': '10px',
        'display': 'block',
        'display': 'none',
      });

      // Apply user-defined styles.
      elm.css(style);

      var closeButton = elm.find('.' + closeButtonClass)
      closeButton.css({
        'padding': '5px',
        'font-size': '19px',
        'font-weight': 'bold',
        'float': 'right',
        'margin-top': '-10px',
        'margin-right': '-10px',
        'cursor': 'pointer',
        'display': 'block',
        'right': '0',
        'top': '0',
        'background-color': 'none',
        'color': '#121212',
        'opacity': '0.2',
        'height': '25px',
        'width': '25px',
        'border-radius': '100%',
        'text-align': 'center',
        'padding-bottom': '33px',
        'line-height': '1.42857',
        'box-sizing': 'border-box',
      });
      closeButton.click(function(e) {
        e.preventDefault();
        var message = $(this).parent('.' + messageClass);
        message.slideUp('normal', function() {
          message.remove();
        });

        // Remove the `Remove all' button, if necessary.
        if ($('#' + removeAllButtonId).length > 0 &&
            $(innerContainer)
            .find('.' + messageClass).length < messagesThreshold + 2) {
          var removeAllButton = $('#' + removeAllButtonId);
          removeAllButton.slideUp('normal', function() {
            removeAllButton.remove();
          });
        }
      });

      elm.prependTo(innerContainer).slideDown('fast');

      // Add a `Remove all' button.
      if (!$('#' + removeAllButtonId).length > 0 &&
          $(innerContainer)
          .find('.' + messageClass).length > messagesThreshold) {
        var removeAllButton = $('<div id="' + removeAllButtonId +
                                '">Remove all<div>');
        removeAllButton.css({
          'display': 'none',
          'font-size': '12px',
          'text-align': 'center',
          'cursor': 'pointer',
          'background-color': '#57534A',
          'color': '#F1F1E1',
          'border-radius': '5px 5px 0 0',
          'margin-left': '10px',
          'margin-right': '10px',
        });
        removeAllButton.click(function(e) {
          var button = $(this);
          var messages = container.find('.' + messageClass);
          // Do not animate if there are too many messages (This would slow
          // everything down and would not look nice).
          if (messages.length < 20) {
            messages.each(function() {
              var message = $(this);
              message.slideUp('fast', function() {
                message.remove();
              });
            });
          } else {
            messages.remove();
          }
          button.slideUp('fast', function() {
            button.remove();
          });
        });
        removeAllButton.prependTo(container).slideDown('fast');
      }
    };

    this.inverse = function(message) {
      this.message(message, {
        'background-color': '#79756C',
        'color': 'rgba(255, 255, 255, 0.8)',
        'text-shadow': '-1px -1px rgba(0, 0, 0, 0.3)',
      });
    };

    this.error = function(message) {
      this.message(message, {
        'background-color': '#FFBDCC',
        'color': '#886766',
      });
    };

    this.warning = function(message) {
      this.message(message, {
        'background-color': '#FCFFD9',
        'color': '#868864',
      });
    };

    this.info = function(message) {
      this.message(message, {
        'background-color': '#A0C8DB',
        'color': '#556876',
      });
    };

    this.success = function(message) {
      this.message(message, {
        'background-color': '#C4F2C8',
        'color': '#628114',
      });
    };

  })();

  return Hermes;
})();
