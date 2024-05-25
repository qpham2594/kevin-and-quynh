import Image from "next/image";
import Header from "../components/header";

export default function Venue() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <h1> About the Venue </h1>
      <div>
      <p>
        Information about the venue and parking here. 
      </p>
      </div>
    </main>
  );
}