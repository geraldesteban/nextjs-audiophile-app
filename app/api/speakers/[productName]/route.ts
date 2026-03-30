import { NextResponse } from "next/server";
import { getSpeakerDetails } from "@/app/_lib/services/getSpeakerDetails";

type Params = {
  productName: string;
};

export async function GET(request: Request, { params }: { params: Params }) {
  try {
    const { productName } = await params;

    const data = await getSpeakerDetails({ productName: productName });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch headphones" },
      { status: 500 },
    );
  }
}
