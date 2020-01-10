/**
 * October 5, 2019
 * Copyright, Mikhail K., 2019
 */

var topicLoaded = function() {
    var content = document.getElementById('topic_content');
    content.innerHTML = '<h3 id="topic_title">' + topicName + '</h3>' + content.innerHTML;
    var tableOfContentsHTML = '<b>Содержание:</b><ul>';
    var tableOfContentsNavigationHTML = '<a class="mdl-navigation__link mdl-layout__drawer-navigation-subcategory">Содержание:</a><a class="mdl-navigation__link" onclick="goTop()"><i class="material-icons">arrow_upward</i>Начало страницы</a>';
    var chapters = document.querySelectorAll('.content .chapter');
    for (var i = 0, len = chapters.length; i < len; i++) {
        var chapter = chapters[i];
        chapter.innerHTML = '<h4>' + chapter.dataset.chapter + '</h4>' + chapter.innerHTML;
        tableOfContentsHTML += '<li><a data-section="' + chapter.id + '">' + chapter.dataset.chapter + '</a></li>';
        tableOfContentsNavigationHTML += '<a class="mdl-navigation__link" data-section="' + chapter.id + '"><i class="material-icons">subdirectory_arrow_right</i>' + chapter.dataset.chapter + '</a>';
        var num = 1;
        var illustrations = document.querySelectorAll('.content #' + chapter.id + " img");
        for (var ii = 0, ilen = illustrations.length; ii < ilen; ii++) {
            var illustration = illustrations[ii];
            illustration.src = '../img/topic/' + topicCategory + '/' + topicId + '/' + chapter.id + '/img' + num + '.jpg';
            illustration.alt = chapter.dataset.chapter + ' - ' + (num++);
            var label = insertLabel(illustration);
            if(label) {
                illustration.alt = label;
            }
        }
    }
    var pieces = document.querySelectorAll('.content .injection, .piece');
    for (i = 0, len = pieces.length; i < len; i++) {
        insertLabel(pieces[i]);
    }
    document.getElementById('table_of_contents').innerHTML = (tableOfContentsHTML += '</ul>');
    document.getElementById('navigation-table_of_contents').innerHTML = tableOfContentsNavigationHTML;
    goClickListener(document.querySelectorAll('#table_of_contents ul li a'));
    goClickListener(document.querySelectorAll('#navigation-table_of_contents a:not(.mdl-layout__drawer-navigation-subcategory)'), function () {
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
    for (var i = 0, len = links.length; i < len; i++) {
        (function() {
            var link = links[i];
            link.addEventListener('click', function () {
                if (typeof independentFunction === 'function') {
                    independentFunction();
                }
                goTo(link.dataset.section);
            });
        })();
    }
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