function changeTitleOnce() {
    setTimeout(() => {
        document.title = 'v/xt';
        document.querySelector("link[rel*='icon']").href = "https://i.imgur.com/GUwjZe4.png";
    }, 1000);
}

function showLoadingScreen() {
    function hideSenpaLoader() {
        const senpaLoader = document.querySelector('#loader');
        if (senpaLoader) {
            senpaLoader.style.display = 'none';
            senpaLoader.style.visibility = 'hidden';
        }
    }
    hideSenpaLoader();


    const customLoader = document.createElement('div');
    customLoader.id = 'custom-loader';
    customLoader.style.position = 'fixed';
    customLoader.style.top = '0';
    customLoader.style.left = '0';
    customLoader.style.width = '100%';
    customLoader.style.height = '100%';
    customLoader.style.backgroundColor = 'rgba(0, 0, 0)';
    customLoader.style.display = 'flex';
    customLoader.style.flexDirection = 'column';
    customLoader.style.alignItems = 'center';
    customLoader.style.justifyContent = 'center';
    customLoader.style.zIndex = '10000';
    customLoader.style.opacity = '1';
    customLoader.style.transition = 'opacity 0.5s';

    customLoader.innerHTML = `
        <div id="loading-content" style="text-align: center;">
            <img src="https://i.gifer.com/MPiJ.gif" alt="Loading..." style="max-width: 200px; max-height: 200px;" />
        </div>
    `;


    document.body.appendChild(customLoader);


    setTimeout(hideSenpaLoader, 0);


    setTimeout(() => {
        customLoader.style.opacity = '0';


        setTimeout(() => {
            customLoader.remove();
        }, 500);
    }, 2000);
}



showLoadingScreen();

changeTitleOnce();