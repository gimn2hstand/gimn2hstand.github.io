/**
 * Динамическое добавление глав в содержание и обработка иллюстраций
 * Для вставки картинки в документ следуйте его каноничному пути в каталоге img
 * October 5, 2019
 * Copyright, Mikhail K., 2019
 */

window.onload = function() {
    let tableOfContentsHTML = '<b>Содержание:</b><ul>';
    let tableOfContentsNavigationHTML = 'Содержание:';
    document.querySelectorAll('.content .chapter').forEach(function (chapter) {
        chapter.innerHTML = '<h4>' + chapter.dataset.chapter + '</h4>' + chapter.innerHTML;
        tableOfContentsHTML += '<li><a data-section="' + chapter.id + '">' + chapter.dataset.chapter + '</a></li>';
        tableOfContentsNavigationHTML += '<a class="mdl-navigation__link" data-section="' + chapter.id + '">' + chapter.dataset.chapter + '</a>';
        let num = 1;
        document.querySelectorAll('.content #' + chapter.id + " img").forEach(function (illustration) {
            illustration.src = '../img/topic/' + topicId + '/' + chapter.id + '/img' + num + '.jpg';
            illustration.alt = chapter.dataset.chapter + ' - ' + (num++);
            insertLabel(illustration);
        });
    });
    document.querySelectorAll('.content .video-wrapper').forEach(function (video) {
        insertLabel(video);
    });
    document.getElementById('table_of_contents').innerHTML = (tableOfContentsHTML += '</ul>');
    document.getElementById('navigation-table_of_contents').innerHTML = tableOfContentsNavigationHTML;
    goClickListener(document.querySelectorAll('#table_of_contents ul li a'));
    goClickListener(document.querySelectorAll('#navigation-table_of_contents a'));
};

function insertLabel(element) {
    let label = element.dataset.label;
    if(label) {
        element.insertAdjacentHTML('afterend', '<br><span class="img-label">' + label + '</span><br><br>');
    }
}

function goClickListener(links) {
    links.forEach(function (link) {
        function goFunction() {
            goTo(link.dataset.section);
        }
        link.addEventListener('click', goFunction);
    });
}

function goTo(section) {
    document.getElementById(section).scrollIntoView({behavior: 'smooth'});
    //location.href = '#' + section;
}