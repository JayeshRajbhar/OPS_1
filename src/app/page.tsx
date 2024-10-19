import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <Header />
    <Intro />
    <Featured />
    <Portfolio />
    </div>
  );
}
