/**
 * Динамическое добавление глав в содержание и обработка иллюстраций
 * Для вставки картинки в документ следуйте его каноничному пути в каталоге img
 * October 5, 2019
 * Copyright, Mikhail K., 2019
 */

var topicLoaded = function() {
    let content = document.getElementById('topic_content');
    content.innerHTML = '<h3>' + topicName + '</h3>' + content.innerHTML;
    let tableOfContentsHTML = '<b>Содержание:</b><ul>';
    let tableOfContentsNavigationHTML = '<a class="mdl-navigation__link mdl-layout__drawer-navigation-subcategory">Содержание:</a><a class="mdl-navigation__link" onclick="goTop()">Начало страницы</a>';
    document.querySelectorAll('.content .chapter').forEach(function (chapter) {
        chapter.innerHTML = '<h4>' + chapter.dataset.chapter + '</h4>' + chapter.innerHTML;
        tableOfContentsHTML += '<li><a data-section="' + chapter.id + '">' + chapter.dataset.chapter + '</a></li>';
        tableOfContentsNavigationHTML += '<a class="mdl-navigation__link" data-section="' + chapter.id + '">' + chapter.dataset.chapter + '</a>';
        let num = 1;
        document.querySelectorAll('.content #' + chapter.id + " img").forEach(function (illustration) {
            illustration.src = '../img/topic/' + topicCategory + '/' + topicId + '/' + chapter.id + '/img' + num + '.jpg';
            illustration.alt = chapter.dataset.chapter + ' - ' + (num++);
            let label = insertLabel(illustration);
            if(label) {
                illustration.alt = label;
            }
        });
    });
    document.querySelectorAll('.content .video-wrapper').forEach(function (video) {
        insertLabel(video);
    });
    document.getElementById('table_of_contents').innerHTML = (tableOfContentsHTML += '</ul>');
    document.getElementById('navigation-table_of_contents').innerHTML = tableOfContentsNavigationHTML;
    goClickListener(document.querySelectorAll('#table_of_contents ul li a'));
    goClickListener(document.querySelectorAll('#navigation-table_of_contents a'), function () {
        toggleNavigation();
    });
};

function insertLabel(element) {
    let label = element.dataset.label;
    if(label) {
        element.insertAdjacentHTML('afterend', '<br><span class="img-label">' + label + '</span><br><br>');
        return label;
    }
    return null;
}

function goClickListener(links, independentFunction) {
    links.forEach(function (link) {
        if (typeof independentFunction === 'function') {
            link.addEventListener('click', function () {
                independentFunction();
                goTo(link.dataset.section);
            });
        } else {
            link.addEventListener('click', function () {
                goTo(link.dataset.section);
            });
        }
    });
}

function goTop() {
    goTo('topic_content');
}

function goTo(section) {
    document.getElementById(section).scrollIntoView({behavior: 'smooth'});
    //location.href = '#' + section;
}