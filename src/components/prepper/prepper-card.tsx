"use client";
import Image from "next/image";
export function Card() {
  return (
    <div className="w-[275px] rounded overflow-hidden shadow-lg bg-white">
      <div className="relative w-full h-48">
        <Image
          src="/user.jpg"
          alt="Book cover"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-4">
        <h2 className="font-bold text-xl mb-2">
          Introduction to "The Joy Luck Club"
        </h2>
      </div>
      <div className="px-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Created by you
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Private
        </span>
        <span className="inline-block text-gray-600 text-sm">Last viewed 1 minute ago</span>
      </div>
    </div>
  );
}
