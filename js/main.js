$(document).ready(function() {

	String.prototype.filename=function(extension){
	    var s= this.replace(/\\/g, '/');
	    s= s.substring(s.lastIndexOf('/')+ 1);
	    return extension? s.replace(/[?#].+$/, ''): s.split('.')[0];
	}

	function resetHeights() {
		$('.height-fix').each(function() {
			var $columns = $(this).find('[class*="col-"]');
			if ($columns.length > 1) {
				var maxColHeight = 0;

				$columns.each(function() {
					var colHeight = parseInt($(this).innerHeight());
					if (colHeight > maxColHeight) {
						maxColHeight = colHeight;
					}
				});

				$columns.each(function() {
					var colHeight = parseInt($(this).innerHeight());
					if (colHeight !== maxColHeight) {
						// 10 is the current css margin value
						$(this).css('height', (maxColHeight - 10) + 'px');
					}
				});

				// console.log(maxColHeight);
			}
		});
	}

	function checkForm() {
		var valid = true;
		$('input, textarea').each(function() {
			$e = $(this);

			if (!$e.val()) {
				valid = false;
				$e.val('Error');
				$e.css('color', 'red');
			}
		});

		if (valid) {
			$('form').submit();
		} else {
			alert('The form has errors. Please correct the errors before retrying.');
		}
	}

	function loadBanner() {
		var url = $(location).attr('pathname');

		if (url.indexOf('amphibians') >= 0) {

			$('#top').css("background-image", "url('../../img/site/amphibians-banner.png')");
		} else if (url.indexOf('mammals') >= 0) {
			$('#top').css("background-image", "url('../../img/site/mammals-banner.png')");
		} else if (url.indexOf('reptiles') >= 0) {
			$('#top').css("background-image", "url('../../img/site/reptiles-banner.png')");
		} else if (url.indexOf('accessories') >= 0) {
			$('#top').css("background-image", "url('../../img/site/site-banner.jpg')");

		} else if (url.indexOf('about') >= 0 || url.indexOf('contact') >= 0) {
			$('#top').css("background-image", "url('../img/site/site-banner.jpg')");

		} else {
			if (url.indexOf('prickly-pets/index.html') >= 0) {
				$('#top').css("background-image", "url('img/site/site-banner.jpg')");
			} else {
				$('#top').css("background-image", "url('" + url + "img/site/site-banner.jpg')");
			}

		}
	}

	resetHeights();
	loadBanner();

	$(window).resize(function() {
		resetHeights();
	});

	$('button[type="submit"]').click(function(evt) {
		evt.preventDefault();
		checkForm();
	});

	$('input, textarea').focus(function(evt) {
		$(this).val('');
		$(this).css('color', 'black');
	});



});