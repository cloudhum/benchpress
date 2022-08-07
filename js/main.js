let deviceInfoTitle = document.querySelector('.device-info-title');
let deviceInfo = document.querySelector('.device-info');

function deviceInfoShowHide() {
    let currentStyle = window.getComputedStyle(deviceInfo, null).display;
    if (currentStyle == "none") {
        deviceInfo.style.display = "block";
    } else if (currentStyle == "block") {
        deviceInfo.style.display = "none";
    }
}

// TODO: add span to titles of Device Info data 