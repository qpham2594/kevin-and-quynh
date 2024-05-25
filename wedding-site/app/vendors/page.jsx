import Image from "next/image";
import Header from "../components/header";

export default function Vendors() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <h1> Little Blurbs on Vendors </h1>
      <div>
      <p>
        Vendors and Photographer Info Here.
      </p>
      </div>
    </main>
  );
}