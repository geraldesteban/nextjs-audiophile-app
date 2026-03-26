import { getSpeakers } from "@/app/_lib/services/getSpeakers";

import SpeakersClient from "@/app/_components/Products/SpeakersClient";
import SpeakersDetails from "@/app/_components/Products/SpeakersDetails";

async function Speakers() {
  const speakers = await getSpeakers();

  return (
    <>
      <SpeakersClient speakers={speakers} />
      <SpeakersDetails speakers={speakers} />
    </>
  );
}

export default Speakers;
