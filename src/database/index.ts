import mongoose from "mongoose";

export default (): Promise<typeof mongoose> =>
    mongoose.connect(process.env.MONGO_URL);
