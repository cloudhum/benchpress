let rgbValues;
let light = document.querySelector("#light")

async function getLightStatus() {
    const url = 'http://busyserv.mchaker.github.beta.tailscale.net:8080/light/0/status'
    let response = await fetch(url);

    let data = await response.json();
    rgbValues = data["rgb"];
    setLightColor(rgbValues);
}

function setLightColor(rgbValues) {
    if (JSON.stringify(rgbValues)==JSON.stringify([0,0,0])) {
        rgbValues = [235, 235, 235] 
    } else {
        light.classList.remove('light-x')
    }
    document.querySelector('.light').style.backgroundColor = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`
    console.log("set light color to " + rgbValues)
}
