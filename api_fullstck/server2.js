import { connectDb } from "./data/database.js";
import { app} from "./server.js";

connectDb();
app.listen(4000,()=>{
    console.log("server is running in port 4000");
});