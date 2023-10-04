const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Connected to the database!");

        const P0RT = config.app.port;
        app.listen(P0RT, () => {
            console.log(`Server is running on port ${P0RT}`);
        });    
    } catch (error) {
        console.log("Cannot connect to the database!", error);
        process.exit();
    }
}
startServer();