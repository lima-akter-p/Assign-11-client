import React from 'react';

const WinnerAd = () => {
     const winners = [
    {
      name: "Ayesha Khan",
      prize: "$500",
      contest: "Photography Contest",
      image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    },
    {
      name: "Rahim Uddin",
      prize: "$300",
      contest: "Graphic Design Contest",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      name: "Sneha Mitra",
      prize: "$250",
      contest: "Writing Challenge",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
    {
      name: "Mahir Hasan",
      prize: "$450",
      contest: "App Development Contest",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      name: "Jannatul Mawa",
      prize: "$350",
      contest: "UI/UX Challenge",
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    },
    {
      name: "Ishaan Sheikh",
      prize: "$200",
      contest: "Article Writing Contest",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    },
  ];
    return (
         <div className="my-20 bg-linear-to-r from-violet-600 to-indigo-600 text-white py-16 px-6 rounded-3xl shadow-xl">

      <h2 className="text-center text-4xl font-extrabold mb-3">
        🏆 Recent Winners
      </h2>
      <p className="text-center text-lg opacity-90 max-w-2xl mx-auto mb-10">
        Your success story begins with participation. Meet our shining stars!
      </p>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-10 mb-12">
        <div className="text-center">
          <h3 className="text-4xl font-bold">150+</h3>
          <p className="opacity-90">Total Winners</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold">$25,000+</h3>
          <p className="opacity-90">Prize Money Given</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold">60+</h3>
          <p className="opacity-90">Active Contests</p>
        </div>
      </div>

      {/* Winner Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        {winners.map((win, index) => (
          <div
            key={index}
            className="
              bg-white text-gray-900 rounded-2xl overflow-hidden 
              shadow-lg hover:shadow-2xl transition-all duration-300 
              hover:-translate-y-2 hover:scale-[1.02]
            "
          >
            <img
              src={win.image}
              alt={win.name}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-violet-700">
                {win.name}
              </h3>

              <p className="text-gray-700 mt-1">{win.contest}</p>

              <p className="mt-3 text-lg font-semibold text-indigo-600">
                Prize: {win.prize}
              </p>
            </div>
          </div>
        ))}

      </div>

      <p className="text-center mt-12 text-xl font-medium opacity-95">
        🚀 Keep participating — You could be our next winner!
      </p>
    </div>
    );
};

export default WinnerAd;