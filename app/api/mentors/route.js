import ConnectToDB from "@/DB/ConnectToDB";
import Mentor from "@/schema/Mentor";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    ConnectToDB();
    let allEntries = await Mentor.find({});

    if (allEntries.length == 0) {
      await Mentor.create(
        { name: "Mentor Name", imageURL: "/images/m1.png" },
        { name: "Mentor Name", imageURL: "/images/m1.png" },
        { name: "Mentor Name", imageURL: "/images/m1.png" },
        { name: "Mentor Name", imageURL: "/images/m1.png" },
        { name: "Mentor Name", imageURL: "/images/m1.png" }
      );

      let allData = await Mentor.find({});

      return NextResponse.json({ data: allData });
    } else {
      return NextResponse.json({ data: allEntries });
    }
  } catch (err) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    );
  }
}
