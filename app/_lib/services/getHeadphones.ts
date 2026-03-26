export async function getHeadphones() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/headphones`,
    { next: { revalidate: 60 } },
  );

  if (!data.ok) {
    throw new Error("Failed to fetch headphones");
  }

  return data.json();
}
