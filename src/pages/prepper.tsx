import React from "react";
import Head from "next/head";
import TopNav from "@/components/prepper_components/TopNav";
import BottomNav from "@/components/prepper_components/BottomNav";
import GridView from "@/components/prepper_components/GridView";
import ListView from "@/components/prepper_components/ListView";

const ExamPrepper: React.FC = () => {
  return (
    <div className="">
      <TopNav />
      <BottomNav />
      <GridView/>
      <ListView/>
    </div>
  );
};

export default ExamPrepper;
