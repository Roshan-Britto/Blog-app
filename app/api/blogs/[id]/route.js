import { NextResponse } from "next/server";
import Blog from "@/models/blogs";
import connectDB from "@/libs/mongodb";

export async function PUT(request, { params }) {
    const { id } = await params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectDB();
    const blog = await Blog.findByIdAndUpdate(id, {
        title,
        description
    });
    return NextResponse.json({
        message: "Blog updated successfully",
        blog
    });
}

export async function GET(request, context) {
    const { params } = await context;
    const { id } = await params;
    await connectDB();
    const blog = await Blog.findOne({ _id: id });
    if (!blog) {
        return NextResponse.json({
            message: "Blog not found"
        }, { status: 404 });
    }
    return NextResponse.json({
        message: "Blog fetched successfully",
        blog
    });
}