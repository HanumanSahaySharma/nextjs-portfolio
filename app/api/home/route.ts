import Home from "@/app/admin/models/Home";
import connectDB from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const data = await req.json();
    const saveData = await Home.create(data);
    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Data saved successfully.",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong.",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong.",
    });
  }
}

export async function GET() {
  try {
    await connectDB();
    const data = await Home.find({});
    if (data) {
      return NextResponse.json({
        success: true,
        data,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong.",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong.",
    });
  }
}
