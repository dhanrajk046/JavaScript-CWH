function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => {
            reject("Failed to load script");
};

document.body.appendChild(script);
    });
}

async function main() {
    try {
        let script = await loadScript("https://code.jquery.com/jquery-3.7.1.min.js");
        alert("Script loaded successfully!");
        console.log(result);
    } catch (error) {
        alert(error);
    }
}

main();