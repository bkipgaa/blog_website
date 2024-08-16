const { NextResponse } = require("next/server")
import {ConnectDB} from "@/lib/config/db"
import BlogModel from "@/lib/models/Blogmodel";
import {writeFile} from 'fs/promises'


const LoadDB = async () => {
    await ConnectDB();
}

LoadDB()

export async function GET(request) {
    
    return NextResponse.json({msg:"API Working"})
}

//Storing blog Info to server_Database
export async function POST (request){
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image'); //extract image
    const imageByteData = await image.arrayBuffer();  //convert image to byte
    const buffer = Buffer.from(imageByteData); //extract from buffer
    const path = `./public/${timestamp}_${image.name}`;  //define path for storing image
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`
    
    //storing to Database
    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imgUrl}`,
        authorImg: `${formData.get('authorImg')}`,
    }

    await BlogModel.create(blogData);
    console.log("Blog Saved");

    return NextResponse.json({success:true, msg:"Blog Added"})
}