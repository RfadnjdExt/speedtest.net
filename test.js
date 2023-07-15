const speedTest = require("./index");
(async () => {
    const speed = await speedTest({ acceptLicense: true });
    console.log(speed);
})();
