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
    await asyncFunc();
    console.log("async func called");
})();