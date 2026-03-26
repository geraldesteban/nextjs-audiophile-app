export async function getEarphones() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/earphones`,
    { next: { revalidate: 60 } },
  );

  if (!data.ok) {
    throw new Error("Failed to fetch earphones");
  }

  return data.json();
}
