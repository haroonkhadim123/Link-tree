import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("bittree");
    const collection = db.collection("users");
    const users = await collection.find({}).toArray();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch users" }, { status: 500 });
  }
}


export async function POST(request) {
  try {
    const body = await request.json();
    
    const client = await clientPromise;
    const db = client.db("bittree");
    const collection = db.collection("users");

    // ✅ Check if handle already exists
    const existingUser = await collection.findOne({ handle: body.handle });
    if (existingUser) {
      return NextResponse.json({
        error: true,
        success: false,
        message: "Handle already exists",
      });
    }

    // ✅ Use body.links safely (not undefined)
  await collection.insertOne({
  handle: body.handle,
  links: body.links.map(item => ({
    link: item.link,
    shorttext: item.shorttext,
  })),
  pic: body.pic,
  desc: body.desc || "",
});


    return NextResponse.json({
      error: false,
      success: true,
      message: "Bittree created successfully",
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to connect to database", details: error.message },
      { status: 500 }
    );
  }
}
export async function DELETE(req) {
  try {
    const { handle } = await req.json();
    if (!handle) return NextResponse.json({ success: false, message: "Handle required" }, { status: 400 });

    const client = await clientPromise;
    const db = client.db("bittree");

    const result = await db.collection("users").deleteMany({ handle }); // delete all related docs

    if (result.deletedCount === 0) {
      return NextResponse.json({ success: false, message: "No data found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Something went wrong" }, { status: 500 });
  }
}
