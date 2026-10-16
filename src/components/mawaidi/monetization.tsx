import { useState, type ReactNode } from 'react';
import { Sparkles, Check, Crown, CreditCard, CalendarClock, Eye, CalendarCheck, Receipt, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Rating } from './primitives';
import { doctors, type Doctor, type Plan } from './data';
import { usePrototype, type Subscription } from './context';

export function FeaturedBadge() { return <span className="inline-flex items-center gap-1 rounded-md bg-amber/15 px-2 py-0.5 text-[10px] font-medium text-foreground"><Crown size={12} className="text-amber"/>مميّز</span>; }

export function SubscriptionStatus({label, sub}:{label:string;sub:Subscription|null}) {
 const active=!!sub?.active;
 return <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 text-sm"><span className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary"/>{label}</span><span className={`status-badge ${active?'':'coral-badge'}`}>{active?'نشط':'منتهٍ'}{sub&&<span dir="rtl"> · {active?'حتى':'منذ'} {sub.until}</span>}</span></div>;
}

export function PlanCards({plans, value, onChange}:{plans:Plan[];value:string;onChange:(id:string)=>void}) {
 return <div role="radiogroup" className="grid gap-3 sm:grid-cols-2">{plans.map(p=><button type="button" role="radio" aria-checked={value===p.id} key={p.id} onClick={()=>onChange(p.id)} className={`relative rounded-2xl border-2 bg-card p-5 text-right transition ${value===p.id?'border-primary shadow-md':'border-border'}`}>{p.tag&&<span className="absolute left-4 top-4 rounded-md bg-primary px-2 py-0.5 text-[10px] text-primary-foreground">{p.tag}</span>}<span className="block text-sm text-muted-foreground">{p.name}</span><strong className="mt-2 block text-2xl font-semibold">{p.price} <small className="text-xs font-normal text-muted-foreground">د.ل / {p.period}</small></strong>{p.note&&<span className="mt-2 block text-xs text-primary">{p.note}</span>}{value===p.id&&<Check size={18} className="absolute bottom-4 left-4 text-primary"/>}</button>)}</div>;
}

export function Paywall({icon=<Sparkles size={26}/>, title, subtitle, benefits, plans, cta='اشترك الآن', note, onSubscribe, children}:{icon?:ReactNode;title:string;subtitle?:string;benefits:string[];plans:Plan[];cta?:string;note?:string;onSubscribe:(plan:Plan)=>void;children?:ReactNode}) {
 const [plan,setPlan]=useState(plans[0]!.id);
 return <section className="mx-auto max-w-2xl space-y-5"><div className="rounded-2xl bg-primary p-6 text-primary-foreground"><span className="mb-3 grid size-12 place-items-center rounded-xl bg-card text-primary">{icon}</span><h2 className="text-xl font-semibold">{title}</h2>{subtitle&&<p className="mt-2 text-sm opacity-90">{subtitle}</p>}<ul className="mt-4 space-y-2 text-sm">{benefits.map(b=><li key={b} className="flex items-center gap-2"><Check size={16}/>{b}</li>)}</ul></div>{children}<PlanCards plans={plans} value={plan} onChange={setPlan}/><Button className="primary-large w-full" onClick={()=>onSubscribe(plans.find(p=>p.id===plan)!)}>{cta}</Button>{note&&<p className="text-center text-xs text-primary">{note}</p>}<p className="text-center text-[11px] text-muted-foreground">نموذج تجريبي: لا يتم أي خصم فعلي، والأسعار للعرض فقط.</p></section>;
}

export const aiPlans:Plan[]=[{id:'monthly',name:'شهري',price:'15',period:'شهر',until:'16 نوفمبر 2026'},{id:'yearly',name:'سنوي',price:'120',period:'سنة',until:'16 أكتوبر 2027',tag:'وفّر 33%',note:'يعادل 10 د.ل شهرياً'}];
export const featuredPlans:Plan[]=[{id:'weekly',name:'أسبوعي',price:'25',period:'أسبوع',until:'23 أكتوبر 2026'},{id:'monthly',name:'شهري',price:'80',period:'شهر',until:'16 نوفمبر 2026',tag:'الأوفر'}];

export function AiPaywall({onDone}:{onDone:()=>void}) {
 const {aiSub,setAiSub,trialUsed}=usePrototype();
 return <Paywall title="اشترك لاستخدام المساعد الذكي" subtitle="توجيه أولي للتخصص المناسب — ليس تشخيصاً طبياً." benefits={['اقتراحات غير محدودة للتخصص والمصحة الأنسب','إبراز الأطباء المناسبين في مصحات قريبة','تنبيه فوري عند الأعراض الطارئة']} plans={aiPlans} note={trialUsed?'لقد استخدمت تجربتك المجانية':'جرّبها مجاناً أول مرة'} onSubscribe={p=>{setAiSub({active:true,plan:p.name,until:p.until});onDone();}}>{aiSub&&<SubscriptionStatus label="اشتراك المساعد الذكي" sub={aiSub}/>}</Paywall>;
}

export function sortDoctors(list:Doctor[], meFeatured:boolean) {
 const withFlag=list.map(d=>({...d,featured:d.me?meFeatured:!!d.featured}));
 const order=[...new Set(withFlag.map(d=>d.specialty))];
 return order.map(s=>({specialty:s,doctors:withFlag.filter(d=>d.specialty===s).sort((a,b)=>Number(b.featured)-Number(a.featured))}));
}

