import mongoose from "mongoose";

const Db = (listen: Function) => {
    const DATABASE_URI = "mongodb+srv://yodsavee14:mdZjYmrHpaKLlXzB@notesproject.qekrldf.mongodb.net/mern-stack-notesproject?retryWrites=true&w=majority";
    mongoose
        .connect(DATABASE_URI)
        .then(() => {
            console.log(`Successfully to cennect database...`);

            listen();
        })
};

export default Db;