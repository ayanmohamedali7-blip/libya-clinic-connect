import { createFileRoute } from '@tanstack/react-router';
import { MawaidiApp } from '@/components/mawaidi/app';
import { pageHead } from '@/components/mawaidi/data';
export const Route = createFileRoute('/')({head:()=>pageHead('home'),component:Index});
function Index(){return <MawaidiApp/>;}
