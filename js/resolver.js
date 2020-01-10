var injections = document.querySelectorAll('.injection iframe');
for (var i = 0, len = injections.length; i < len; i++) {
    var iframe = injections[i];
    iframe.src = iframe.dataset.from;
}