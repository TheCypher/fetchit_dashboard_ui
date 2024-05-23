"use client";
import { Clock, User, Star, LayoutGrid, ArrowUpDown, GalleryVerticalEnd } from "lucide-react";

export function BottomNav() {
  return (
    <div className="w-[50%] flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1 text-gray-700">
        <GalleryVerticalEnd size={20} className="shrink w-6 h-6" />
          <span>All</span>
        </button>
        <button className="flex items-center space-x-1 text-purple-700 bg-purple-100 px-3 py-1 rounded">
        <Clock size={20} className="shrink w-6 h-6" />
          <span>Recently viewed</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-700">
        <User size={20} className="shrink w-6 h-6" />
          <span>Created by you</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-700">
        <Star size={20} className="shrink w-6 h-6"/>
          <span>Favorites</span>
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button className="flex items-center text-gray-700">
        <ArrowUpDown size={20} className="shrink w-6 h-6"/>
        </button>
        <button className="flex items-center text-purple-700 bg-purple-100 px-3 py-1 rounded">
        <LayoutGrid size={20} className="shrink w-6 h-6" />
          <span className="ml-1">Grid</span>
        </button>
        <button className="flex items-center text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          <span className="ml-1">List</span>
        </button>
      </div>
    </div>
  );
}
