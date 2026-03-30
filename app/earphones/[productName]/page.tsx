// import { getProductDetails } from "@/app/_lib/services/getProductDetails";

// import ProductDetails from "@/app/_components/Products/productDetails";
// import Gallery from "@/app/_components/Gallery";
// import YouMayAlsoLike from "@/app/_components/YouMayAlsoLike";
// import HomeNavigation from "@/app/_components/Home/HomeNavigation";
// import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";

// export async function generateMetadata({
//   params,
// }: {
//   params: { productName: string };
// }) {
//   const { productName } = await params;

//   return {
//     title: `${productName}`,
//   };
// }

// async function Page({ params }: { params: { productName: string } }) {
//   const { productName } = await params;

//   const productDetails = await getProductDetails({
//     productName: "earphones",
//     productNameDetails: `${productName}`,
//   });

//   return (
//     <div>
//       <ProductDetails products={productDetails} />
//       <Gallery />
//       <YouMayAlsoLike />
//       <HomeNavigation />
//       <HomeAudioGear />
//     </div>
//   );
// }

// export default Page;
