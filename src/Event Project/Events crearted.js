import React from "react";
import Img from "../Images/Music.jpg";
import Img1 from "../Images/slider image 2.jpg";
import Img2 from "../Images/Tech Confrenece.jpg";
import Img3 from "../Images/Art.jpg";
import Img4 from "../Images/Start up meet.jpg";
import Img5 from "../Images/Marketing.jpg";

import CreateEvent from "./Event_total";

const CreatedEvent = () => {
  const Events = [
    {
      icon: Img,
      htext: "Music Concert",
      ptext: "Join us an evening Live Music and Entertainment",
      date: "25 May 2025",
    },
    {
      icon: Img1,
      htext: "Wedding",
      ptext: "Celebrate the Wedding with joy and Love",
      date: "20 Aug 2025",
    },
    {
      icon: Img2,
      htext: "Food Related",
      ptext: "Enjoy a grand wedding feast with delicious, traditional Indian cuisine.",
      date: "23 Sept 2025",
    },
    {
      icon: Img4,
      htext: "Social Event",
      ptext: "Celebrate community, connection, and joy at our vibrant social event.",
      date: "31 Oct 2025",
    },
    {
        icon: Img3,
        htext: "Art Exhibition",
        ptext: "Explore the latest art pieces from various artists",
        date: "31 Oct 2025",
      },
      {
        icon: Img5,
        htext: "Marketing Event",
        ptext: "Discover strategies, trends, and insights at our powerful marketing event",
        date: "31 Oct 2025",
      },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-start pl-2 sm:pl-4 md:pl-6 lg:pl-10">Upcoming Events</h2>
      <div className="flex flex-wrap gap-3 justify-evenly cursor-pointer">
        {Events.map((item, index) => (
          <CreateEvent
            key={index}
            url={item.icon}
            heading={item.htext}
            Desc={item.ptext}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default CreatedEvent;
