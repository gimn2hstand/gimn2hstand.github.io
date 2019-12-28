document.querySelectorAll('.injection iframe').forEach(function (iframe) {
    iframe.src = iframe.dataset.from;
});