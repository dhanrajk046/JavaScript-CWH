// B.closest()

// The closest() method seaches up the DOM tree from the current element and returns the nearest ancestor (or the element itself) that matches the specified CSS selector.

let element = document.querySelector(".child");
let parent = element.closest(".parent");

// Here,closest(".parent") finds the nearest ancestor with the class parent.
// Answer: B.closest()