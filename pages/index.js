import Head from "next/head";
import MusicDisc from "../components/MusicDisc";

export default function Home() {


  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <MusicDisc />
    </div>
  );
}
