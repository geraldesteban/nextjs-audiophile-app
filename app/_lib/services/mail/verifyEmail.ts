import { connectDB } from "@/app/_lib/config/mongodb";
import Users from "@/app/_lib/models/users";

export async function verifyEmail(token: string) {
  await connectDB();

  if (!token) {
    throw new Error("Invalid token");
  }

  // Find user by token
  const user = await Users.findOne({
    verifyToken: token,
    verifyTokenExpires: { $gt: Date.now() },
  });

  if (!user) {
    throw new Error("Invalid or expired token");
  }

  // Verify user
  user.isVerified = true;
  user.verifyToken = null;
  user.verifyTokenExpires = null;

  await user.save();

  return {
    message: "Email verified successfully",
  };
}
