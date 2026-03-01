import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const booking = {
      name: body.name,
      email: body.email,
      date: body.date,
      package: body.package,
      createdAt: new Date(),
    };

    console.log("NEW BOOKING:", booking); // sementara simpan di terminal

    return NextResponse.json({
      success: true,
      message: "Booking received! We'll contact you soon.",
      booking,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Error processing booking" },
      { status: 500 }
    );
  }
}