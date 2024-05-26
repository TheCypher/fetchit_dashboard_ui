"use client";
import Image from "next/image";
import { Lock } from "lucide-react";

interface ItemProps {
  title: string;
  folder: string;
  lastViewed: string;
  creator: string;
  creatorImage: string;
}

const Card: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="w-[250px] rounded overflow-hidden shadow-lg bg-white">
      <div className="relative w-full h-48">
        <Image
          src={item.creatorImage}
          alt="Book cover"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-4">
        <h2 className="font-bold text-xl my-3">{item.title}</h2>
      </div>
      <div className="px-4 pb-2">
        <span className="inline-flex items-center bg-black-200 rounded-full px-3 py-1 font-semibold mr-2 mb-2">
          <Lock size={20} className="shrink-0 w-3 h-3 mr-1" /> Private
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
          Created by you
        </span>
        <span className="block text-gray-600 text-sm">Last viewed {item.lastViewed}</span>
      </div>
    </div>
  );
};

export default Card;

// export function Card() {
//   return (
//     <div className="w-[250px] rounded overflow-hidden shadow-lg bg-white">
//       <div className="relative w-full h-48">
//         <Image
//           src="/user.jpg"
//           alt="Book cover"
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//       <div className="px-4">
//         <h2 className="font-bold text-xl my-3">
//           Introduction to "The Joy Luck Club"
//         </h2>
//       </div>
//       <div className="px-4 pb-2">
//         <span className="inline-flex items-center bg-black-200 rounded-full px-3 py-1 font-semibold mr-2 mb-2">
//           <Lock size={20} className="shrink-0 w-3 h-3 mr-1" /> Private
//         </span>
//         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
//           Created by you
//         </span>
//         <span className="inline-block text-gray-600 text-sm">
//           Last viewed 1 minute ago
//         </span>
//       </div>
//     </div>
//   );
// }
