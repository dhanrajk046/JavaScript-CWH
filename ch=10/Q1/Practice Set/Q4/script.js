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

async function main() {
    try {
        let result = await loadScript(
            "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
        );

        alert("Script loaded successfully!");
        console.log(result);
    } catch (error) {
        alert(error);
    }
}

main();