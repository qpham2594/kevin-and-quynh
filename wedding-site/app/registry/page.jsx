import Image from "next/image";
import Header from "../components/header";

export default function Registry() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <h1> Registry Page </h1>
      <div>
      <p>
        Link to Venmo or Zelle money.
      </p>
      </div>
    </main>
  );
}