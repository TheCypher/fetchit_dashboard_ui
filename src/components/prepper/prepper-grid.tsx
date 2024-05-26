"use client";
import { Card } from "./prepper-card";
import { Star } from "lucide-react";
import Image from "next/image";
interface GridProps {
  isGridView: boolean;
}

interface ListItemProps {
  title: string;
  folder: string;
  lastViewed: string;
  creator: string;
  creatorImage: string;
}

const Grid: React.FC<GridProps> = ({ isGridView }) => {
  const items: ListItemProps[] = [
    {
      title: "Gamma Tips & Tricks",
      folder: "Private",
      lastViewed: "1 day ago",
      creator: "Mohammad Farazuddin",
      creatorImage: "/path/to/image.jpg", // Replace with the actual path to the image
    },
    {
      title: "Gamma Tips & Tricks",
      folder: "Private",
      lastViewed: "1 day ago",
      creator: "Mohammad Farazuddin",
      creatorImage: "/path/to/image.jpg", // Replace with the actual path to the image
    },
    {
      title: "Gamma Tips & Tricks",
      folder: "Private",
      lastViewed: "1 day ago",
      creator: "Mohammad Farazuddin",
      creatorImage: "/path/to/image.jpg", // Replace with the actual path to the image
    },
    // Add more items if needed
  ];
  return (
    <div className="w-[80%] min-h-screen">
      {/* <BottomNav /> */}
      {isGridView ? (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-6`}
        >
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
      ) : (
        <div className="w-[100%] flex flex-col w-full">
          <div className="flex items-center justify-between py-2 px-4 border-b text-gray-500 text-sm">
            <div className="w-12 mr-10"></div>
            <div className="flex-1">Title</div>
            <div className="flex-1 text-center">Folders</div>
            <div className="flex-1 text-right">Last viewed</div>
            <div className="flex-1 text-right">Creator</div>
          </div>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-4 px-4 border-b hover:bg-gray-100"
            >
              <div className="w-12 flex justify-center mr-10">
                <Star size={20} className="shrink w-6 h-6" />
              </div>
              <div className="flex-1 flex items-right">
                <span>{item.title}</span>
              </div>
              <div className="flex-1 text-center">
                <span className="bg-gray-200 px-2 py-1 rounded">
                  {item.folder}
                </span>
              </div>
              <div className="flex-1 text-right">{item.lastViewed}</div>
              <div className="flex-1 text-right flex items-center justify-end">
                <Image
                  src="/profile.png"
                  width={20}
                  height={20}
                  alt="User"
                  className="rounded-full mr-3"
                />
                <span>{item.creator}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Grid;

// export function Grid() {
//   return (
//     <div className="w-[80%] min-h-screen">
//       {/* <BottomNav /> */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-6">
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </div>
//     </div>
//   );
// }
