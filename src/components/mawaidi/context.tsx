import { createContext, useContext, useState, type ReactNode } from 'react';
import { clinics, defaultClinic } from './data';
type Booking={day:string;time:string;type:string;clinicId:string};
function usePrototypeState(){
 const [lang,setLang]=useState('ar');
 const [booking,setBooking]=useState<Booking>({day:'الأحد، 18 أكتوبر',time:'9:30 ص',type:'كشف أولي',clinicId:'hayat'});
 const [booked,setBooked]=useState(false);
 const [selectedClinic,setSelectedClinic]=useState<typeof clinics[number]>(defaultClinic);
 const [family,setFamily]=useState('');const [familyAdded,setFamilyAdded]=useState(false);
 return {lang,setLang,booking,setBooking,booked,setBooked,selectedClinic,setSelectedClinic,family,setFamily,familyAdded,setFamilyAdded};
}
const PrototypeContext=createContext<ReturnType<typeof usePrototypeState>|null>(null);
export function PrototypeProvider({children}:{children:ReactNode}){const state=usePrototypeState();return <PrototypeContext.Provider value={state}>{children}</PrototypeContext.Provider>;}
export function usePrototype(){const state=useContext(PrototypeContext);if(!state)throw new Error('PrototypeProvider is required');return state;}
