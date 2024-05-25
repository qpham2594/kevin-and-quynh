import Image from "next/image";
import Header from "../components/header";

export default function Travel() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header/>
      <h1> Information on how to get there and where to stay here </h1>
      <div className="p-4">
            <p>Directions and Lodging options here.</p>
            <p><strong>LODGING:</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                    <strong>Red Hill Bed and Breakfast</strong><br/>
                    Lovingly restored historic home<br/>
                    Located about 2 minutes from Lovingston Winery<br/>
                    Incredible breakfasts cooked by Herbert, an ex-swiss chef<br/>
                    <a href="https://redhillbedandbreakfast.com/" target="_blank" rel="noopener noreferrer">https://redhillbedandbreakfast.com/</a>
                </li>
                <li>
                    <strong>Ms Maria’s Place</strong><br/>
                    Sleeps 6<br/>
                    Great deal<br/>
                    Located about 2 minutes from Lovingston Winery<br/>
                    <a href="https://www.airbnb.com/rooms/49716421?source_impression_id=p3_1659715288_zWolQ%2FH1wFZhtp9h" target="_blank" rel="noopener noreferrer">Airbnb Listing</a>
                </li>
                <li>
                    <strong>Freshwater Field Cabin</strong><br/>
                    Sleeps 8 for a low price<br/>
                    Located minutes from the winery<br/>
                    Nice mountain views with cows and horses on the property<br/>
                    <a href="https://www.airbnb.com/rooms/49369093?guests=1&adults=1&s=67&unique_share_id=38377c53-9ba8-430b-b758-973cd1f8b577" target="_blank" rel="noopener noreferrer">Airbnb Listing</a>
                </li>
                <li>
                    <strong>Treetops Lodge</strong><br/>
                    Beautiful cabin with a kind owner who is familiar with the area and Lovingston Winery<br/>
                    Can sleep 9 guests<br/>
                    Arcade games, fire pit, large deck<br/>
                    <a href="https://www.airbnb.com/rooms/950575973276142565?source_impression_id=p3_1700487967_cAErNJwY9zBoNtYY" target="_blank" rel="noopener noreferrer">Airbnb Listing</a>
                </li>
                <li>
                    <strong>The Elston Inn</strong><br/>
                    I have gotten continued positive feedback from past couples about their top-tier customer service<br/>
                    Has over 30 rooms, so this is an easy option if you are using bus service<br/>
                    Located at Sweet Briar College<br/>
                    <a href="https://www.sbc.edu/elston-inn/" target="_blank" rel="noopener noreferrer">https://www.sbc.edu/elston-inn/</a><br/>
                    434-381-6207
                </li>
                <li>
                    <strong>Mountain View Mini Farm</strong><br/>
                    Located on route 151 (a hub for wineries, breweries, distilleries, and restaurants)<br/>
                    Great mountain views and mini horses<br/>
                    Owned and operated by our family<br/>
                    <a href="https://www.airbnb.com/rooms/47859254?source_impression_id=p3_1659915588_qteCuDqhiwkSKvJg" target="_blank" rel="noopener noreferrer">Airbnb Listing</a>
                </li>
                <li>
                    <strong>Farmhouse with heated pool less than 10 minutes away</strong><br/>
                    Sleeps 14<br/>
                    Use code LOVINGSTON for 10% off and book directly through the link below to avoid Airbnb fees<br/>
                    Pet friendly<br/>
                    <a href="https://book.virginiastr.com/" target="_blank" rel="noopener noreferrer">https://book.virginiastr.com/</a>
                </li>
                <li>
                    <strong>Harmony Hill Bed and Breakfast</strong><br/>
                    <a href="mailto:innkeepers@harmony-hill.com">innkeepers@harmony-hill.com</a><br/>
                    Cozy cabin feel with multiple bedrooms<br/>
                    I think they are for sale so I recommend inquiring about their future plans
                </li>
                <li>
                    <strong>Mima’s Mountain House</strong><br/>
                    Sleeps up to 10<br/>
                    Great price<br/>
                    <a href="https://www.airbnb.com/rooms/623783448242146621?source_impression_id=p3_1660941181_pTbZEH70FVZKPhX6" target="_blank" rel="noopener noreferrer">Airbnb Listing</a>
                </li>
                <li>
                    <strong>Mountain Haven Cottage</strong><br/>
                    New build with amazing mountain views<br/>
                    Mention “MountainVino” for a 10% discount<br/>
                    They have concierge recommendations for a shuttle service to and from Lovingston<br/>
                    <a href="https://www.airbnb.com/rooms/929840423544360561?guests=1&adults=1&s=67&unique_share_id=c29fc6f5-1b06-4b19-a5af-23629dbe2a9a" target="_blank" rel="noopener noreferrer">Airbnb Listing</a>
                </li>
            </ul>
        </div>
    </main>
  );
}