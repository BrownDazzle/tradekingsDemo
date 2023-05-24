import Order from "@models/Order";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const data = await request.json();



    try {
        await connectToDB();
        const newOrder = new Order(data);
        console.log(newOrder)
        await newOrder.save();
        return new Response(JSON.stringify(newOrder), { status: 201 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to create a new Order", { status: 500 });
    }
}
