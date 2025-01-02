import ConnectToDB from "@/DB/ConnectToDB";
import Pricing from "@/schema/Pricing";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    ConnectToDB();
    let allEntries = await Pricing.find({});

    // if all entries 0 then create 3 of them

    if (allEntries.length == 0) {
      await Pricing.create(
        {
          title: " Beginner’s Pack",
          description: "Perfect for newcomers looking to build a strong foundation in boxing techniques and fitness.",
          price: "1,999",
          benifit1: "Access to beginner classes",
          benifit2: "Free training gloves",
          benifit3: "Weekly progress check-ins",
          benifit4: "Flexible scheduling",
        },
        {
          title: "Champion’s Choice",
          description: "Ideal for those serious about improving skills with advanced training and personalized guidance.",
          price: "4,999",
          benifit1: "Unlimited class access",
          benifit2: "1-on-1 coaching sessions",
          benifit3: "Nutrition and workout plans",
          benifit4: "Access to sparring events",
        },
        {
          title: "Elite Membership",
          description: "For dedicated fighters aiming for professional training and exclusive perks.",
          price: "8,999",
          benifit1: "VIP equipment access",
          benifit2: "Free event participation",
          benifit3: "Customized fitness plans",
          benifit4: "Priority scheduling with top coaches",
        }
      );

      let allData = await Pricing.find({});

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
