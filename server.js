const moment = require("moment/moment");

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function getDate() {
    return new Date();
}

async function main() {
    while (true) {
        try {
            console.log(moment(getDate()).format("dddd, MMMM Do YYYY, h:mm:ss a"));
        } catch (e) {
            console.log(e);
        } finally {
            await sleep(1000);
        }
    }
}

main();