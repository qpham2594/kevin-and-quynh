import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <h1> Homepage </h1>
      <div>
      <p> Date & Time: March 29, 2025, 3PM <br/>
      Venue: Lovingston Winery, Lovingston, VA <br/>
      Countdown Clock <br/>
      Attire: Cocktail Attire <br/>
      Note: While we would love to have the little ones present, 
      we kindly request that no children will be present at the ceremony and reception due to space restriction, thank you. <br/>
      </p>
      </div>
      <div>
        <ul>
          <li> Ceremony: 3:00PM </li>
          <li> Reception: 4:30PM </li>
          <li> After Party: 8:30PM </li>
        </ul>
        <button href="#" className="button bg-green-500 text-white"> RSVP Here </button>
      </div>
    </main>
  );
}
