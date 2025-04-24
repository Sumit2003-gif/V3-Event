import React from "react";

const Video = () => {
  const links = [
    { url: "https://www.youtube.com/embed/b3WuU-ME118?si=CRQ_1xN1OnIzV5-n" },
    { url: "https://www.youtube.com/embed/Rt-kyZEyUlY?si=ReW1il3tdb90k58R" },
    { url: "https://www.youtube.com/embed/v4HFFfsO4u4?si=730_g69pvAFU47BS" },
    { url: "https://www.youtube.com/embed/NBRp2xY3EP4?si=HJlCSOM3GSUCsg-F" }
  ];

  return (<div className="grid ">
    <h2 className="text-center text-lg sm:text-xl md:text-2xl font-nunito  opacity-90 p-3 pt-5">Some Spectacular Videos</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5 md:mb-16 p-4 ">
        
      {links.map((item, index) => (
        <div key={index} className="relative w-full pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-72 h-56 rounded-xl shadow-md"
            src={item.url}
            title={`YouTube video ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
    <div className="flex justify-center items-center pb-6">
    <button className="border-2 border-[#072320] w-28 py-4 text-slate-200 font-bold bg-[#072320]">Veiw more</button>
    </div>
    </div>  
  );
};

export default Video;
