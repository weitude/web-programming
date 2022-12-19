import mongoose from 'mongoose';
import dotenv from 'dotenv-defaults';

export default {
    connect: () => {
        dotenv.config();
        mongoose.set('strictQuery', false);

        if (!process.env.MONGO_URL) {
            console.error("Missing MONGO_URL!!!");
            process.exit(1);
        }
        mongoose
            .connect(process.env.MONGO_URL, {
                dbName: "DB",
            })
            .then(() => console.log("Mongo db connection created!"));
        mongoose.connection.on('error',
            console.error.bind(console, 'connection error:'));
    }
};