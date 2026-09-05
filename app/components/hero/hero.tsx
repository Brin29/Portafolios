"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import hero from "@/app/data/hero.json";
// import { RobotCanva } from "../render/RobotCanva";

export function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(container);

      // Initial placement: everything starts outside the viewport.
      // Final resting positions are never touched; only transforms animate.
      gsap.set(q("[data-hero-title]"), { xPercent: -120, autoAlpha: 0 });
      gsap.set(q("[data-hero-main]"), { yPercent: 120, autoAlpha: 0 });
      gsap.set(q("[data-hero-robot]"), { scale: 1.3, autoAlpha: 0 });
      gsap.set(q("[data-hero-third]"), {
        xPercent: -120,
        yPercent: 120,
        autoAlpha: 0,
      });
      gsap.set(q("[data-hero-fourth]"), {
        xPercent: 120,
        yPercent: -120,
        autoAlpha: 0,
      });
      gsap.set(q("[data-hero-fifth]"), { yPercent: 120, autoAlpha: 0 });
      gsap.set(q("[data-hero-content]"), { autoAlpha: 0 });
      gsap.set(q("[data-hero-line]"), { yPercent: 120, autoAlpha: 0 });
      gsap.set(q("[data-hero-shape]"), { autoAlpha: 0, yPercent: 10 });
      gsap.set(q("[data-hero-scan]"), { autoAlpha: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // The giant main image slides up from the bottom edge.
      tl.to(q("[data-hero-main]"), { yPercent: 0, autoAlpha: 1, duration: 1.2 })
        // The vertical title rail enters from the left.
        .to(
          q("[data-hero-title]"),
          { xPercent: 0, autoAlpha: 1, duration: 1.1 },
          "-=1.0",
        )
        // Content lines stack up from below, one by one.
        .to(q("[data-hero-content]"), { autoAlpha: 1, duration: 0.1 })
        .to(
          q("[data-hero-line]"),
          { yPercent: 0, autoAlpha: 1, duration: 0.9, stagger: 0.16 },
          "<",
        )
        // Secondary images dart in from each of their outer corners.
        .to(
          q("[data-hero-third]"),
          { xPercent: 0, yPercent: 0, autoAlpha: 1, duration: 1 },
          "-=0.6",
        )
        .to(
          q("[data-hero-fourth]"),
          { xPercent: 0, yPercent: 0, autoAlpha: 1, duration: 1 },
          "<",
        )
        .to(
          q("[data-hero-fifth]"),
          { yPercent: 0, autoAlpha: 1, duration: 1 },
          "<",
        )
        // The 3D robot rises from the far background last, once everything else is in place.
        .to(
          q("[data-hero-robot]"),
          { scale: 1, autoAlpha: 1, duration: 1.4, ease: "power2.out" },
          "-=0.4",
        )
        // Blueprint figures / HUD deco lock in after the payload lands.
        .to(
          q("[data-hero-shape]"),
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.12,
          },
          "-=1",
        )
        .to(q("[data-hero-scan]"), { autoAlpha: 1, duration: 0.8 }, "<");
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-dvh overflow-hidden bg-background text-foreground"
    >
      {/* Vertical title: full-height left rail */}
      <div className="absolute inset-y-0 z-20 hidden items-center pr-2 pl-4 lg:flex">
        <span
          data-hero-title
          className="type-display text-accent whitespace-nowrap"
          style={{
            writingMode: "vertical-rl",
            lineHeight: 1,
            fontSize: "14.5dvh",
          }}
        >
          {hero.title}
        </span>
      </div>

      {/* Main image: right-corner background */}
      <div
        data-hero-main
        className="absolute bottom-0 right-0 z-0 h-[62%] w-[46%] overflow-hidden"
      >
        <Image
          src={hero.mainImg}
          alt={hero.name}
          fill
          sizes="10vw"
          className="grayscale object-fit"
          priority
        />
      </div>

      {/* Secondary images distributed across the page */}

      <div
        data-hero-third
        className="absolute bottom-70 left-[52%] z-10 hidden h-40 w-44 overflow-hidden border-r-2 border-t-2 border-border md:block"
      >
        <Image
          src={hero.secondImg}
          alt=""
          fill
          sizes="176px"
          className="grayscale object-cover"
        />
      </div>

      <div
        data-hero-third
        className="absolute bottom-0 left-[12%] z-10 hidden h-40 w-44 overflow-hidden border-r-2 border-t-2 border-border md:block"
      >
        <Image
          src={hero.thirdImg}
          alt=""
          fill
          sizes="176px"
          className="grayscale object-cover"
        />
      </div>

      <div
        data-hero-fourth
        className="absolute right-[18%] top-[12%] z-10 hidden h-28 w-28 overflow-hidden border-2 border-border xl:block"
      >
        <Image
          src={hero.fourthImg}
          alt=""
          fill
          sizes="112px"
          className="grayscale object-cover"
        />
      </div>

      <div
        data-hero-fifth
        className="absolute bottom-[18%] left-[28%] z-10 hidden h-24 w-32 overflow-hidden border-2 border-border xl:block"
      >
        <Image
          src={hero.fifthImg}
          alt=""
          fill
          sizes="128px"
          className="grayscale object-cover"
        />
      </div>

      {/* Content stack: technologies / name / speciality, one below the other */}
      <div className="relative z-30 flex min-h-dvh pt-10">
        <div
          data-hero-content
          className="mx-auto flex w-full max-w-350 flex-col gap-5 pl-10 sm:pl-14 lg:pl-32 lg:pr-20"
        >
          <p data-hero-line className="type-meta">
            {hero.technologies}
          </p>

          <h1
            data-hero-line
            className="type-display display-6xl lg:display-6xl max-w-[10ch]"
          >
            {hero.name}
          </h1>
          <p data-hero-line className="type-meta display-2xl lg:display-2xl">
            {hero.speciality}
          </p>
        </div>
      </div>

      {/* ===== Retro-futuristic figures / blueprint deco ===== */}
      <div aria-hidden className="pointer-events-none">
        {/* Giant structural outline + echo frame */}
        {/* <div
          data-hero-shape
          className="absolute -right-28 top-1/2 z-0 hidden size-140 -translate-y-1/2 border-2 border-border-subtle xl:block"
        >
          <div className="absolute inset-6 border border-border-subtle" />
          <span className="type-micro absolute -top-1 left-0 bg-background pr-2 text-faint">
            {hero.figures.unit}
          </span>
        </div> */}

        {/* HUD corner brackets framing the viewport */}
        {/* <span
          data-hero-shape
          className="absolute left-4 top-4 z-20 block h-7 w-7 border-l-2 border-t-2 border-accent"
        />
        <span
          data-hero-shape
          className="absolute right-4 top-4 z-20 block h-7 w-7 border-r-2 border-t-2 border-accent"
        />
        <span
          data-hero-shape
          className="absolute bottom-4 left-4 z-20 block h-7 w-7 border-b-2 border-l-2 border-accent"
        />
        <span
          data-hero-shape
          className="absolute bottom-4 right-4 z-20 block h-7 w-7 border-b-2 border-r-2 border-accent"
        /> */}

        {/* Crosshairs at grid intersections */}
        {/* <span
          data-hero-shape
          className="type-micro absolute left-[12%] top-[12%] z-20 text-accent"
        >
          {hero.figures.crosshair}
        </span>
        <span
          data-hero-shape
          className="type-micro absolute bottom-[26%] left-[34%] z-20 text-accent"
        >
          {hero.figures.crosshair}
        </span>
        <span
          data-hero-shape
          className="type-micro absolute right-[10%] top-[44%] z-20 text-accent"
        >
          {hero.figures.crosshair}
        </span> */}




        {/* Caution stripe bar + registration mark, lower centre */}
      <span
          data-hero-shape
          className="stripes-caution absolute bottom-[82%] left-[68%] z-20 block h-3 w-24 opacity-90 sm:w-32"
        />



        <span
          data-hero-shape
          className="stripes-caution absolute bottom-[22%] left-[8%] z-20 block h-3 w-24 opacity-90 sm:w-32"
        />


                 <span
          data-hero-shape
          className="stripes-caution absolute bottom-[52%] left-[88%] z-20 block h-3 w-24 opacity-90 sm:w-32"
        />
      </div>

      {/* CRT scanline overlay */}
      <div
        data-hero-scan
        className="scanlines pointer-events-none absolute inset-0 z-40"
        aria-hidden
      />
    </section>
  );
}
