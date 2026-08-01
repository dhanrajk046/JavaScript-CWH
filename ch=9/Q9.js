function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        
        script.onerror = () => {
            reject(new Error(`Failed to load script: ${src}`));
        };

    document.head.append(script);
    });
}


// Using the Promise
loadScript("https://code.jquery.com/jquery-3.7.1.min.js")
.then((script) => {
    alert("Script is loaded");
    alert(script.src);
})
.catch((error) => {
    alert(error.message);
});

// Using async/await
async function main() {
    try {
        let script = await loadScript("https://code.jquery.com/jquery-3.7.1.min.js");
        alert("Script is loaded");
        alert(script.src);
    } catch (error) {
        alert(error.message);
    }
}
main();