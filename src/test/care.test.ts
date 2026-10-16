import {describe,it,expect} from 'vitest';
import {careInput,normalizeRecommendation,type CareRecommendation} from '@/lib/care-contract';
const base:CareRecommendation={urgency:'routine',specialty:'الأسنان',specialtyEnglish:'Dentistry',explanation:'توجيه أولي',nextStep:'راجع الطبيب',clarification:null,clinicIds:['smile','smile','hayat']};
describe('Care safety contract',()=>{
 it('requires consent and a bounded description',()=>{expect(careInput.safeParse({concern:'أشعر بألم في الأسنان منذ يومين',consent:false}).success).toBe(false);expect(careInput.safeParse({concern:'قصير',consent:true}).success).toBe(false);expect(careInput.safeParse({concern:'x'.repeat(1501),consent:true}).success).toBe(false);});
 it('removes clinic suggestions for emergencies and uncertainty',()=>{expect(normalizeRecommendation({...base,urgency:'emergency'}).clinicIds).toEqual([]);expect(normalizeRecommendation({...base,urgency:'unclear'}).clinicIds).toEqual([]);});
 it('deduplicates clinic recommendations',()=>{expect(normalizeRecommendation(base).clinicIds).toEqual(['smile','hayat']);});
});
