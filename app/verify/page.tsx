import { Suspense } from "react";
import VerifyClient from "@/app/_components/Verify/VerifyClient";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <VerifyClient />
    </Suspense>
  );
}
