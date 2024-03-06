import { z } from "zod";

const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;

export const registerSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Must be 2 or more characters long" })
    .max(100, { message: "Must be 100 or fewer characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .min(11, "연락처는 11자리여야 합니다")
    .max(11, "연락처는 11자리여야 합니다")
    .refine((val) => phoneRegex.test(val), {
      message: "11자리 숫자를 입력해주세요",
    }),
  role: z.string().min(2, { message: "역할을 선택해주세요." }),
  password: z
    .string()
    .min(8, "비밀번호는 최소 6자리 이상이어야 합니다.")
    .max(100, "비밀번호는 100자리 이하이어야 합니다.")
    .refine(
      (value) => passwordRegex.test(value),
      "비밀번호는 최소 8자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."
    ),
  confirmPassword: z
    .string()
    .min(8, "비밀번호는 최소 8자리 이상이어야 합니다.")
    .max(100, "비밀번호는 100자리 이하이어야 합니다.")
    .refine(
      (value) => passwordRegex.test(value),
      "비밀번호는 최소 8자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."
    ),
});
