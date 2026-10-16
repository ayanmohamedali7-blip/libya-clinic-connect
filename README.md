# Libya Clinic Connect

Design a polished, modern mobile app UI called "Mawaidi" (مواعيدي) — a bilingual (Arabic RTL primary, English secondary) clinic appointment & live-queue booking app for clinics in Libya. This is a DESIGN PROTOTYPE ONLY (UI/visual design, no real backend). Mobile-first, Arabic right-to-left layout, using the Readex Pro font (fallback Cairo / Tajawal) for Arabic.

BRAND & VIBE:
- Warm, trustworthy, calm, premium healthcare feel. Soft rounded cards (radius ~16-20px), gentle shadows, generous spacing, clear hierarchy.
- Palette: deep jade/sea-green primary #1E8E78 (with a richer #15715E for depth and gradients), warm cream background #F7F3EA, white cards, dark slate text #203A35, muted text #6E827C, light mint tints #E4F1EC for chips/badges, amber #F5A623 for rating stars, soft coral #F08A5D as a secondary accent.
- Bottom navigation bar with line icons on every main screen.

Design TWO apps:

== PATIENT APP ==
1. Welcome/Splash: app logo (calendar + stethoscope), name "مواعيدي" + tagline "صحتك .. بموعد", big primary "ابدأ الآن" button, soft green illustration background.
2. Home: top row (notification bell, "صباح الخير / {name}", avatar). A bold green hero card "احجز موعدك بسهولة / مع أفضل الأطباء والمصحات" with arrow button. A search field "ابحث عن مصحة أو طبيب". Section "المصحات القريبة" with a horizontal row of category chips (each a soft-tinted circle icon: مختبرات، الأسنان، الأطفال، النساء والولادة) + "عرض الكل". Section "موعدك القادم" = a next-appointment card (clinic name, doctor photo+name+specialty, date, time, a "قادم" badge, "تفاصيل الموعد" link).
3. Clinics list ("المصحات"): search field + list of clinic cards. Each card: a real CLINIC PHOTO thumbnail, clinic name, specialty + city, a star rating (e.g. ★ 4.5), chevron.
4. Clinic profile: large clinic photo/header, clinic name, specialty, star rating + reviews count, address, and a list of its doctors (doctor photo, name, specialty, "احجز موعد" button).
5. Doctor profile: doctor photo, name, specialty, clinic, star rating "4.8 (120 تقييم)", a weekday selector (أيام الأسبوع) with time-slot chips (e.g. 8:00 ص، 9:30 ص، 12:00، …), big primary "احجز موعد" button.
6. Appointment details / confirm: doctor card, date, time, visit type, a primary "تأكيد الحجز" button, note "سيتم إرسال رسالة تأكيد إلى رقمك".
7. My Appointments: tabs "القادمة / السابقة", list of appointment cards (clinic, doctor photo+name, date, time, "قادم" badge).
8. Prescriptions ("الوصفات الطبية"): cards with doctor name, date, medicines list (name, dose, instructions), "عرض الوصفة كاملة" button.
9. Reminders ("التذكيرات"): empty state illustration + "لا توجد تذكيرات حالياً", and a filled state with reminder cards.
10. Profile ("الملف الشخصي"): avatar, name, phone, a menu list (معلوماتي الشخصية، إضافة فرد من العائلة، إعدادات الإشعارات، المساعدة والدعم، تسجيل الخروج).
11. Add family member: avatar add, fields (الاسم الكامل، رقم الهاتف، صلة القرابة), "إضافة" button.
Bottom nav: الرئيسية، المواعيد، الوصفات، الملف الشخصي.

== DOCTOR APP ==
1. Welcome/Splash: logo, "مواعيدي" + "منصة حجز المواعيد الطبية", "تسجيل الدخول" + "إنشاء حساب جديد" buttons.
2. Dashboard: top row (doctor photo, "د. {name}", specialty). Two stat cards with icons (e.g. "7 مواعيد اليوم"، "إجمالي الحالات"), and quick-action cards (مواعيدي، العيادات، طابور العيادة، حسابي).
3. Clinics ("العيادات"): list of the clinics the doctor belongs to (clinic name, specialty, status badge like "نشط / العمل اليومي").
4. Queue ("طابور العيادة"): header with counts (e.g. "3 الحالات غير المؤكدة / 5 الحالات المؤكدة"), tabs (الكل / …), a table/list of patients in queue (queue number, patient name, time, visit type, status like مؤكد/كشف أولي).
5. My Appointments ("مواعيدي"): date header, list of time-slotted appointments (time, patient name, status).
6. Account ("حسابي"): doctor photo, name, specialty, menu (المعلومات الشخصية، أوقات العمل، الإشعارات، المساعدة والدعم، تسجيل الخروج).
Bottom nav: الرئيسية، المواعيد، العيادات، الطابور، حسابي.

RULES:
- Every clinic shows a PHOTO; design a tasteful DEFAULT placeholder image for clinics with no photo.
- Show star ratings for BOTH clinics AND doctors.
- Booking is a QUEUE-NUMBER model (patients get a turn number), not fixed slots only.
- Keep it fully Arabic RTL with clean English equivalents where helpful.
- Deliver clean, consistent, reusable components (cards, buttons, badges, bottom nav, rating stars, avatars).

Make it look professional enough that a clinic would trust it for their patients.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/62faac8b-379e-457a-b7ea-bddcbbd4c53a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
