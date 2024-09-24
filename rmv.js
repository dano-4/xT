(function () {
    function removeAdsAndSocialSidebar() {
        var bottomAdDiv = document.getElementById("bottomAd");
        if (bottomAdDiv) {
            bottomAdDiv.parentNode.removeChild(bottomAdDiv);
        }

        var adsBlockDivs = document.querySelectorAll(".ads-block-1");
        adsBlockDivs.forEach(function (adsBlockDiv) {
            adsBlockDiv.parentNode.removeChild(adsBlockDiv);
        });

        var bannerDivs = document.querySelectorAll(".banner");
        bannerDivs.forEach(function (bannerDiv) {
            bannerDiv.parentNode.removeChild(bannerDiv);
        });

        var advertisementInformerEndgameDivs = document.querySelectorAll(".advertisement-informer-endgame");
        advertisementInformerEndgameDivs.forEach(function (advertisementInformerEndgameDiv) {
            advertisementInformerEndgameDiv.parentNode.removeChild(advertisementInformerEndgameDiv);
        });

        var senpaIoDiv = document.getElementById("senpa-io_300x250_3");
        if (senpaIoDiv) {
            senpaIoDiv.parentNode.removeChild(senpaIoDiv);
        }

        var socialSidebarUl = document.getElementById("socialsidebar");
        if (socialSidebarUl) {
            socialSidebarUl.parentNode.removeChild(socialSidebarUl);
        }

        var endGameDiv = document.getElementById("endGame");
        if (endGameDiv) {
            endGameDiv.remove();
        }

        var roomStatsHudDiv = document.getElementById("room-stats-hud");
        if (roomStatsHudDiv) {
            roomStatsHudDiv.remove();
        }

        var gameAdsBannerContainer = document.getElementById("gameadsbanner-container");
        if (gameAdsBannerContainer) {
            gameAdsBannerContainer.remove();
        }

        var roomStatsDisplay = document.querySelector(".room-stats-display");
        if (roomStatsDisplay) {
            roomStatsDisplay.remove();
        }

        var teamPlayersList = document.querySelector(".team-players-list");
        if (teamPlayersList) {
            teamPlayersList.remove();
        }

    }

    window.addEventListener('load', removeAdsAndSocialSidebar);

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.addedNodes.length) {
                removeAdsAndSocialSidebar();
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

})();
