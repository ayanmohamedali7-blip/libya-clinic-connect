import { createServerFn } from '@tanstack/react-start';
import { careInput } from './care-contract';
export const suggestCare = createServerFn({method:'POST'})
 .inputValidator(input=>careInput.parse(input))
 .handler(async({data})=>{
  const key=process.env['LOVABLE_API_KEY'];
  if(!key)return {ok:false as const,message:'خدمة الاقتراحات غير مهيأة حالياً. يرجى المحاولة لاحقاً.'};
  const {runCareSuggestion}=await import('./care.server');
  return runCareSuggestion(data.concern,key);
 });
