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
      className="relative group flex flex-col h-full gap-4 py-2 data-[collapsed=true]:py-2 bg-[#F0F1F5] lg:bg-[#F0F1F5] text-black w-[400px]"
    >
      {/* section 1 */}
      <div className="flex flex-col items-center justify-center ">
        {/*  div container for placing logo and text side by side*/}
        <div className="relative flex items-center">
          <div className="flex items-center">
            <Image src="/fetchit.png" alt="AI" width={50} height={50} />
            <span className="font-inter font-bold text-[#3E4EA1] ml-1 text-[37px] leading-[50px] tracking-wider">
              Fetchit
            </span>
          </div>
        </div>
        <button className="w-[250px] flex items-center justify-center px-6 py-2 bg-[#5661F6] text-white rounded-sm -md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4 mb-4">
          <span className="mr-2">+</span> New chat
        </button>
        <div className="w-full mt-1 border-t border-[#C3C9F4]"></div>
      </div>

      <div className="p-4 w-full max-w-md mx-auto">
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
      <div className="w-full mt-1 border-t border-[#C3C9F4]"></div>

      {/* section 3 */}
      <div className="">
        <div className="p-4 max-w-md mx-auto bg-gray-100">
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
              <Image src="/profile.png" width={20} height={20} alt="User" className="rounded-full mr-3"/>
              <span>Michael Davis</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" flex flex-col justify-between p-2 max-h-fit overflow-y-auto">
        <Button
          onClick={() => {
            router.push("/");
            // Clear messages
            setMessages([]);
          }}
          variant="ghost"
          className="flex justify-between w-full h-14 text-sm xl:text-lg font-normal items-center "
        >
          <div className="flex gap-3 items-center ">
            {!isCollapsed && !isMobile && (
              <Image
                src="/ollama.png"
                alt="AI"
                width={28}
                height={28}
                className="dark:invert hidden 2xl:block"
              />
            )}
            New chat
          </div>
          <SquarePen size={18} className="shrink-0 w-4 h-4" />
        </Button>

        <div className="flex flex-col pt-10 gap-2">
          <p className="pl-4 text-xs text-muted-foreground">Your chats</p>
          {localChats.length > 0 && (
            <div>
              {localChats.map(({ chatId, messages }, index) => (
                <Link
                  key={index}
                  href={`/${chatId.substr(5)}`}
                  className={cn(
                    {
                      [buttonVariants({ variant: "secondaryLink" })]:
                        chatId.substring(5) === selectedChatId,
                      [buttonVariants({ variant: "ghost" })]:
                        chatId.substring(5) !== selectedChatId,
                    },
                    "flex justify-between w-full h-14 text-base font-normal items-center "
                  )}
                >
                  <div className="flex gap-3 items-center truncate">
                    <div className="flex flex-col">
                      <span className="text-xs font-normal ">
                        {messages.length > 0 ? messages[0].content : ""}
                      </span>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex justify-end items-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MoreHorizontal size={15} className="shrink-0" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className=" ">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            className="w-full flex gap-2 hover:text-red-500 text-red-500 justify-start items-center"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Trash2 className="shrink-0 w-4 h-4" />
                            Delete chat
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader className="space-y-4">
                            <DialogTitle>Delete chat?</DialogTitle>
                            <DialogDescription>
                              Are you sure you want to delete this chat? This
                              action cannot be undone.
                            </DialogDescription>
                            <div className="flex justify-end gap-2">
                              <Button variant="outline">Cancel</Button>
                              <Button
                                variant="destructive"
                                onClick={() => handleDeleteChat(chatId)}
                              >
                                Delete
                              </Button>
                            </div>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </Link>
              ))}
            </div>
          )}
          {isLoading && <SidebarSkeleton />}
        </div>
      </div>

      <div className="justify-end px-2 py-2 w-full border-t">
        <UserSettings />
      </div> */}
    </div>
  );
}
