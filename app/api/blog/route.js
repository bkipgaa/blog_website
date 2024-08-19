const { NextResponse } = require("next/server")
import {ConnectDB} from "@/lib/config/db"
import BlogModel from "@/lib/models/Blogmodel";
import {writeFile} from 'fs/promises'


const LoadDB = async () => {
    await ConnectDB();
}

LoadDB()
//API Endpoint to get all blogs

export async function GET(request) {

    const blogId = request.nextUrl.searchParams.get("id")
    if (blogId){
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog)
    }
    else{
        const blogs = await BlogModel.find({})
    
    return NextResponse.json({blogs})
        
    }
    //getting data from database
    
}

//Storing blog Info to server_Database, API Endpoint for Uploading Blog
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