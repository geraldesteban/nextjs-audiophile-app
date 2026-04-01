import { getHeadphones } from "@/app/_lib/services/getHeadphones";
import Products from "./Products";

async function Headphones() {
  const headphones = await getHeadphones();

  return <Products products={headphones} />;
}

export default Headphones;
