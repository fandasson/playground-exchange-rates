import { z } from "zod";

export const rateSchema = z.object({
    country: z.string(),
    currency: z.string(),
    amount: z.coerce.number(),
    code: z.string().min(3).max(3),
    rate: z.coerce.number(),
});

export const ratesSchema = z.array(rateSchema);
