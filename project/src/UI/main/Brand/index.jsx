"use client";
import Image from "next/image";
import logoHettich from "@/images/logos/hettich-international.svg";
import logoBlum from "@/images/logos/blum.svg";
import logoGrass from "@/images/logos/grass.svg";
import logoFGV from "@/images/logos/fgv.svg";
// import logoHafele from "@/images/logos/hafele.svg";
import logoGTV from "@/images/logos/gtv.svg";

const brands = [
  { name: "Hettich", logo: logoHettich },
  { name: "Blum", logo: logoBlum },
  // { name: 'Hafele', logo: logoHafele },
  { name: "FGV", logo: logoFGV },
  { name: "Grass", logo: logoGrass },
  { name: "GTV", logo: logoGTV },
];

export default () => {
  return (
    <div className="py-16 px-2 ">
      {/* <p className="font-display text-base text-center text-slate-900">
          Фурнитура, которой мы доверяем:
        </p> */}
      <ul
        role="list"
        className=" flex items-center justify-center gap-x-4 sm:gap-x-8 xl:gap-x-20"
      >
        {brands.map((company, groupIndex) => (
          <li key={groupIndex}>
            <div className="flex px-2 items-center gap-y-4 flex-row sm:gap-x-20 sm:gap-y-0">
              <Image src={company.logo} alt={company.name} unoptimized />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
