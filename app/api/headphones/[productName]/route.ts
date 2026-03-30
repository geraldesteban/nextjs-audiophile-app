import { NextResponse } from "next/server";
import { getHeadphoneDetails } from "@/app/_lib/services/getHeadphoneDetails";

type Params = {
  productName: string;
};

export async function GET(request: Request, { params }: { params: Params }) {
  try {
    const { productName } = await params;

    const data = await getHeadphoneDetails({ productName: productName });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch headphones" },
      { status: 500 },
    );
  }
}
