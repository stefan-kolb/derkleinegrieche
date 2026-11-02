(function () {
	var box = document.querySelector('.maps-consent');
	if (!box) { return; }
	var button = box.querySelector('.maps-consent-accept');
	button.addEventListener('click', function () {
		var iframe = document.createElement('iframe');
		iframe.setAttribute('width', '600');
		iframe.setAttribute('height', '450');
		iframe.setAttribute('title', 'Google Maps: Der kleine Grieche, Bamberg');
		iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
		iframe.setAttribute('allowfullscreen', '');
		iframe.src = box.getAttribute('data-src');
		box.parentNode.replaceChild(iframe, box);
	});
})();
