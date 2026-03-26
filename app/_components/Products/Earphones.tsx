import EarphonesClient from "@/app/_components/Products/EarphonesClient";
import EarphonesDetails from "@/app/_components/Products/EarphonesDetails";
import { getEarphones } from "@/app/_lib/services/getEarphones";

async function Earphones() {
  const earphones = await getEarphones();

  return (
    <>
      <EarphonesClient earphones={earphones} />
      <EarphonesDetails earphones={earphones} />
    </>
  );
}

export default Earphones;
