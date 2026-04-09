import bcrypt from "bcryptjs";
import crypto from "crypto";

import { connectDB } from "@/app/_lib/config/mongodb";
import Users from "@/app/_lib/models/users";
import { sendVerificationEmail } from "@/app/_lib/services/mail/nodemailer";

type Signup = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export async function signup({ firstName, lastName, email, password }: Signup) {
  // Connect to MongoDB database
  await connectDB();

  // Check if user already exists
  const existingUser = await Users.findOne({ email });
  if (existingUser) throw new Error("Email already exists!");

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create verification token
  const token = crypto.randomBytes(32).toString("hex");

  // Create User
  const user = await Users.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    isVerified: false,
    verifyToken: token,
    verifyTokenExpires: Date.now() + 1000 * 60 * 60,
  });

  await sendVerificationEmail(email, token);

  const { password: _, ...safeUser } = user.toObject();

  return safeUser;
}
