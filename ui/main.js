$( document ).ready(function() {

  var App = {

    Utils: {

      init: function() {
        this.modals();
      },

      modals: function() {
        var modal = function($modal) {
        var $container = $modal.find('[data-container]');
        var $close = $modal.find('[data-close]');
        var open = false;

        var methods = {
          open: function() {
            open = true;
            $modal.addClass('visible');
            this.resize();
          },
          close: function() {
            open = false;
            $modal.removeClass('visible');
          },
          resize: function() {
            if (!open) return;

            var max = $modal.outerHeight();
            var height = $container.outerHeight();

            if (height < max) {
              $container.css({
                top: ( (max/2) - (height/2) )
              });
            } else {
              $container.css({ top: 0 });
            }
          }
        };

        $(window).on('load', methods.close);
        $(window).on('resize', methods.resize);
        $('#getModal').on('click', methods.open);

        $close.on('click', function(e) {
          e.preventDefault();
          methods.close();
        });

        return methods;
      };

        modal($('[data-modal]')).close();
      },

    }
  }

  App.Utils.init();
});
