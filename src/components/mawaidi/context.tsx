import { createContext, useContext, useState, type ReactNode } from 'react';
import { clinics, defaultClinic } from './data';
type Booking={day:string;time:string;type:string;clinicId:string};
export type Subscription={active:boolean;plan:string;until:string};
export type Payment={id:number;label:string;amount:string;date:string};
function usePrototypeState(){
 const [lang,setLang]=useState('ar');
 const [booking,setBooking]=useState<Booking>({day:'الأحد، 18 أكتوبر',time:'9:30 ص',type:'كشف أولي',clinicId:'hayat'});
 const [booked,setBooked]=useState(false);
 const [selectedClinic,setSelectedClinic]=useState<typeof clinics[number]>(defaultClinic);
 const [family,setFamily]=useState('');const [familyAdded,setFamilyAdded]=useState(false);
 const [aiSub,setAiSub]=useState<Subscription|null>(null);
 const [trialUsed,setTrialUsed]=useState(false);
 const [featuredSub,setFeaturedSub]=useState<Subscription|null>({active:false,plan:'أسبوعي',until:'10 أكتوبر 2026'});
 const [payments,setPayments]=useState<Payment[]>([{id:2,label:'الظهور المميّز · أسبوعي',amount:'25',date:'3 أكتوبر 2026'},{id:1,label:'الظهور المميّز · أسبوعي',amount:'25',date:'26 سبتمبر 2026'}]);
 const addPayment=(label:string,amount:string)=>setPayments(p=>[{id:Date.now(),label,amount,date:'16 أكتوبر 2026'},...p]);
 return {lang,setLang,booking,setBooking,booked,setBooked,selectedClinic,setSelectedClinic,family,setFamily,familyAdded,setFamilyAdded,aiSub,setAiSub,trialUsed,setTrialUsed,featuredSub,setFeaturedSub,payments,addPayment};
}
type State=ReturnType<typeof usePrototypeState>;
// Keep one context instance across hot reloads so provider and consumers always match.
const store=globalThis as typeof globalThis&{__mawaidiContext?:React.Context<State|null>};
const PrototypeContext=store.__mawaidiContext??=createContext<State|null>(null);
export function PrototypeProvider({children}:{children:ReactNode}){const state=usePrototypeState();return <PrototypeContext.Provider value={state}>{children}</PrototypeContext.Provider>;}
export function usePrototype(){const state=useContext(PrototypeContext);if(!state)throw new Error('PrototypeProvider is required');return state;}
