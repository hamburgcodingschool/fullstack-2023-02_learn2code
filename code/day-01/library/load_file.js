function loadJS(FILE_URL, async = true) {
    let scriptEle = document.createElement("script");
    scriptEle.setAttribute("src", FILE_URL);
    scriptEle.setAttribute("type", "text/javascript");
    scriptEle.setAttribute("async", async);
    document.body.appendChild(scriptEle);

    fetch(FILE_URL)
        .then(response => response.text())
        .then((data) => {
            document.getElementById('code').innerHTML = data;
        });

    document.getElementsByTagName("main").item(0).innerHTML = "";
    // success event 
    scriptEle.addEventListener("load", () => {
        console.log("File loaded");
        new p5();
    });
    // error event
    scriptEle.addEventListener("error", (ev) => {
        console.log("Error on loading file", ev);
    });
}