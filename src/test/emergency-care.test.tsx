import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CareGuide } from '@/components/mawaidi/care-guide';

const { call } = vi.hoisted(() => ({ call: vi.fn() }));
vi.mock('@tanstack/react-start', () => ({ useServerFn: () => call }));
vi.mock('@/lib/care.functions', () => ({ suggestCare: vi.fn() }));
const recommendation = { urgency: 'emergency', specialty: 'الطوارئ', specialtyEnglish: 'Emergency Medicine', explanation: 'الأعراض تستدعي تقييماً عاجلاً.', nextStep: 'اطلب الإسعاف الآن.', clarification: null, clinicIds: [] };

describe('Automatic emergency screen', () => {
 beforeEach(() => { call.mockReset(); Element.prototype.scrollIntoView = vi.fn(); });
 async function submit() {
  fireEvent.change(screen.getByLabelText('ما الذي يقلقك صحياً؟'), { target: { value: 'ألم شديد في الصدر مع صعوبة في التنفس' } });
  fireEvent.click(screen.getByRole('checkbox'));
  await act(async () => { fireEvent.click(screen.getByRole('button', { name: 'اقتراح التخصص والمصحة' })); });
 }
 it('replaces the form, focuses urgent guidance and resets without resending', async () => {
  call.mockResolvedValue({ ok: true, recommendation });
  render(<CareGuide onClinic={vi.fn()}/>);
  await submit();
  await screen.findByRole('region', { name: 'شاشة الطوارئ' });
  expect(screen.queryByLabelText('ما الذي يقلقك صحياً؟')).toBeNull();
  expect(screen.queryByText('مصحات تناسب التخصص')).toBeNull();
  await waitFor(() => expect(document.activeElement).toBe(screen.getByRole('heading', { name: 'اطلب رعاية طارئة الآن' })));
  fireEvent.click(screen.getByRole('button', { name: 'العودة لوصف القلق الصحي' }));
  expect(screen.getByLabelText('ما الذي يقلقك صحياً؟')).toHaveValue('');
  expect(call).toHaveBeenCalledTimes(1);
 });
 it('keeps ordinary recommendations in the care form', async () => {
  call.mockResolvedValue({ ok: true, recommendation: { ...recommendation, urgency: 'routine', clinicIds: ['smile'] } });
  render(<CareGuide onClinic={vi.fn()}/>);
  await submit();
  await screen.findByRole('region', { name: 'اقتراح الرعاية' });
  expect(screen.queryByRole('region', { name: 'شاشة الطوارئ' })).toBeNull();
  expect(screen.getByLabelText('ما الذي يقلقك صحياً؟')).toBeInTheDocument();
 });
});