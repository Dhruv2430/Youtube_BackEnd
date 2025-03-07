import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000,() => {
        console.log(`server is runing ${process.env.PORT}`);
    })
    app.on("error",(error)=>{
        console.error("error",error);
        
    })
})
.catch((err) => {
    console.error("not connect",err)
})