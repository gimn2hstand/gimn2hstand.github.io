/**
 * October 5, 2019
 * Copyright, Mikhail K., 2019
 */

window.onload = function() {
    let chapters = document.querySelectorAll('.content .chapter');
    let tableOfContents = document.getElementById('table_of_contents');
    let tableOfContentsHTML = '<b>Содержание:</b><ul>';
    chapters.forEach(function (chapter) {
        chapter.innerHTML = '<h4>' + chapter.dataset.chapter + '</h4>' + chapter.innerHTML;
        tableOfContentsHTML += '<li><a data-section="' + chapter.id + '">' + chapter.dataset.chapter + '</a></li>';
        let illustrations = document.querySelectorAll('.content #' + chapter.id + " img");
        let num = 1;
        illustrations.forEach(function (illustration) {
            illustration.src = '../img/topic/' + topicId + '/' + chapter.id + '/img' + num + '.jpg';
            illustration.alt = chapter.dataset.chapter + ' - ' + (num++);
        })
    });
    tableOfContents.innerHTML = (tableOfContentsHTML += '</ul>');

    let links = document.querySelectorAll('#table_of_contents ul li a');
    links.forEach(function (link) {
        function goFunction() {
            goTo(link.dataset.section);
        }
        link.addEventListener('click', goFunction);
    });
};

function goTo(section) {
    document.getElementById(section).scrollIntoView({behavior: 'smooth'});
    //location.href = '#' + section;
}