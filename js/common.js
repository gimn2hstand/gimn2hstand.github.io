window.onload = function () {
    document.getElementById('drawer-icon').addEventListener('click', function () {
        toggleNavigation();
    });
    if (typeof topicLoaded === 'function') {
        topicLoaded();
    }
    if (typeof initSpoilers === 'function') {
        initSpoilers();
    }
};

function toggleNavigation() {
    document.querySelector('.mdl-layout').MaterialLayout.toggleDrawer();
}