(function () {
    function moveElementsToLeftPanel() {
        const leftPanel = document.querySelector('#menu .main-menu .panel.left');
        const profileSection = document.querySelector('#menu .main-menu .panel.left .profile-controls');
        const primaryInputs = document.querySelector('#menu .main-menu .panel.center #primary-inputs');
        const playButton = document.querySelector('#menu .main-menu .panel.center #play');
        const spectateButton = document.querySelector('#menu .main-menu .panel.center #spectate');

        if (leftPanel && profileSection && primaryInputs && playButton && spectateButton) {
            profileSection.insertAdjacentElement('afterend', primaryInputs);
            primaryInputs.insertAdjacentElement('afterend', playButton);
            playButton.insertAdjacentElement('afterend', spectateButton);
        }
    }
    const observer = new MutationObserver(() => {
        moveElementsToLeftPanel();

        const id = document.querySelector(`#account-box .account-profile .account-id`);
        if (id) {
            id.remove();
        }

        const serverInfo = document.querySelector(`#menu .main-menu .panel.right .list-container .list-row.header`);
        if (serverInfo) {
            serverInfo.remove();
        }

        const centerPanel = document.querySelector('#menu .main-menu .panel.center');
        if (centerPanel) {
            centerPanel.remove();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const infoText = document.querySelector('#menu .main-menu .panel.left .info-text');
    if (infoText) {
        infoText.remove();
    }
})();