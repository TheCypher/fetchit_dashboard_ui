import { TopNav } from "@/components/prepper/prepper-topNavBar";
import { BottomNav } from "@/components/prepper/prepper-bottomNavBar";
import { Grid } from "@/components/prepper/prepper-grid";
export default function Prepper() {
  return (
    <main className="text-black bg-[#F0F1F5] flex h-[calc(100dvh)] flex-col items-center ">
      <TopNav />
      <BottomNav/>
      <Grid/>
    </main>
  );
}
