import clinicPhoto from '@/assets/clinic.jpg';
import clinicDefault from '@/assets/clinic-default.jpg';
import doctorPhoto from '@/assets/doctor.jpg';
import heroPhoto from '@/assets/healthcare-hero.jpg';
export { clinicPhoto, clinicDefault, doctorPhoto, heroPhoto };
export const defaultClinic = { id: 'hayat', name: 'مصحة الحياة', en: 'Al Hayat Clinic', specialty: 'طب عام وتخصصات متعددة', city: 'طرابلس، حي الأندلس', rating: '4.8', reviews: 128, distance: '1.2', image: clinicPhoto, category: 'all' };
export const clinics = [
 defaultClinic,
 { id: 'noor', name: 'مصحة النور التخصصية', en: 'Al Noor Medical Center', specialty: 'طب الأطفال والنساء والولادة', city: 'طرابلس، بن عاشور', rating: '4.7', reviews: 96, distance: '2.4', image: clinicPhoto, category: 'children' },
 { id: 'smile', name: 'عيادة الابتسامة', en: 'Smile Dental Clinic', specialty: 'طب وجراحة الأسنان', city: 'طرابلس، قرقارش', rating: '4.9', reviews: 84, distance: '3.1', image: clinicDefault, category: 'dental' },
 { id: 'lab', name: 'مختبر الشفاء', en: 'Al Shifa Laboratory', specialty: 'تحاليل طبية ومختبرات', city: 'طرابلس، الفرناج', rating: '4.6', reviews: 72, distance: '4.0', image: clinicDefault, category: 'lab' },
];
export const screenNames: Record<string,string> = { home:'الرئيسية', clinics:'المصحات', clinic:'مصحة الحياة', doctor:'الطبيب', confirm:'تأكيد الموعد', appointments:'مواعيدي', prescriptions:'الوصفات الطبية', reminders:'التذكيرات', profile:'الملف الشخصي', family:'إضافة فرد من العائلة', welcome:'مرحباً بك', queue:'طابور العيادة', account:'حسابي', settings:'الإعدادات', information:'المعلومات الشخصية', help:'المساعدة والدعم', hours:'أوقات العمل' };
export function pageHead(screen: string, doctor = false) { const title = `${screenNames[screen] || 'الرئيسية'} | مواعيدي${doctor ? ' للأطباء' : ''}`; const description = doctor ? 'مواعيدي للأطباء — المواعيد والعيادات وطابور المرضى في مكان واحد.' : 'مواعيدي — اكتشف المصحات والأطباء في ليبيا واحجز دورك بكل راحة.'; return { meta: [{title}, {name:'description',content:description},{property:'og:title',content:title},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}] }; }
export const patients = [ {name:'أحمد محمد علي',time:'9:00 ص',type:'كشف أولي',confirmed:true}, {name:'فاطمة سالم',time:'9:30 ص',type:'متابعة',confirmed:true}, {name:'محمد عبد السلام',time:'10:00 ص',type:'كشف أولي',confirmed:false}, {name:'سارة محمود',time:'10:30 ص',type:'متابعة',confirmed:true}, {name:'علي المبروك',time:'11:00 ص',type:'كشف أولي',confirmed:false}, {name:'مريم أحمد',time:'11:30 ص',type:'متابعة',confirmed:true}, {name:'خالد عمر',time:'12:00 م',type:'كشف أولي',confirmed:false}, {name:'هند حسن',time:'12:30 م',type:'متابعة',confirmed:true} ];
