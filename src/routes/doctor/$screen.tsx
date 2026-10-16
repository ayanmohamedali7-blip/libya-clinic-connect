import { createFileRoute } from '@tanstack/react-router';
import { MawaidiApp } from '@/components/mawaidi/app';
import { pageHead } from '@/components/mawaidi/data';
export const Route = createFileRoute('/doctor/$screen')({head:({params})=>pageHead(params.screen,true),component:DoctorScreen});
function DoctorScreen(){const {screen}=Route.useParams();return <MawaidiApp screen={screen} doctor/>;}
