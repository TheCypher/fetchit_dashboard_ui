"use client";
import { Card } from "./prepper-card";
export function Grid() {
  return (
    <div className="w-[80%] min-h-screen p-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
  
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
