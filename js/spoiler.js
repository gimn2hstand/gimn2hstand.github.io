function initSpoilers() {
    document.querySelectorAll('.spoiler-header').forEach(function (header) {
        var spoiled = document.getElementById(header.parentElement.dataset.for);
        spoiled.style.display = 'none';
        header.innerHTML = '<i class="material-icons">arrow_right</i><span>' + header.dataset.name + '</span>';
        header.parentElement.style.maxHeight = header.clientHeight + 'px';
        header.addEventListener('click', function () {
            if (header.classList.contains('spoiler-header-inactive')) {
                spoiled.style.display = null;
                header.classList.remove('spoiler-header-inactive');
                header.classList.add('spoiler-header-active');
                header.innerHTML = '<i class="material-icons">arrow_drop_down</i><span>' + header.dataset.name + '</span>';
                var iframes = spoiled.getElementsByClassName('iframe-injection');
                for(var i = 0; i < iframes.length; i++) {
                    var iframe = iframes[i];
                    if(iframe.src !== iframe.dataset.from) {
                        iframe.src = iframe.dataset.from;
                    }
                }
                header.parentElement.style.maxHeight = (header.clientHeight + spoiled.clientHeight + 15) + 'px';
            } else {
                header.parentElement.style.maxHeight = header.clientHeight + 'px';
                spoiled.style.display = 'none';
                header.classList.remove('spoiler-header-active');
                header.classList.add('spoiler-header-inactive');
                header.innerHTML = '<i class="material-icons">arrow_right</i><span>' + header.dataset.name + '</span>';
            }
        })
    });
}