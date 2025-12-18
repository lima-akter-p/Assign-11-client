import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function UpcomingBigContests() {
  const [timeLeft, setTimeLeft] = useState({});

  const targetDate = new Date("2025-12-25T23:59:59");

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="py-16 bg-linear-to-r from-purple-100 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-20">
          ⭐ Upcoming Big Contests
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Contest Card */}
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition">
            <img
              src="https://i.ibb.co.com/jZG86Xz7/logo-design.avif"
              alt="Contest"
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold text-gray-800">
                Grand Logo Design Championship
              </h3>

              <p className="text-gray-600 mt-1">
                Compete with top designers & win huge prizes!
              </p>

              {/* Countdown */}
              <div className="mt-4 flex gap-3 text-center">
                {["days", "hours", "minutes", "seconds"].map((unit) => (
                  <div
                    key={unit}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg"
                  >
                    <div className="text-xl font-bold">
                      {timeLeft[unit] ?? "00"}
                    </div>
                    <div className="text-sm uppercase">{unit}</div>
                  </div>
                ))}
              </div>

              <p className="mt-3 font-semibold text-purple-700">
                🏆 Prize: $1500
              </p>

              <Link to="/login">
                <button className="mt-4 w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-xl">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
           <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition">
            <img
              src="https://i.ibb.co.com/76M7BTF/web-marathon.jpg"
              alt="Contest"
              className="w-full h-45 object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold text-gray-800">
                Web Development Marathon
              </h3>

              <p className="text-gray-600 mt-1">
                Compete with top designers & win huge prizes!
              </p>

              {/* Countdown */}
              <div className="mt-4 flex gap-3 text-center">
                {["days", "hours", "minutes", "seconds"].map((unit) => (
                  <div
                    key={unit}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg"
                  >
                    <div className="text-xl font-bold">
                      {timeLeft[unit] ?? "00"}
                    </div>
                    <div className="text-sm uppercase">{unit}</div>
                  </div>
                ))}
              </div>

              <p className="mt-3 font-semibold text-purple-700">
                🏆 Prize: $2000
              </p>

              <Link to="/login">
                <button className="mt-6 w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-xl">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition">
            <img
              src="https://i.ibb.co.com/Z6MPcy5D/Ai.jpg"
              alt="Contest"
              className="w-full h-44 object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold text-gray-800">
                AI Art Generation Challenge
              </h3>

              <p className="text-gray-600 mt-1">
                Compete with top designers & win huge prizes!
              </p>

              {/* Countdown */}
              <div className="mt-4 flex gap-3 text-center">
                {["days", "hours", "minutes", "seconds"].map((unit) => (
                  <div
                    key={unit}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg"
                  >
                    <div className="text-xl font-bold">
                      {timeLeft[unit] ?? "00"}
                    </div>
                    <div className="text-sm uppercase">{unit}</div>
                  </div>
                ))}
              </div>

              <p className="mt-3 font-semibold text-purple-700">
                🏆 Prize: $1900
              </p>

              <Link to="/login">
                <button className="mt-4 w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-xl">
                  Register Now
                </button>
              </Link>
            </div>
          </div>

          {/* You can copy this card and create more upcoming contests */}
        </div>
      </div>
    </section>
  );
}
