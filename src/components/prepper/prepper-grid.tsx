"use client";
import { Card } from "./prepper-card";
import { BottomNav } from "./prepper-bottomNavBar";

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
        <div className="w-[100%] flex flex-col w-full max-w-4xl mx-auto mt-10">
          <div className="flex items-center justify-between py-2 px-4 border-b text-gray-500 text-sm">
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
              <div className="flex-1 flex items-center">
                <span className="mr-2">⭐️</span>
                <span>{item.title}</span>
              </div>
              <div className="flex-1 text-center">
                <span className="bg-gray-200 px-2 py-1 rounded">
                  {item.folder}
                </span>
              </div>
              <div className="flex-1 text-right">{item.lastViewed}</div>
              <div className="flex-1 text-right flex items-center justify-end">
                <img
                  src={item.creatorImage}
                  alt={item.creator}
                  className="w-6 h-6 rounded-full mr-2"
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
