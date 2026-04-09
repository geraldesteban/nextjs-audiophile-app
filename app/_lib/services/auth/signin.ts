import { compare } from "bcryptjs";
import { connectDB } from "@/app/_lib/config/mongodb";
import Users from "@/app/_lib/models/users";
import jwt from "jsonwebtoken";

type Login = {
  email: string;
  password: string;
};

export async function signin({ email, password }: Login) {
  await connectDB();

  // Find the email if exists
  const user = await Users.findOne({ email });
  if (!user) throw new Error("Invalid Email!");

  // Check if verified
  if (!user.isVerified) throw new Error("Your Email is not verified!");

  const isMatch = await compare(password, user.password);
  if (!isMatch) throw new Error("Invalid password!");

  const token = jwt.sign(
    {
      userId: user._id.toString(),
      email: user.email,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" },
  );

  return {
    token,
    user: {
      id: user._id.toString(),
      email: user.email,
    },
  };
}
