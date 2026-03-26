import { getHeadphones } from "@/app/_lib/services/getHeadphones";

import HeadphonesClient from "@/app/_components/Products/HeadphonesClient";
import HeadphonesDetails from "@/app/_components/Products/HeadphonesDetails";

async function Headphones() {
  const headphones = await getHeadphones();

  return (
    <>
      <HeadphonesClient headphones={headphones} />
      <HeadphonesDetails headphones={headphones} />
    </>
  );
}

export default Headphones;
