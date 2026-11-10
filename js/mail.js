(function () {
  var links = document.querySelectorAll('a.obf-mail');
  for (var i = 0; i < links.length; i++) {
    var a = links[i];
    var addr = a.getAttribute('data-u') + '@' + a.getAttribute('data-d');
    a.setAttribute('href', 'mailto:' + addr);
    a.textContent = addr;
  }
})();
