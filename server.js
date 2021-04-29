(function() {
    const express = require("express");
    const app = express();

    app.use(express.static(__dirname + "/dist/crm-for-people"));

    app.listen(8080);
    console.log("port" + 8080);
})();
