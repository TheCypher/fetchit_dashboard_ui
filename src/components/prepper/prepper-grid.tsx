"use client";
import { Card } from "./prepper-card";
export function Grid() {
  return (
    <div className="w-[80%] min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        <Card />
        <Card />
        <Card />
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
