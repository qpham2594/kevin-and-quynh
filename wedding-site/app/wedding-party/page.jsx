import Image from "next/image";
import Header from "../components/header";

export default function WeddingParty() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <h1> Little Blurbs and Pics of Wedding Party </h1>
      <div>
      <p>
        Photos and little description about each person in wedding party, with officiant, and flower ladies.
      </p>
      </div>
    </main>
  );
}