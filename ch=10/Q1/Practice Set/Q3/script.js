function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;

        script.onload = () => {
            resolve(src);
        };

        script.onerror = () => {
            reject("Failed to load script");
        };

        document.body.appendChild(script);
    });
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js")
    .then((value) => {
        alert("Script loaded successfully!");
        console.log(value);
    })
    .catch((error) => {
        alert(error);
    });