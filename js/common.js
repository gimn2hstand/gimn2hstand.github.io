function scroll(section) {
    document.getElementById(section).scrollIntoView({behavior:'smooth'});
    location.href = '#' + section;
}