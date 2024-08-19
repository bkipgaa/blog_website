import mongoose from "mongoose"

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://bkipgaa:123456789tu@cluster0.8wu8gvl.mongodb.net/')
    console.log("DB Connected")
}

