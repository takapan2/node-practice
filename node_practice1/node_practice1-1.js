const asyncFunc = () => {
    return new Promise((r) => {
        setTimeout(() => {
            console.log("Running!");
            r();
        }, 1000);
    });
};

(async() => {
    console.log("Calling async func!");
    asyncFunc();
    console.log("async func called");
})();