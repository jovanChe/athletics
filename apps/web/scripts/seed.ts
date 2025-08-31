/*
  Seed script: creates (or updates) a superAdmin user.
  Usage: pnpm --filter web tsx scripts/seed.ts
*/
import dotenv from "dotenv";
import { resolve } from "node:path";
dotenv.config({ path: resolve(process.cwd(), ".env.local") });
import { connectToDatabase, User } from "@repo/db";
import bcrypt from "bcrypt";

async function main() {
  const email = process.env.SEED_SUPERADMIN_EMAIL;
  const password = process.env.SEED_SUPERADMIN_PASSWORD;
  const name = process.env.SEED_SUPERADMIN_NAME || "Super Admin";

  if (!email || !password) {
    // eslint-disable-next-line no-console
    console.error("Missing SEED_SUPERADMIN_EMAIL or SEED_SUPERADMIN_PASSWORD in env");
    process.exit(1);
  }

  await connectToDatabase();
  const hashedPassword = await bcrypt.hash(password, 12);
  const existing = await User.findOne({ email });
  if (existing) {
    existing.name = name;
    existing.role = "superAdmin";
    existing.hashedPassword = hashedPassword;
    await existing.save();
    // eslint-disable-next-line no-console
    console.log("Updated existing superAdmin:", email);
  } else {
    await User.create({ email, name, role: "superAdmin", hashedPassword });
    // eslint-disable-next-line no-console
    console.log("Created superAdmin:", email);
  }
}

main().then(() => process.exit(0));


