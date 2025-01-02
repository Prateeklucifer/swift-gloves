import ConnectToDB from '@/DB/ConnectToDB'
import Features from '@/schema/Features'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        ConnectToDB()
        let allEntries = await Features.find({})

        // if all entries 0 then create 3 of them

        if (allEntries.length == 0) {
            await Features.create({ title: "Train with the Best", paragraph: "Our certified trainers bring years of experience in professional boxing and fitness training. Whether you're a beginner or aiming to go pro, our coaches are here to guide you with personalized attention, expert techniques, and constant motivation to help you reach your peak potential." }, { title: "Train Like a Champion", paragraph: "Our academy is equipped with top-notch boxing rings, advanced training equipment, and a dedicated fitness zone to ensure you have everything you need for a comprehensive workout experience. Experience a space designed to inspire greatness." }, { title: "Start Strong, Stay Strong", paragraph: "From beginners stepping into the ring for the first time to seasoned fighters refining their skills, our diverse programs are tailored to all fitness levels and goals. Choose from technique-based training, fitness sessions, or sparring programs to suit your journey." }, { title: "Be Part of a Fighting Family", paragraph: "At our academy, you’re not just another trainee—you’re part of a community. Train alongside like-minded individuals, celebrate milestones together, and thrive in an environment that encourages discipline, respect, and camaraderie. Together, we rise." })

            let allData = await Features.find({})

            return NextResponse.json({ data: allData })
        } else {
            return NextResponse.json({ data: allEntries })
        }

    } catch (err) {
        return NextResponse.json({ message: "something went wrong" }, { status: 500 })
    }
}
