import Product from "@models/Product";
import { connectToDB } from "@utils/database";
const AWS = require("aws-sdk");
const multer = require("multer");

const fs = require("fs");


const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
        // Generate a unique filename by appending a timestamp to the original filename
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

// Create multer instance with the storage configuration
const upload = multer({ storage });


const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET
});
const uploadImage = (title, emerginacts, imgFile) => {
    return new Promise((resolve, reject) => {
        const params = {
            Key: title,
            Bucket: emerginacts,
            Body: imgFile,
            ContentEncoding: "base64",
            ContentType: "image/jpeg",
            ACL: "public-read"
        };

        s3.upload(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.Location);
            }
        });
    });
};



export const POST = async (request) => {
    const data = await request.json();

    /* const imgFile = Buffer.from(data?.cover, "binary");
     const emerginacts = process.env.AWS_BUCKET;
     const title = data?.title
 
     const imgLink = await uploadImage(title, emerginacts, imgFile)
     console.log(imgLink)*/

    try {
        await connectToDB();
        const newProduct = new Product(data);
        console.log(newProduct)
        await newProduct.save();
        return new Response(JSON.stringify(newProduct), { status: 201 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to create a new Product", { status: 500 });
    }
}
