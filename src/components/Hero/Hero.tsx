"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [heroHeight, setHeroHeight] = useState("100vh");

  useEffect(() => {
    const header = document.querySelector("header");

    if (header) {
      const headerHeight = header.getBoundingClientRect().height;
      setHeroHeight(`calc(100vh - ${headerHeight}px)`);
    }
  }, []);

  return (
    <div
      className="hero"
      style={{
        height: heroHeight,
        backgroundImage: "url(/hero.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content md:text-center">
        <div className="max-w-7xl">
          <h1 className="mb-5 text-4xl md:text-6xl font-bold text-primary">
            Embark on an Unforgettable Anime Journey! 🌸 <br />
            あなたの冒険がここから始まる！
          </h1>
          <p className="mb-5 hidden md:block">
            Explore a vast universe of anime, from timeless classics to the
            latest seasonal hits. Track your favorites, create your watchlist,
            and dive into the stories that captivate millions worldwide.
            最高のアニメ体験を楽しもう！
          </p>
          <Link href="/anime" className="btn btn-lg btn-secondary">
            Explore Anime
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
