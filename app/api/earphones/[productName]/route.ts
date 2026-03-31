import { getEarphoneDetails } from "@/app/_lib/services/getEarphoneDetails";
import { NextResponse, NextRequest } from "next/server";

type Params = {
  productName: string;
};

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ productName: string }> },
) {
  const { productName } = await context.params;
  try {
    const data = await getEarphoneDetails({ productName });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch earphones" },
      { status: 500 },
    );
  }
}
