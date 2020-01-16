function initSpoilers() {
    var headers = document.querySelectorAll('.spoiler-header');
    for (var i = 0, len = headers.length; i < len; i++) {
        (function () {
            var header = headers[i];
            var spoiled = document.getElementById(header.parentElement.dataset.for);
            spoiled.style.display = 'none';
            header.innerHTML = '<i class="material-icons spoiler-arrow">arrow_right</i><span>' + header.dataset.name + '</span>';
            var indicator = header.getElementsByClassName('spoiler-arrow')[0];
            header.addEventListener('click', function () {
                if (header.classList.contains('spoiler-header-inactive')) {
                    spoiled.style.display = '';
                    header.classList.remove('spoiler-header-inactive');
                    header.classList.add('spoiler-header-active');
                    var iframes = spoiled.getElementsByClassName('iframe-injection');
                    for(var i = 0; i < iframes.length; i++) {
                        var iframe = iframes[i];
                        if(iframe.src !== iframe.dataset.from) {
                            iframe.src = iframe.dataset.from;
                        }
                    }
                    indicator.style.transform = 'rotate(90deg)';
                } else {
                    spoiled.style.display = 'none';
                    header.classList.remove('spoiler-header-active');
                    header.classList.add('spoiler-header-inactive');
                    indicator.style.transform = 'none';
                }
            });
        })();
    }
}