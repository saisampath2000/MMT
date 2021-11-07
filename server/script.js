// const localtunnel = require("localtunnel");
import localtunnel from "localtunnel";

(async() => {
    const tunnel = await localtunnel({ port: 5000 });

    // the assigned public url for your tunnel
    // i.e. https://abcdefgjhij.localtunnel.me
    tunnel.url;
    console.log(tunnel.url);
    tunnel.on("close", () => {
        // tunnels are closed
    });
})();