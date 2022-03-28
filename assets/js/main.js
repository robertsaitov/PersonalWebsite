(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			offsetY: -15,
			hoverDelay: 0,
			alignment: 'center'
		});

		$('.arrow').click(function(){
			$("html, body").animate({ scrollTop: $(window).height()}, 600);
			return false;
		 });


	// Nav.
			// MAIN NAV
			$(
				'<div id ="navPanel" class = "navigation">' +
					'<input type="checkbox" class="navigation__checkbox" id="navi-toggle">' +
					'<label for="navi-toggle" class="navigation__button">' +
							'<span class="navigation__icon">&nbsp;</span>' +
					'</label>' +
					'<div class="navigation__background">&nbsp;</div>'+
					'<nav class="navigation__nav">'+
						 '<ul class="navigation__list">' +
							'<li class="navigation__item"><a class="navigation__link" href="/">HOME</a></li>' +
							'<li class="navigation__item"><a class="navigation__link" href="/resume">RESUME</a></li>' +
							'<li class="navigation__item"><a class="navigation__link" href="/contact">CONTACT</a></li>' +

				  				'<label for="dropdown_trigger1"  class="navigation__subtitle">Software Engineering Projects<span>+</span></label>'+
								'<input type="checkbox" id = "dropdown_trigger1" class="navigation__dropbtn1"> '+
								'<ul class="navigation__submenu1">' +
									'<li class="navigation__subitem"><a class="navigation__sublink" href="/software_projects">Portfolio Website</a></li>' +
								'</ul>' +

								'<label for="dropdown_trigger2"  class="navigation__subtitle">Discrete Event Simulation Projects<span>+</span></label>'+
								'<input type="checkbox" id = "dropdown_trigger2" class="navigation__dropbtn2"> '+
								'<ul class="navigation__submenu2">' +
									'<li class="navigation__subitem"><a class="navigation__sublink" href="/DES_projects#project">Manufacturing Assembly Line</a></li>' +
									'<li class="navigation__subitem"><a class="navigation__sublink" href="/DES_projects#project2"></a>Emergency Exits</li>' +
									'<li class="navigation__subitem"><a class="navigation__sublink" href="/DES_projects#project3">Plant Logistics</a></li>' +
								'</ul>' +
						'</ul>' +
					'</nav>'+
				'</div>'
			)
				.appendTo($body);
})(jQuery);