export function ClinicDoctors({clinicId, onBook, compact=false}:{clinicId:string;onBook:(d:Doctor)=>void;compact?:boolean}) {
 const {featuredSub}=usePrototype();
 const groups=sortDoctors(doctors.filter(d=>d.clinicId===clinicId),!!featuredSub?.active);
 if(!groups.length)return <p className="text-sm text-muted-foreground">لا يوجد أطباء مسجلون حالياً.</p>;
 return <div className="space-y-4">{groups.map(g=><div key={g.specialty}>{!compact&&<h3 className="mb-2 text-xs text-muted-foreground">{g.specialty}</h3>}<div className="space-y-2">{g.doctors.map(d=><div key={d.id} className={`flex items-center gap-3 rounded-xl border p-3 ${d.featured?'border-amber bg-amber/5':'border-border bg-card'}`}>{d.photo?<img src={d.photo} alt={d.name} width={52} height={52} className="size-13 rounded-xl object-cover"/>:<span className="grid size-13 place-items-center rounded-xl bg-secondary text-lg text-primary">{d.name.replace('د. ','')[0]}</span>}<div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h4 className="text-sm font-medium">{d.name}</h4>{d.featured&&<FeaturedBadge/>}</div><p className="text-[11px] text-muted-foreground">{d.specialty}</p><Rating value={d.rating} reviews={d.reviews}/></div><Button size="sm" className="rounded-xl" onClick={()=>onBook(d)}>احجز موعد</Button></div>)}</div></div>)}</div>;
}

export function FeaturedScreen({onBilling}:{onBilling:()=>void}) {
 const {featuredSub,setFeaturedSub,addPayment}=usePrototype();
 return <div className="space-y-5"><SubscriptionStatus label="الظهور المميّز داخل المصحة" sub={featuredSub}/><div className="grid grid-cols-2 gap-3"><Stat icon={<Eye size={20}/>} value={featuredSub?.active?'1,240':'312'} label="مرات الظهور"/><Stat icon={<CalendarCheck size={20}/>} value={featuredSub?.active?'38':'9'} label="الحجوزات"/></div><Paywall icon={<Crown size={26}/>} title="الظهور المميّز داخل المصحة" subtitle="تظهر أول طبيب في تخصصك داخل مصحتك." benefits={['ترتيب أول بين أطباء تخصصك في نفس المصحة','شارة «مميّز» على بطاقتك للمرضى','يظهر أيضاً ضمن اقتراحات المساعد الذكي']} plans={featuredPlans} cta={featuredSub?.active?'تجديد الاشتراك':'اشترك الآن'} onSubscribe={p=>{setFeaturedSub({active:true,plan:p.name,until:p.until});addPayment(`الظهور المميّز · ${p.name}`,p.price);onBilling();}}/></div>;
}

function Stat({icon,value,label}:{icon:ReactNode;value:string;label:string}){return <div className="rounded-xl border border-border bg-card p-4"><span className="text-primary">{icon}</span><strong className="mt-2 block text-xl" dir="ltr">{value}</strong><span className="text-xs text-muted-foreground">{label}</span></div>;}

export function BillingScreen({onFeatured}:{onFeatured:()=>void}) {
 const {featuredSub,setFeaturedSub,payments,addPayment}=usePrototype();
 const active=!!featuredSub?.active;
 return <div className="mx-auto max-w-2xl space-y-5"><div className="rounded-2xl bg-primary p-6 text-primary-foreground"><span className="text-xs opacity-80">الاشتراك الحالي</span><h2 className="mt-1 flex items-center gap-2 text-lg font-semibold"><Crown size={20}/>الظهور المميّز {featuredSub?`· ${featuredSub.plan}`:''}</h2><p className="mt-3 flex items-center gap-2 text-sm"><CalendarClock size={16}/>{active?`التجديد القادم: ${featuredSub!.until}`:featuredSub?`انتهى في ${featuredSub.until}`:'لا يوجد اشتراك'}</p></div><div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"><span className="menu-icon"><CreditCard size={20}/></span><div className="flex-1"><h3 className="text-sm">طريقة الدفع</h3><p className="text-xs text-muted-foreground" dir="ltr">بطاقة مصرفية •••• 4821</p></div><Button variant="outline" size="sm">تغيير</Button></div><Button className="primary-large w-full" onClick={()=>{if(!featuredSub){onFeatured();return;}const plan=featuredPlans.find(p=>p.name===featuredSub.plan)??featuredPlans[1]!;setFeaturedSub({active:true,plan:plan.name,until:plan.until});addPayment(`تجديد الظهور المميّز · ${plan.name}`,plan.price);}}>{active?'تجديد / دفع':'دفع وتفعيل الاشتراك'}</Button><section><h3 className="mb-3 flex items-center gap-2 text-sm font-medium"><Receipt size={18}/>سجل المدفوعات</h3><div className="divide-y divide-border rounded-xl border border-border bg-card">{payments.map(p=><div key={p.id} className="flex items-center justify-between gap-3 p-4 text-sm"><div><p>{p.label}</p><p className="text-xs text-muted-foreground">{p.date}</p></div><div className="text-left"><b>{p.amount} د.ل</b><span className="status-badge mr-2">مدفوع</span></div></div>)}</div></section><p className="text-center text-[11px] text-muted-foreground">هذه شاشة دفع اشتراك فقط، ولا تحتفظ برصيد مالي. نموذج تجريبي دون خصم فعلي.</p></div>;
}
