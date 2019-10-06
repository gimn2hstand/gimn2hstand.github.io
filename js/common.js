window.onload = function () {
    document.getElementById('drawer-icon').addEventListener('click', function () {
        hideNavigation();
    });
    if (typeof topicLoaded === 'function') {
        topicLoaded();
    }
};

function hideNavigation() {
    document.querySelector('.mdl-layout').MaterialLayout.toggleDrawer();
}