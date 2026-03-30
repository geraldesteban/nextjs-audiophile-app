// export async function getProducts({ productName }: { productName: string }) {
//   try {
//     const data = await fetch(`/api/${productName}`, {
//       next: { revalidate: 60 },
//     });

//     if (!data.ok) {
//       throw new Error(`HTTP Error: ${data.status}`);
//     }

//     return await data.json();
//   } catch (error) {
//     console.error("Fetch failed", error);
//     throw error;
//   }
// }
