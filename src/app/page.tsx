import DailyRewards from "@/components/DailyRewards";
import Download from "@/components/Download";
import Featured from "@/components/Featured";
import GetStarted from "@/components/GetStarted";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import LatestNews from "@/components/LatestNews";
import Portfolio from "@/components/Portfolio";
import Possibilities from "@/components/Possibilities";
import Rewards from "@/components/Rewards";
import Movingcards from "@/components/movingcards";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <Header />
    <Intro />
    <Featured />
    <Portfolio />
    <Rewards />
    <DailyRewards />
    <Possibilities />
    <Movingcards />
    <GetStarted />
    <LatestNews />
    <Download />
    </div>
  );
}
