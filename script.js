document.querySelector('.social').addEventListener('click', function(e) {
	[].map.call(document.querySelectorAll('.social-popup, .social'), function(el) {
	  el.classList.toggle('active');
	});
});