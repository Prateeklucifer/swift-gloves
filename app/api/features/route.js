import ConnectToDB from '@/DB/ConnectToDB'
import Features from '@/schema/Features'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        ConnectToDB()
        let allEntries = await Features.find({})

        // if all entries 0 then create 3 of them

        if (allEntries.length == 0) {
            await Features.create({ title: "title1", paragraph: "paragraph1" }, { title: "title2", paragraph: "paragraph2" }, { title: "title3", paragraph: "paragraph3" }, { title: "title4", paragraph: "paragraph4" })

            let allData = await Features.find({})

            return NextResponse.json({data: allData})
        }else{
            return NextResponse.json({data: allEntries})
        }

    } catch (err) {
        return NextResponse.json({ message: "something went wrong" }, {status: 500})
    }
}
