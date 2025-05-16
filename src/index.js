import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !! ", err);
  });
/* FIRST APPROACH
(async () => 
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error",(error)=>{
        console.log("ERROR",error);
        throw error
    })

    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})();
*/
