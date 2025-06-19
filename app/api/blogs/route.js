import Blog from "@/models/blogs";
import connectDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description } = await request.json();
    await connectDB(); 
    await Blog.create({
        title,
        description
    });
    return NextResponse.json({
        message: "Blog created successfully"
    });
}

export async function GET() {
    await connectDB();
    const blogs = await Blog.find();
    return NextResponse.json(blogs);
}

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get("id");
    if (!id) {
        return NextResponse.json({
            message: "Blog ID is required"
        }, { status: 400 });
    }
    await connectDB();
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({
        message: "Blog deleted successfully"
    });
}

