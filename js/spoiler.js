function initSpoilers() {
    document.querySelectorAll('.spoiler-header').forEach(function (header) {
        var spoiled = document.getElementById(header.parentElement.dataset.for);
        spoiled.style.display = 'none';
        header.addEventListener('click', function () {
            if (header.classList.contains('spoiler-header-inactive')) {
                spoiled.style.display = null;
                header.classList.remove('spoiler-header-inactive');
                header.classList.add('spoiler-header-active');
                var iframes = spoiled.getElementsByClassName('iframe-injection');
                for(var i = 0; i < iframes.length; i++) {
                    var iframe = iframes[i];
                    if(iframe.src !== iframe.dataset.from) {
                        iframe.src = iframe.dataset.from;
                    }
                }
            } else {
                spoiled.style.display = 'none';
                header.classList.remove('spoiler-header-active');
                header.classList.add('spoiler-header-inactive');
            }
        })
    });
}