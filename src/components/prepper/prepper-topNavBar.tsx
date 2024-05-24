"use client";
import {
  GalleryVerticalEnd,
  FolderInput,
  Plus,
  ChevronDown,
} from "lucide-react";

export function TopNav() {
  return (
    <div className="w-[80%] inline-block items-center justify-between p-4">
      <div className="flex pb-2 items-center space-x-2">
        <div className="flex items-center space-x-1">
          <GalleryVerticalEnd size={20} className="shrink w-6 h-6" />
          <h1 className="text-lg font-bold">All gammas</h1>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="bg-purple-600 text-white px-4 py-2 rounded flex items-center space-x-1">
          <Plus size={20} className="shrink w-6 h-6" />

          <span className="font-bold">Create new</span>
          <span className="bg-purple-700 text-xs px-3 py-1 rounded ">AI</span>
        </button>
        <div className="relative">
          <button className="bg-white text-black-700 px-4 py-2 rounded border border-gray-300 flex items-center">
            <Plus size={20} className="shrink w-6 h-6" />
            <span className="font-bold">New from blank </span>
          </button>
          {/* Dropdown can be implemented here */}
        </div>
        <div className="relative">
          <button className="bg-white text-black-700 px-4 py-2 rounded border border-gray-300 flex items-center">
            <FolderInput size={20} className="shrink w-6 h-6 mr-2" />
            <span className="font-bold">Import</span>
            <ChevronDown size={20} className="shrink w-6 h-6 ml-2" />
          </button>
          {/* Dropdown can be implemented here */}
        </div>
      </div>
    </div>
  );
}
