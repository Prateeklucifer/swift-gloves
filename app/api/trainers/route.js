import ConnectToDB from "@/DB/ConnectToDB";
import Trainer from "@/schema/Trainer";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    ConnectToDB();
    let allEntries = await Trainer.find({});

    if (allEntries.length == 0) {
      await Trainer.create(
        { name: "Harpreet Singh", imageURL: "/images/t1.png" },
        { name: "Shubham Kumar", imageURL: "/images/t2.png" },
        { name: "Kunal Mehta", imageURL: "/images/t3.png" },
        { name: "Rajeev Sharma", imageURL: "/images/t4.png" },
      );

      let allData = await Trainer.find({});

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
