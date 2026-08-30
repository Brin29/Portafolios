import Image from "next/image";
import hero from "@/app/data/hero.json";

export function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-background text-foreground">
      {/* Vertical title: full-height left rail */}
      <div className="absolute inset-y-0 z-20 hidden items-center pr-2 pl-4 lg:flex">
        <span
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
      <div className="absolute bottom-0 right-0 z-0 h-[72%] w-[46%] overflow-hidden border-l-2 border-t-2 border-border">
        <Image
          src={hero.mainImg}
          alt={hero.name}
          fill
          sizes="46vw"
          className="object-cover mix-blend-luminosity"
          priority
        />
      </div>

      {/* Secondary images distributed across the page */}
      <div className="absolute right-0 top-0 z-10 h-36 w-40 overflow-hidden border-b-2 border-l-2 border-border">
        <Image
          src={hero.secondImg}
          alt=""
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-[12%] z-10 hidden h-40 w-44 overflow-hidden border-r-2 border-t-2 border-border md:block">
        <Image
          src={hero.thirdImg}
          alt=""
          fill
          sizes="176px"
          className="object-cover"
        />
      </div>

      <div className="absolute right-[18%] top-[12%] z-10 hidden h-28 w-28 overflow-hidden border-2 border-border xl:block">
        <Image
          src={hero.fourthImg}
          alt=""
          fill
          sizes="112px"
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-[18%] left-[28%] z-10 hidden h-24 w-32 overflow-hidden border-2 border-border xl:block">
        <Image
          src={hero.fifthImg}
          alt=""
          fill
          sizes="128px"
          className="object-cover"
        />
      </div>

      {/* Content stack: technologies / name / speciality, one below the other */}
      <div className="relative z-30 flex min-h-dvh pt-10">
        <div className="mx-auto flex w-full max-w-350 flex-col gap-5 pl-10 sm:pl-14 lg:pl-32 lg:pr-20">
          <p className="type-meta">{hero.technologies}</p>

          <h1 className="type-display display-6xl lg:display-6xl max-w-[10ch]">
            {hero.name}
          </h1>
          <p className="type-meta display-2xl lg:display-2xl">
            {hero.speciality}
          </p>
        </div>
      </div>
    </section>
  );
}
