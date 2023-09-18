import crypto from "crypto";

export const authentication = (salt: string, password: string): string => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(process.env.SECRET)
    .digest("hex");
};

export const random = () => crypto.randomBytes(128).toString("base64");
