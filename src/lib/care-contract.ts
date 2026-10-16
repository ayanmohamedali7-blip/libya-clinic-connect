import { z } from 'zod';
export const careInput = z.object({ concern: z.string().trim().min(12,'يرجى وصف ما يقلقك في 12 حرفاً على الأقل.').max(1500,'الوصف طويل؛ الحد الأقصى 1500 حرف.'), consent:z.literal(true) });
export const careOutput = z.object({ urgency:z.enum(['emergency','prompt','routine','unclear']), specialty:z.string(), specialtyEnglish:z.string(), explanation:z.string(), nextStep:z.string(), clarification:z.string().nullable(), clinicIds:z.array(z.enum(['hayat','noor','smile','lab'])) });
export type CareRecommendation = z.infer<typeof careOutput>;
export function normalizeRecommendation(value:CareRecommendation):CareRecommendation {
 return {...value,clinicIds:value.urgency==='emergency'||value.urgency==='unclear'?[]:[...new Set(value.clinicIds)].slice(0,2)};
}
