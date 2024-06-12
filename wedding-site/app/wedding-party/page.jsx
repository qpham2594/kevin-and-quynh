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
      <section id="our-team" className="py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                  <img src={member.image} alt={`Team Member ${index + 1}`} className="w-full rounded-full mb-4"/>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-700">Role: {member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

const teamMembers = [
  {
    image: "https://spacema-dev.com/elevate/assets/images/team/1.jpg",
    name: "John Doe",
    role: "Software Engineer"
  },
  {
    image: "https://spacema-dev.com/elevate/assets/images/team/4.jpg",
    name: "Jane Smith",
    role: "Graphic Designer"
  },
  {
    image: "https://spacema-dev.com/elevate/assets/images/team/3.jpg",
    name: "Alex Johnson",
    role: "Marketing Manager"
  },
  {
    image: "https://spacema-dev.com/elevate/assets/images/team/2.jpg",
    name: "Peter Johnson",
    role: "SEO Specialist"
  },
  {
    image: "https://spacema-dev.com/elevate/assets/images/team/5.jpg",
    name: "Emily Brown",
    role: "UX Designer"
  },
  {
    image: "https://spacema-dev.com/elevate/assets/images/team/6.jpg",
    name: "Michael Davis",
    role: "Frontend Developer"
  },
  {
    image: "https://spacema-dev.com/elevate/assets/images/team/7.jpg",
    name: "Sarah Johnson",
    role: "Content Writer"
  },
  {
    image: "https://spacema-dev.com/elevate/assets/images/team/8.jpg",
    name: "David Wilson",
    role: "Project Manager"
  }
];