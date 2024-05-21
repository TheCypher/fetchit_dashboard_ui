"use client";

import Link from "next/link";
import { MoreHorizontal, SquarePen, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Message } from "ai/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import SidebarSkeleton from "./sidebar-skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import UserSettings from "./user-settings";
import { useLocalStorageData } from "@/app/hooks/useLocalStorageData";
import { ScrollArea, Scrollbar } from "@radix-ui/react-scroll-area";
import PullModel from "./pull-model";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { TrashIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
interface SidebarProps {
  isCollapsed: boolean;
  messages: Message[];
  onClick?: () => void;
  isMobile: boolean;
  chatId: string;
  setMessages: (messages: Message[]) => void;
}

export function Sidebar({
  messages,
  isCollapsed,
  isMobile,
  chatId,
  setMessages,
}: SidebarProps) {
  const [localChats, setLocalChats] = useState<
    { chatId: string; messages: Message[] }[]
  >([]);
  const localChatss = useLocalStorageData("chat_", []);
  const [selectedChatId, setSselectedChatId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (chatId) {
      setSselectedChatId(chatId);
    }

    setLocalChats(getLocalstorageChats());
    const handleStorageChange = () => {
      setLocalChats(getLocalstorageChats());
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const getLocalstorageChats = (): {
    chatId: string;
    messages: Message[];
  }[] => {
    const chats = Object.keys(localStorage).filter((key) =>
      key.startsWith("chat_")
    );

    if (chats.length === 0) {
      setIsLoading(false);
    }

    // Map through the chats and return an object with chatId and messages
    const chatObjects = chats.map((chat) => {
      const item = localStorage.getItem(chat);
      return item
        ? { chatId: chat, messages: JSON.parse(item) }
        : { chatId: "", messages: [] };
    });

    // Sort chats by the createdAt date of the first message of each chat
    chatObjects.sort((a, b) => {
      const aDate = new Date(a.messages[0].createdAt);
      const bDate = new Date(b.messages[0].createdAt);
      return bDate.getTime() - aDate.getTime();
    });

    setIsLoading(false);
    return chatObjects;
  };

  const handleDeleteChat = (chatId: string) => {
    localStorage.removeItem(chatId);
    setLocalChats(getLocalstorageChats());
  };

  return (
    <div
      data-collapsed={isCollapsed}
      className="justify-center relative group flex flex-col h-screen overflow-auto py-2 data-[collapsed=true]:py-2 bg-[#F0F1F5] text-black w-full max-w-[300px] lg:max-w-[357px]"
    >
      {/* section 1 - Always at the top */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center">
          <Image src="/fetchit.png" alt="Fetchit logo" width={50} height={50} />
          <span className="mt-[15px] font-inter font-bold text-[#3E4EA1] ml-1 text-[37px] leading-[50px] tracking-wider">
            Fetchit
          </span>
        </div>
        <button className="w-full max-w-[250px] flex items-center justify-center px-6 py-2 bg-[#5661F6] text-white rounded-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4 mb-4">
          <span className="mr-2">+</span> New chat
        </button>
        <div className="w-full border-t border-[#C3C9F4]"></div>
      </div>

      {/* section 2 - Dynamic content that grows */}
      <div className="flex-grow overflow-auto p-4">
        <div className="flex justify-between items-center pb-2">
          <h2 className="text-gray-600">Your Conversations</h2>
          <a href="#" className="text-[#5661F6]">
            Clear All
          </a>
        </div>
        <ul className="mt-4 space-y-2">
          <li className="flex justify-between items-center py-2 px-3  rounded ">
            <span>Create Html Game Environme...</span>
          </li>
          <li className="flex justify-between items-center py-2 px-3  rounded ">
            <span>Factor X^100-1</span>
          </li>
          <li className="flex justify-between items-center py-2 px-3  rounded ">
            <span>What Is UI UX Design?</span>
          </li>
          <li className="flex justify-between items-center py-2 px-3  rounded ">
            <span>What Is The Thyroid Gland?</span>
          </li>
          <li className="flex justify-between items-center py-2 px-3  rounded ">
            <span>What Are The Effects...?</span>
          </li>
          <li className="flex justify-between items-center py-2 px-3 bg-[#E0E7FF] rounded ">
            <span className="text-[#5661F6]">Who Is George Washing...?</span>
            <div className="flex space-x-2">
              <button className="text-gray-500 hover:text-gray-700">
                <Trash2 className="shrink-0 w-4 h-4" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <SquarePen size={18} className="shrink-0 w-4 h-4" />
              </button>
            </div>
          </li>
          <li className="flex justify-between items-center py-2 px-3 rounded ">
            <span>How Chat GPT Work?</span>
          </li>
        </ul>
      </div>
      <div className="w-full border-t border-[#C3C9F4]"></div>

      {/* section 3 - Pinned to the bottom */}
      <div className="p-4 bg-gray-100 mt-auto">
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-blue-500">✨</span>
            <div>
              <h2 className="text-lg">Upgrade To Try Pro</h2>
              <p className="text-gray-500 text-sm">
                Higher Accuracy, Smarter AI And More!
              </p>
            </div>
          </div>
          <button className="mt-3 px-4 py-2 bg-[#C3C9F4] text-blue-700 rounded-full hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Learn More
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center p-3 border border-[#6679BF] rounded-full">
            <span className="mr-3 text-blue-500">📅</span>
            <span>Calendar</span>
          </div>
          <div className="flex items-center p-3 border border-[#6679BF] rounded-full">
            <span className="mr-3 text-blue-500">⚙️</span>
            <span>Settings</span>
          </div>
          <div className="flex items-center p-3 border border-[#6679BF] rounded-full">
            <Image
              src="/profile.png"
              width={20}
              height={20}
              alt="User"
              className="rounded-full mr-3"
            />
            <span>Michael Davis</span>
          </div>
        </div>
      </div>
    </div>
  );
}
