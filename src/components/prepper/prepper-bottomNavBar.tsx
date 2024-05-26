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
import { useState } from "react";

interface BottomNavProps {
  isGridView: boolean;
  setIsGridView: (isGridView: boolean) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ isGridView, setIsGridView }) => {
  const handleClick = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div className="w-[80%] flex items-center justify-between">
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
          <button
            className={`flex items-center text-purple-700 px-3 py-1 rounded ${
              isGridView ? "bg-white" : "bg-gray-300"
            } hover:${isGridView ? "bg-white" : "bg-purple-100"}`}
            onClick={() => setIsGridView(true)}
          >
            <LayoutGrid size={20} className="shrink w-6 h-6" />
            <span className="font-bold ml-1">Grid</span>
          </button>
          <button
            className={`flex items-center text-purple-700 px-3 py-1 ml-1 rounded ${
              !isGridView ? "bg-white" : "bg-gray-300"
            } hover:${!isGridView ? "bg-white" : "bg-purple-100"}`}
            onClick={() => setIsGridView(false)}
          >
            <List size={20} className="shrink w-6 h-6" />
            <span className="font-bold ml-1">List</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;

// export function BottomNav() {
//   // const [isGrid, setIsGrid] = useState(true);

//   const handleClick = () => {
//     setIsGrid(!isGrid);
//   };

//   return (
//     <div className="w-[80%] flex items-center justify-between">
//       <div className="flex items-center space-x-6">
//         <button className="flex items-center space-x-1 text-black-700">
//           <GalleryVerticalEnd size={20} className="shrink w-6 h-6" />
//           <span className="font-bold">All</span>
//         </button>
//         <button className="flex items-center space-x-1 text-purple-700 bg-purple-100 px-3 py-1 rounded">
//           <Clock size={20} className="shrink w-6 h-6" />
//           <span className="font-bold">Recently viewed</span>
//         </button>
//         <button className="flex items-center space-x-1 text-black-700">
//           <User size={20} className="shrink w-6 h-6" />
//           <span className="font-bold">Created by you</span>
//         </button>
//         <button className="flex items-center space-x-1 text-black-700">
//           <Star size={20} className="shrink w-6 h-6" />
//           <span className="font-bold">Favorites</span>
//         </button>
//       </div>
//       <div className="flex items-center space-x-2 p-3">
//         <button className="flex items-center text-black-700 mr-2">
//           <ArrowUpDown size={20} className="shrink w-6 h-6" />
//         </button>
//         <div className="flex bg-gray-300 py-1 px-2 rounded">
//           <button
//             className={`flex items-center text-purple-700 px-3 py-1 rounded hover:${
//               isGrid ? "bg-white" : "bg-purple-100"
//             } ${isGrid ? "bg-white" : "bg-gray-300"}`}
//             onClick={handleClick}
//           >
//             <LayoutGrid size={20} className="shrink w-6 h-6" />
//             <span className="font-bold ml-1">Grid</span>
//           </button>
//           <button
//             className={`flex items-center text-purple-700 px-3 py-1 ml-1 rounded hover:bg-white hover:${
//               !isGrid ? "bg-white" : "bg-purple-100"
//             } ${
//               !isGrid ? "bg-white" : "bg-gray-300"
//             }`}
//             onClick={handleClick}
//           >
//             <List size={20} className="shrink w-6 h-6" />
//             <span className="font-bold ml-1">List</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
