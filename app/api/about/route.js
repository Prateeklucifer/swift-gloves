import ConnectToDB from "@/DB/ConnectToDB";
import About from "@/schema/About";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        ConnectToDB();
        let allEntries = await About.find({});

        // if all entries 0 then create 3 of them

        if (allEntries.length == 0) {
            await About.create({
                para1:
                    "At Swift Gloves, we are dedicated to transforming lives through the art of boxing. Established with a passion for fitness and combat sports, our academy provides a nurturing environment where individuals can learn, grow, and excel. From beginners to professionals, we welcome everyone to experience the discipline, strength, and confidence that boxing instills.",
                para2:
                    "Our mission is to empower individuals by delivering world-class boxing training. We aim to cultivate a culture of perseverance, respect, and excellence while fostering physical and mental strength. Through innovative programs and expert coaching, we strive to unlock the potential in every student.",
                para3:
                    "We aim to be more than just a boxing academy—we aim to be a second home for athletes and fitness enthusiasts. By offering cutting-edge facilities, professional guidance, and a supportive community, we focus on helping our members achieve their personal and athletic goals.",
                para4:
                    "Our vision is to become a leading name in boxing and fitness, inspiring a global community of champions. We aspire to make boxing accessible and impactful, promoting it as a way of life that enhances health, self-esteem, and resilience for people of all ages."
            });

            let allData = await FAQs.find({});

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