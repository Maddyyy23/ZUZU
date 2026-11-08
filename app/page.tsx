import Book from "@/componets/Bokk";
import DragPlane from "@/componets/DragPlane";
import HowerImage from "@/componets/HowerImage";
import Scene from "@/componets/Scene";
import { Section } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] w-full overflow-hidden flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Book />
      {/* <DragPlane /> */}
     
         {/* <Scene/> */}
         {/* <HowerImage/> */}
      
     
     
    </div>
  );
}
