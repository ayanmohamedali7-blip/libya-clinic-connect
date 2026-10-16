import { createFileRoute } from '@tanstack/react-router';
import { MawaidiApp } from '@/components/mawaidi/app';
import { pageHead } from '@/components/mawaidi/data';
export const Route = createFileRoute('/$screen')({head:({params})=>pageHead(params.screen),component:PatientScreen});
function PatientScreen(){const {screen}=Route.useParams();return <MawaidiApp screen={screen}/>;}
