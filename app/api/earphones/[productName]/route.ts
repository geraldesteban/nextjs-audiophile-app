import { getHeadphoneDetails } from "@/app/_lib/services/getHeadphoneDetails";
import { NextResponse } from "next/server";

type Params = {
  productName: string;
};

export async function GET(request: Request, { params }: { params: Params }) {
  try {
    const { productName } = params;

    const data = await getHeadphoneDetails({ productName });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch headphones" },
      { status: 500 },
    );
  }
}
