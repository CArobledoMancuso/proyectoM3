import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";


AppDataSource.initialize()
.then(res => {
    console.log(`Database connection stablished...`);
    server.listen(PORT, ()=> {
        console.log(`server listening on port ${PORT}`);
    });
});
