// Function that returns a Promise resolved after n seconds
function wait(n) {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(`Resolve after ${n} second(s)`);
        }, n*1000);
    })
}

//IIFE to execute the function with different values of n
(async function () {
    console.log("Waiting...");
    console.log(await wait(2)); // Resolves after 2 seconds
    console.log(await wait(4)); // Resolves after 4 seconds 
    console.log(await wait(1)); // Resolves after 1 second
})();

// Explanation
// wait(n) returns a Promise that resolves after n seconds using setTimeout().
// The IIFE ((async functon() {...})();) allows the use of await immediately.
// Each await wait(n) pauses execution untill the Promise resolves, so the messages appears one after another.