import mongoose, { Schema } from "mongoose";

const AccountSchema = new Schema(
    {
        name: String,
        email: String,
        password: String,
    },
    { collection: "accounts" }
);

const Account = mongoose.model("Account", AccountSchema);

export default Account;
