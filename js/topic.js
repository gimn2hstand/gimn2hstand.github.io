/**
 * October 5, 2019
 * Copyright, Mikhail K., 2019
 */

window.onload = function() {
    console.log('test');
    let links = document.querySelectorAll('.table_of_contents ul li a');
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