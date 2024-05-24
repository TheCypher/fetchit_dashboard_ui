"use client";
import {
  Clock,
  User,
  Star,
  LayoutGrid,
  ArrowUpDown,
  GalleryVerticalEnd,
  List,
} from "lucide-react";
export function BottomNav() {
  return (
    <div className="w-[80%] flex items-center justify-between py-4 px-7">
      <div className="flex items-center space-x-6">
        <button className="flex items-center space-x-1 text-black-700">
          <GalleryVerticalEnd size={20} className="shrink w-6 h-6" />
          <span className="font-bold">All</span>
        </button>
        <button className="flex items-center space-x-1 text-purple-700 bg-purple-100 px-3 py-1 rounded">
          <Clock size={20} className="shrink w-6 h-6" />
          <span className="font-bold">Recently viewed</span>
        </button>
        <button className="flex items-center space-x-1 text-black-700">
          <User size={20} className="shrink w-6 h-6" />
          <span className="font-bold">Created by you</span>
        </button>
        <button className="flex items-center space-x-1 text-black-700">
          <Star size={20} className="shrink w-6 h-6" />
          <span className="font-bold">Favorites</span>
        </button>
      </div>
      <div className="flex items-center space-x-2 p-3">
        <button className="flex items-center text-black-700 mr-2">
          <ArrowUpDown size={20} className="shrink w-6 h-6" />
        </button>
        <div className="flex bg-gray-300 py-1 px-2 rounded">
          <button className="flex items-center text-purple-700 px-3 py-1 rounded bg-white">
            <LayoutGrid size={20} className="shrink w-6 h-6" />
            <span className="font-bold ml-1">Grid</span>
          </button>
          <button className="flex items-center text-black-700 ml-2">
            <List size={20} className="shrink w-6 h-6" />
            <span className="font-bold ml-1">List</span>
          </button>
        </div>
      </div>
    </div>
  );
}
