"use client"
import React, { useState } from 'react';
import { TopNav } from "@/components/prepper/prepper-topNavBar";
import BottomNav  from "@/components/prepper/prepper-bottomNavBar";
import Grid from "@/components/prepper/prepper-grid";

export default function Prepper() {
  const [isGridView, setIsGridView] = useState<boolean>(true);
  return (
    <main className="text-black bg-[#F0F1F5] min-h-screen flex flex-col items-center p-[1%]">
      <TopNav />
      <BottomNav isGridView={isGridView} setIsGridView={setIsGridView}/>
      <Grid isGridView={isGridView}/>
    </main>
  );
}
