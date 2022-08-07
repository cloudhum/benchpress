let deviceInfoTitle = document.querySelector('.device-info-title');
let deviceInfo = document.querySelector('.device-info');

deviceInfoTitle.addEventListener('click', function(){
    let currentStyle = window.getComputedStyle(deviceInfo, null).display;
    if (currentStyle == "none") {
        deviceInfo.style.display = "block";
    } else if (currentStyle == "block") {
        deviceInfo.style.display = "none";
    }
})

// TODO: make 'Device Info' a link and call hide/show function by name

// TODO: add span to titles of Device Info data 