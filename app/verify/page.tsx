import { Suspense } from "react";
import VerifyClient from "@/app/_components/VerifyClient";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <VerifyClient />
    </Suspense>
  );
}
