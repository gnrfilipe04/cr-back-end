import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema(
    {
        id: String,
        fistName: String,
        secondName: String,
        phone: String,
        birthDate: String,
        adress: String,
        email: String,
    },
    { collection: "contacts" }
);

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
