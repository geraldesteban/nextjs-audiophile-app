export async function getProductDetails({
  productName,
  productNameDetails,
}: {
  productName: string;
  productNameDetails: string;
}) {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/${productName}/${productNameDetails}`,
    );

    if (!data.ok) {
      throw new Error(`HTTP Error: ${data.status}`);
    }

    return data.json();
  } catch (error) {
    console.error("Fetch failed", error);
    throw error;
  }
}
