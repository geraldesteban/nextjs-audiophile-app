import Transition from "@/app/_components/Transition";
import LogoutButton from "../_components/LogoutButton";

export default function Page() {
  return (
    <Transition>
      <div className="min-h-screen flex justify-center items-center flex-col gap-10 w-100 mx-auto">
        <h2 className="text-4xl font-semibold mr-auto">My Account</h2>
        <div className="mr-auto flex flex-col gap-10">
          {/* Orders */}
          <div>
            <h2 className="font-bold text-nowrap mb-5">Order History</h2>
            <span>You haven't placed any orders yet.</span>
          </div>
          {/* Account Details */}
          <div>
            <h2 className="font-bold text-nowrap mb-5">Account Details</h2>
            <ul>
              <li className="font-semibold">Name:</li>
              <li className="font-semibold">Email:</li>
              <li className="font-semibold">Phone:</li>
              <li className="font-semibold">Address:</li>
              <li className="font-semibold">Zipcode:</li>
              <li className="font-semibold">City:</li>
              <li className="font-semibold">Country:</li>
            </ul>
          </div>
        </div>
        <LogoutButton />
      </div>
    </Transition>
  );
}
