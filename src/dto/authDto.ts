import * as z from "zod";
// ! Register validation
export const registerValidate = z
  .object({
    username: z
      .string("Username Is Expect String")
      .min(1, "Username Is Required"),
    email: z
      .string("Email Is Expect String")
      .email()
      .min(1, "Email Is Required"),
    password: z
      .string("Password Is Expect String")
      .min(8, "Password Minimum 8 Character Required")
      .max(16, "Password Maximum 16 Character Required")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[!-/:-@[-`{-~]/,
        "Password must contain at least one special character (!@#$%^&* etc.)"
      ),
    confirmPassword: z
      .string("Password Is Expect String")
      .min(1, "Confirm Password Is Required"),
    role: z.enum(["admin", "user"]).optional(),
    isVerify: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password And Confirm Password Not Match",
    path: ["confirmPassword"],
  });
export type RegisterDto = z.infer<typeof registerValidate>;

// ! Login validation
export const loginValidate = z.object({
  email: z.string("Email Is Expect String").email().min(1, "Email Is Required"),
  password: z
    .string("Password Is Expect String")
    .min(8, "Password Minimum 8 Character Required")
    .max(16, "Password Maximum 16 Character Required")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[!-/:-@[-`{-~]/,
      "Password must contain at least one special character (!@#$%^&* etc.)"
    ),
});
export type LoginDto = z.infer<typeof loginValidate>;
