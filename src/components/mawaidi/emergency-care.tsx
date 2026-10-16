import { useEffect, useRef } from 'react';
import { ArrowRight, Hospital, ShieldAlert, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { CareRecommendation } from '@/lib/care-contract';

export function EmergencyCare({ recommendation, onReset }: { recommendation: CareRecommendation; onReset: () => void }) {
 const heading = useRef<HTMLHeadingElement>(null);
 useEffect(() => {
  heading.current?.focus({ preventScroll: true });
  heading.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
 }, []);
 return <section aria-label="شاشة الطوارئ" className="mx-auto max-w-3xl border-t-4 border-coral py-6">
  <div className="mb-5 flex items-center gap-3 text-coral"><ShieldAlert size={36} aria-hidden="true"/><span className="font-medium">لا تنتظر موعداً</span></div>
  <h2 ref={heading} tabIndex={-1} className="text-2xl font-semibold outline-none">اطلب رعاية طارئة الآن</h2>
  <p dir="ltr" className="mt-2 text-right text-xs text-muted-foreground">Seek emergency care now</p>
  <p className="mt-5 text-sm leading-7">وصفك يتضمن علامات قد تكون خطيرة. اطلب خدمة الإسعاف المحلية الآن، أو توجّه فوراً لأقرب قسم طوارئ بمساعدة شخص آخر.</p>
  <div className="mt-6 flex items-start gap-3 border-y border-border py-5"><Hospital className="shrink-0 text-coral" size={24}/><div><h3>الأولوية للطوارئ، وليس للحجز</h3><p className="mt-2 text-sm leading-7">{recommendation.nextStep}</p></div></div>
  <div className="flex items-start gap-3 border-b border-border py-5"><Users className="shrink-0 text-primary" size={24}/><div><h3>اطلب مساعدة شخص قريب</h3><p className="mt-2 text-sm leading-7">لا تقد السيارة بنفسك. أخبر شخصاً بجانبك بما يحدث ليُساعدك في طلب الرعاية.</p></div></div>
  <p className="mt-5 text-sm leading-7">{recommendation.explanation}</p>
  <p className="mt-4 text-xs leading-6 text-muted-foreground">هذا توجيه أولي وليس تشخيصاً. مواعيدي لا يتصل بالإسعاف ولا يرسل طلب مساعدة؛ اطلب المساعدة مباشرة ولا تنتظر رداً داخل التطبيق.</p>
  <Button variant="outline" onClick={onReset} className="mt-6"><ArrowRight size={18}/>العودة لوصف القلق الصحي</Button>
 </section>;
}