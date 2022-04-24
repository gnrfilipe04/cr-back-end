import mongoose from "mongoose";

export default (): Promise<typeof mongoose> =>
    mongoose.connect(
        "mongodb+srv://zabuza:BCIREuHe4iTw0Ay0@testerockeseat.srufa.mongodb.net/registration?retryWrites=true&w=majority"
    );
