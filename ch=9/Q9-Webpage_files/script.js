// Custom Promises
let p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000);
});

let p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 2000);
});

let p3 = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Promise 3 rejected");
    }, 1500);
});

// 1. Promise.all()
Promise.all([p1, p2])
    .then((result) => {
        console.log("Promise.all:", result);
    })
    .catch((error) => {
        console.log("Promise.all Error:", error);
    });

// 2. Promise.allSettled()
Promise.allSettled([p1, p2, p3])
    .then((result) => {
        console.log("Promise.allSettled:", result);
    });

// 3. Promise.race()
Promise.race([p1, p2, p3])
    .then((result) => {
        console.log("Promise.race:", result);
    })
    .catch((error) => {
        console.log("Promise.race Error:", error);
    });

// 4. Promise.any()
Promise.any([p3, p1, p2])
    .then((result) => {
        console.log("Promise.any:", result);
    })
    .catch((error) => {
        console.log("Promise.any Error:", error);
    });

// 5. Promise.resolve()
Promise.resolve("Resolved immediately")
    .then((result) => {
        console.log("Promise.resolve:", result);
    });

// 6. Promise.reject()
Promise.reject("Immediate rejection")
    .catch((error) => {
        console.log("Promise.reject:", error);
    });