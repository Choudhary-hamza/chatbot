import "../styling/resource.css";
import ResourcesComponent from "./Resources-component";
import book from "../assets/book.jpg";
import doctor from "../assets/doctor.jpg";
import yoga from "../assets/yoga.jpg";
import man from "../assets/man.jpg";
import phone from "../assets/phone.jpg";
import hand from "../assets/hand.jpg";
const Resource = () => {
  const resource = [
    {
      image: hand,
      id: 1,
      name: "Self-Help Articles",
    },
    {
      image: doctor,
      id: 2,
      name: "Therapist Listings",
    },
    {
      image: yoga,
      id: 3,
      name: "Meditation Guides",
    },
    { image: man, id: 4, name: "Cognitive Exercises" },
    {
      image: phone,
      id: 6,
      name: "Crisis Hotlines",
    },
    {
      image: book,
      id: 8,
      name: "Reading Materials",
    },
  ];
  return (
    <div className="resource_main">
      {resource.map((data) => {
        return <ResourcesComponent data={data} key={data.id} />;
      })}
    </div>
  );
};
export default Resource;
