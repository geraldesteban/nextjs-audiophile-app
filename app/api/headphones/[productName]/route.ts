import { NextResponse, NextRequest } from "next/server";
import { getHeadphoneDetails } from "@/app/_lib/services/getHeadphoneDetails";

type Params = {
  productName: string;
};

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ productName: string }> },
) {
  const { productName } = await context.params;
  try {
    const data = await getHeadphoneDetails({ productName: productName });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch headphones" },
      { status: 500 },
    );
  }
}
