export async function getSpeakers() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/speakers`, {
    next: { revalidate: 60 },
  });

  if (!data.ok) {
    throw new Error("Failed to fetch speakers");
  }

  return data.json();
}
