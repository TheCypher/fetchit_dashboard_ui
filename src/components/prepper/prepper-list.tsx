"use client";
import { Star } from "lucide-react";
import Image from "next/image";

interface ListItemProps {
  title: string;
  folder: string;
  lastViewed: string;
  creator: string;
  creatorImage: string;
}


const ListView: React.FC<ListItemProps> = ({ item }) => {
  return (
    <div
    //   key={index}
      className="flex items-center justify-between py-4 px-4 border-b hover:bg-gray-100"
    >
      <div className="w-12 flex justify-center mr-10">
        <Star size={20} className="shrink w-6 h-6" />
      </div>
      <div className="flex-1 flex items-right">
        <span>{item.title}</span>
      </div>
      <div className="flex-1 text-center">
        <span className="bg-gray-200 px-2 py-1 rounded">{item.folder}</span>
      </div>
      <div className="flex-1 text-right">{item.lastViewed}</div>
      <div className="flex-1 text-right flex items-center justify-end">
        <Image
          src={item.creatorImage}
          width={20}
          height={20}
          alt="User"
          className="rounded-full mr-3"
        />
        <span>{item.creator}</span>
      </div>
    </div>
  );
};
export default ListView;
