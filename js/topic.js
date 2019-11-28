/**
 * October 5, 2019
 * Copyright, Mikhail K., 2019
 */

var topicLoaded = function() {
    var content = document.getElementById('topic_content');
    content.innerHTML = '<h3 id="topic_title">' + topicName + '</h3>' + content.innerHTML;
    var tableOfContentsHTML = '<b>Содержание:</b><ul>';
    var tableOfContentsNavigationHTML = '<a class="mdl-navigation__link mdl-layout__drawer-navigation-subcategory">Содержание:</a><a class="mdl-navigation__link" onclick="goTop()"><i class="material-icons">arrow_upward</i>Начало страницы</a>';
    document.querySelectorAll('.content .chapter').forEach(function (chapter) {
        chapter.innerHTML = '<h4>' + chapter.dataset.chapter + '</h4>' + chapter.innerHTML;
        tableOfContentsHTML += '<li><a data-section="' + chapter.id + '">' + chapter.dataset.chapter + '</a></li>';
        tableOfContentsNavigationHTML += '<a class="mdl-navigation__link" data-section="' + chapter.id + '"><i class="material-icons">subdirectory_arrow_right</i>' + chapter.dataset.chapter + '</a>';
        var num = 1;
        document.querySelectorAll('.content #' + chapter.id + " img").forEach(function (illustration) {
            illustration.src = '../img/topic/' + topicCategory + '/' + topicId + '/' + chapter.id + '/img' + num + '.jpg';
            illustration.alt = chapter.dataset.chapter + ' - ' + (num++);
            var label = insertLabel(illustration);
            if(label) {
                illustration.alt = label;
            }
        });
    });
    document.querySelectorAll('.content .video-wrapper, .piece').forEach(function (video) {
        insertLabel(video);
    });
    document.getElementById('table_of_contents').innerHTML = (tableOfContentsHTML += '</ul>');
    document.getElementById('navigation-table_of_contents:not(.mdl-layout__drawer-navigation-subcategory)').innerHTML = tableOfContentsNavigationHTML;
    goClickListener(document.querySelectorAll('#table_of_contents ul li a'));
    goClickListener(document.querySelectorAll('#navigation-table_of_contents a'), function () {
        toggleNavigation();
    });
};

function insertLabel(element) {
    var label = element.dataset.label;
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
    goToElement(document.getElementById('topic_content').parentElement);
}

function goTo(section) {
    goToElement(document.getElementById(section));
}

function goToElement(element) {
    element.scrollIntoView({behavior: 'smooth'});
}