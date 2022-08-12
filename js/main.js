let rgbValues;
let light = document.querySelector("#light")
let deviceInfoTitle = document.querySelector('.device-info-title');
let deviceInfo = document.querySelector('.device-info');

async function getLightInfo() {
    const url = 'http://busyserv.mchaker.github.beta.tailscale.net:8080/light/0/status'
    let response = await fetch(url);
    let data = await response.json();
    
    rgbValues = data["rgb"];
    setLightColor(rgbValues);

    let id = data["light_id"]
    let name = data["name"]
    let path = data["info"]["path"]
    let vendorID = data["info"]["vendor_id"]
    let productID = data["info"]["product_id"]
    let serialNum = data["info"]["serial_number"]
    let releaseNum = data["info"]["release_number"]
    let manufacturer = data["info"]["manufacturer_string"]
    let product = data["info"]["product_string"]
    let usagePage = data["info"]["usage_page"]
    let usage = data["info"]["usage"]
    let interfaceNum = data["info"]["interface_number"]
    let isOn = data["is_on"]
    let color = data["color"]

    setDeviceInfo(id, name, path, vendorID, productID, serialNum, releaseNum, manufacturer, product, usagePage, usage, interfaceNum, isOn, color, rgbValues)
}

function setLightColor(rgbValues) {
    if (JSON.stringify(rgbValues) == JSON.stringify([0,0,0])) {
        rgbValues = [235, 235, 235] 
    } else {
        light.classList.remove('light-x')
    }
    document.querySelector('.light').style.backgroundColor = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`
    console.log("set light color to " + rgbValues)
}

function setDeviceInfo(id, name, path, vendorID, productID, serialNum, releaseNum, manufacturer, product, usagePage, usage, interfaceNum, isOn, color, rgbValues) {
    document.querySelector("#device-info-name").insertAdjacentHTML("beforeend", name)
    document.querySelector("#device-info-lightID").insertAdjacentHTML("beforeend", id)
    document.querySelector("#device-info-path").insertAdjacentHTML("beforeend", path)
    document.querySelector("#device-info-vendorID").insertAdjacentHTML("beforeend", vendorID)
    document.querySelector("#device-info-productID").insertAdjacentHTML("beforeend", productID)
    document.querySelector("#device-info-serialNum").insertAdjacentHTML("beforeend", serialNum)
    document.querySelector("#device-info-releaseNum").insertAdjacentHTML("beforeend", releaseNum)
    document.querySelector("#device-info-manufacturer").insertAdjacentHTML("beforeend", manufacturer)
    document.querySelector("#device-info-product").insertAdjacentHTML("beforeend", product)
    document.querySelector("#device-info-usagePage").insertAdjacentHTML("beforeend", usagePage)
    document.querySelector("#device-info-usage").insertAdjacentHTML("beforeend", usage)
    document.querySelector("#device-info-interfaceNum").insertAdjacentHTML("beforeend", interfaceNum)
    document.querySelector("#device-info-isOn").insertAdjacentHTML("beforeend", isOn)
    document.querySelector("#device-info-color").insertAdjacentHTML("beforeend", color)
    document.querySelector("#device-info-rgb").insertAdjacentHTML("beforeend", rgbValues)
}

function deviceInfoShowHide() {
    let currentStyle = window.getComputedStyle(deviceInfo, null).display;
    if (currentStyle == "none") {
        deviceInfo.style.display = "block";
    } else if (currentStyle == "block") {
        deviceInfo.style.display = "none";
    }
}