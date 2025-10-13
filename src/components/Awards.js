"use client";

import Image from "next/image";

// Import award images (adjust paths according to your /public folder)
import Plan from "/public/assets/img/awards/plan.png";
import Elite2021 from "/public/assets/img/awards/elite2021.png";
import Elite2022 from "/public/assets/img/awards/elite2022.png";
import Elite2024 from "/public/assets/img/awards/elite2024.png";
import EliteBroker from "/public/assets/img/awards/elitebroker.png";
import Mortgage2022 from "/public/assets/img/awards/mortgae2022.png";
import Mortgage2023 from "/public/assets/img/awards/mortgage2023.png";
import MortgageBroker from "/public/assets/img/awards/mortgagebroker.png";
import MortgageAU from "/public/assets/img/awards/mortageau.png";
import MortgageState from "/public/assets/img/awards/mortgagestate.png";

const awards = [
  Plan, Elite2021, Elite2022, Elite2024, EliteBroker,
  Mortgage2022, Mortgage2023, MortgageBroker, MortgageAU, MortgageState,
  // repeated for scrolling effect
  Plan, Elite2021, Elite2022, Elite2024, EliteBroker,
  Mortgage2022, Mortgage2023, MortgageBroker, MortgageAU, MortgageState,
];

export default function AwardsSection({ showTitle = true }) {
  return (
    <section>
      <div className="container">
        {/* Conditional title rendering */}
        {showTitle && (
          <div className="section-title d-flex justify-content-center mb-10 md:mb-20">
            <div>
              <h2 className="text-center text-3xl font-semibold">Awards</h2>
              <div className="gradient-divider mx-auto mt-2"></div>
            </div>
          </div>
        )}

        <div className="scroll-container overflow-hidden">
          <div className="scroll-text flex gap-[50px] animate-scroll">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[120px] h-[120px] flex items-center justify-center"
              >
                <Image
                  src={award}
                  alt={`award-${index}`}
                  className="object-contain object-center w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
