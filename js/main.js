function openingHours() {
	var d = new Date();
    var n = d.getDay();
    var now = d.getHours() + "." + d.getMinutes();
    var weekdays = [
        ["Sonntag", 11.30, 14.00, 17.00, 21.30],
        ["Montag"],
        ["Dienstag", 11.30, 14.00, 17.00, 22.00],
        ["Mittwoch", 11.30, 14.00, 17.00, 22.00],
        ["Donnerstag", 11.30, 14.00, 17.00, 22.00],
        ["Freitag", 11.30, 14.00, 17.00, 22.00],
        ["Samstag", 11.30, 14.00, 17.00, 22.00]
    ];
    var day = weekdays[n];

	function next(today) {
		var i = (today + 1) % 7;
		while(i) {
			if (weekdays[i].length > 1) {
				return weekdays[i];
			}
			i++;
		}
	}
	
	if (now >= day[1] && now < day[2]) {
        return "Geöffnet bis " + day[2].toFixed(2) + " Uhr";
    } else if (now >= day[3] && now < day[4]) {
        return "Geöffnet bis " + day[4].toFixed(2) + " Uhr";
    } else {
		if (now < day[1]) {
			return "Geschlossen. Öffnet " + day[1].toFixed(2) + " Uhr";	
		} else if (now < day[3]) {
			return "Geschlossen. Öffnet " + day[3].toFixed(2) + " Uhr";	
		} else {
			var nd = next(n);
			return "Geschlossen. Öffnet " + nd[0] + " " + nd[1].toFixed(2) + " Uhr";
		}
	}
}

function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
		var $times = $('.open-times');
		$times.append(openingHours());

    });
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });

}());


}
main();
