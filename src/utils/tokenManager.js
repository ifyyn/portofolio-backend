import jwt from "jsonwebtoken";

export const generateAccesToken = (payLoad, expiresIn = "1h") => {
  return jwt.sign(payLoad, process.env.JWT_SECRET, { expiresIn });
};

export const verifyAccesToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
