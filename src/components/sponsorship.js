"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Archivo, Roboto } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });
const roboto = Roboto({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });


// LENDERS LOGOS
import one from "/public/assets/img/lenders/AFCL.avif";
import two from "/public/assets/img/lenders/alex bank.png";
import three from "/public/assets/img/lenders/ammf.png";
import four from "/public/assets/img/lenders/AMP.png";
import five from "/public/assets/img/lenders/angle finance.jpg";
import six from "/public/assets/img/lenders/anz.jpg";
import seven from "/public/assets/img/lenders/aquamore.png";
import eight from "/public/assets/img/lenders/arch finance.png";
import nine from "/public/assets/img/lenders/assetline capital.avif";
import ten from "/public/assets/img/lenders/Athena Home Loans.webp";
import eleven from "/public/assets/img/lenders/Australian Military Bank.png";
import twelve from "/public/assets/img/lenders/australian-financial-holdings-logo.webp";
import thirteen from "/public/assets/img/lenders/azora finance.png";
import fourteen from "/public/assets/img/lenders/auswide bank.png";
import fifteen from "/public/assets/img/lenders/banjo.jpg";
import sixteen from "/public/assets/img/lenders/bank australia.jpg";
import seventeen from "/public/assets/img/lenders/bank first.png";
import eighteen from "/public/assets/img/lenders/bank of sydney.png";
import nineteen from "/public/assets/img/lenders/Bank of US.png";
import twenty from "/public/assets/img/lenders/Bank-SA.jpg";
import twentyOne from "/public/assets/img/lenders/bankwest-logo.png";
import twentyTwo from "/public/assets/img/lenders/bendigo bank.png";
import twentyThree from "/public/assets/img/lenders/better mortgage  management.webp";
import twentyFour from "/public/assets/img/lenders/Better_Choice_Home_Loans.png";
import twentyFive from "/public/assets/img/lenders/beyond bank.jpg";
import twentySix from "/public/assets/img/lenders/BIZCAP.png";
import twentySeven from "/public/assets/img/lenders/blue stone home loans.png";
import twentyEight from "/public/assets/img/lenders/branded financial services.webp";
// import twentyNine from "/public/assets/img/lenders/bridgit.png";
import thirty from "/public/assets/img/lenders/brighten.jpg";
import thirtyOne from "/public/assets/img/lenders/BOM-logo.jpg";
import thirtyTwo from "/public/assets/img/lenders/BOCHK+1.webp";
import thirtyThree from "/public/assets/img/lenders/BOQ-logo.png";
import thirtyFour from "/public/assets/img/lenders/branded financial services.webp";
import thirtyFive from "/public/assets/img/lenders/bridgit.png";
import thirtySix from "/public/assets/img/lenders/brighten.jpg";
import thirtySeven from "/public/assets/img/lenders/capital finance.png";
import thirtyEight from "/public/assets/img/lenders/citi.png";
import thirtyNine from "/public/assets/img/lenders/commbank.jpg";
import forty from "/public/assets/img/lenders/Credit-Union-SA.png";
import fortyOne from "/public/assets/img/lenders/deposit assure.png";
import fortyTwo from "/public/assets/img/lenders/deposit power.png";
import fortyThree from "/public/assets/img/lenders/dyna money.png";
import fortyFour from "/public/assets/img/lenders/early pay.png";
import fortyFive from "/public/assets/img/lenders/eMoney.png";
import fortySix from "/public/assets/img/lenders/finance one.jpg";
import fortySeven from "/public/assets/img/lenders/firefighters mutual bank.png";
import fortyEight from "/public/assets/img/lenders/firstmac.png";
import fortyNine from "/public/assets/img/lenders/flexicommercial-logo.webp";
import fifty from "/public/assets/img/lenders/go beyound.png";
import fiftyOne from "/public/assets/img/lenders/Granite Home Loans.png";
import fiftyTwo from "/public/assets/img/lenders/Great Southern Bank_Logo_.png";
import fiftyThree from "/public/assets/img/lenders/health professional bank.png";
import fiftyFour from "/public/assets/img/lenders/Heartlands-Senior-Finance.png";
import fiftyFive from "/public/assets/img/lenders/hejaz.png";
import fiftySix from "/public/assets/img/lenders/HomeStart.jpg";
import fiftySeven from "/public/assets/img/lenders/Household_Capital_Logo.png";
import fiftyEight from "/public/assets/img/lenders/I had an excellent experience with Kubaer Finance, thanks to the outstanding support from Bipin, Smita and Manjita. (1).png";
import fiftyNine from "/public/assets/img/lenders/imb.jpg";
import sixty from "/public/assets/img/lenders/ING.jpg";
import sixtyOne from "/public/assets/img/lenders/judo bank.jpg";
// import sixtyTwo from "/public/assets/img/lenders/judo bank.png";
import sixtyThree from "/public/assets/img/lenders/keystart-home-loans.jpg";
import sixtyFour from "/public/assets/img/lenders/la trobe financial.jpg";
import sixtyFive from "/public/assets/img/lenders/Latitude_Financial_Services_Logo.png";
import sixtySix from "/public/assets/img/lenders/liberty financial.jpg";
import sixtySeven from "/public/assets/img/lenders/loans today.webp";
import sixtyEight from "/public/assets/img/lenders/lumi.png";
import sixtyNine from "/public/assets/img/lenders/MA-Money_Logo.jpg";
import seventy from "/public/assets/img/lenders/Macquarie-Bank-logo.png";
import seventyOne from "/public/assets/img/lenders/Me_bank_logo.png";
import seventyTwo from "/public/assets/img/lenders/medfin_logo.jpg";
import seventyThree from "/public/assets/img/lenders/metro finance.webp";
import seventyFour from "/public/assets/img/lenders/MoneyMe.png";
import seventyFive from "/public/assets/img/lenders/moneyplace.webp";
import seventySix from "/public/assets/img/lenders/moneytech.jpg";
import seventySeven from "/public/assets/img/lenders/morris finance.png";
import seventyEight from "/public/assets/img/lenders/mortgage ezy.png";
import seventyNine from "/public/assets/img/lenders/mortgage mart.png";
import eighty from "/public/assets/img/lenders/moula.webp";
import eightyOne from "/public/assets/img/lenders/MyState_Logo.png";
import eightyTwo from "/public/assets/img/lenders/N1 holdings.jpg";
import eightyThree from "/public/assets/img/lenders/National_Australia_Bank.svg";
import eightyFour from "/public/assets/img/lenders/Newcastle Permanent.jpeg";
import eightyFive from "/public/assets/img/lenders/NOWFinance-Logo..svg";
import eightySix from "/public/assets/img/lenders/oak capita.png";
import eightySeven from "/public/assets/img/lenders/ondeck.webp";
import eightyEight from "/public/assets/img/lenders/orde financial.avif";
import eightyNine from "/public/assets/img/lenders/ownhomeco_.jpg";
import ninety from "/public/assets/img/lenders/pallas capital.webp";
import ninetyOne from "/public/assets/img/lenders/paramount.png";
import ninetyTwo from "/public/assets/img/lenders/people first bank.png";
import ninetyThree from "/public/assets/img/lenders/Pepper Money Logo.png";
import ninetyFour from "/public/assets/img/lenders/plenti.png";
import ninetyFive from "/public/assets/img/lenders/pn bank.png";
import ninetySix from "/public/assets/img/lenders/prospa.webp";
import ninetySeven from "/public/assets/img/lenders/Qualitas Logo.jpg";
import ninetyEight from "/public/assets/img/lenders/redzed.jpg";
import ninetyNine from "/public/assets/img/lenders/resimac.png";
import oneHundred from "/public/assets/img/lenders/scotpaclogo.webp";
import oneHundredOne from "/public/assets/img/lenders/Screenshot 2025-12-01 171430.png";
import oneHundredTwo from "/public/assets/img/lenders/Screenshot 2025-12-01 182757.png";
import oneHundredThree from "/public/assets/img/lenders/Screenshot 2025-12-01 183642.png";
import oneHundredFour from "/public/assets/img/lenders/selfco.jpg";
import oneHundredFive from "/public/assets/img/lenders/shift.webp";
import oneHundredSix from "/public/assets/img/lenders/society one.png";
import oneHundredSeven from "/public/assets/img/lenders/St.George_Bank_logo.png";
import oneHundredEight from "/public/assets/img/lenders/suncorp.png";
import oneHundredNine from "/public/assets/img/lenders/teacher-mutual-bank-logo.png";
import oneHundredTen from "/public/assets/img/lenders/tp24.png";
import oneHundredEleven from "/public/assets/img/lenders/ubank-logo-.webp";
import oneHundredTwelve from "/public/assets/img/lenders/unibank.png";
import oneHundredThirteen from "/public/assets/img/lenders/victorian_mortgage_group_logo.jpg";
import oneHundredFourteen from "/public/assets/img/lenders/virgin money.png";
import oneHundredFifteen from "/public/assets/img/lenders/wave money.png";
import oneHundredSixteen from "/public/assets/img/lenders/westpac.webp";
import oneHundredSeventeen from "/public/assets/img/lenders/Wisr.png";



// LENDER'S LOGOS DATA
const partnerData = [
  { src: one, alt: "Image 1" },
  { src: two, alt: "Image 2" },
  { src: three, alt: "Image 3" },
  { src: four, alt: "Image 4" },
  { src: five, alt: "Image 5" },
  { src: six, alt: "Image 6" },
  { src: oneHundredOne, alt: "Image 101" },
  { src: seven, alt: "Image 7" },
  { src: eight, alt: "Image 8" },
  { src: nine, alt: "Image 9" },
  { src: ten, alt: "Image 10" },
  { src: eleven, alt: "Image 11" },
  { src: twelve, alt: "Image 12" },
  { src: thirteen, alt: "Image 13" },
  { src: fourteen, alt: "Image 14" },
  { src: fifteen, alt: "Image 15" },
  { src: sixteen, alt: "Image 16" },
  { src: seventeen, alt: "Image 17" },
  { src: eighteen, alt: "Image 18" },
  { src: nineteen, alt: "Image 19" },
  { src: twenty, alt: "Image 20" },
  { src: twentyOne, alt: "Image 21" },
  { src: twentyTwo, alt: "Image 22" },
  { src: twentyThree, alt: "Image 23" },
  { src: twentyFour, alt: "Image 24" },
  { src: twentyFive, alt: "Image 25" },
  { src: twentySix, alt: "Image 26" },
  { src: twentySeven, alt: "Image 27" },
  { src: twentyEight, alt: "Image 28" },
  // { src: twentyNine, alt: "Image 29", link: "" },
  // { src: thirty, alt: "Image 30", link: "" },
  { src: thirtyOne, alt: "Image 31" },
  { src: thirtyTwo, alt: "Image 32" },
  { src: thirtyThree, alt: "Image 33" },
  // { src: thirtyFour, alt: "Image 34", link: "" },
  { src: thirtyFive, alt: "Image 35" },
  { src: thirtySix, alt: "Image 36" },
  { src: thirtySeven, alt: "Image 37" },
  { src: thirtyEight, alt: "Image 38" },
  { src: thirtyNine, alt: "Image 39" },
  { src: forty, alt: "Image 40" },
  { src: fortyOne, alt: "Image 41" },
  { src: fortyTwo, alt: "Image 42" },
  { src: fortyThree, alt: "Image 43" },
  { src: fortyFour, alt: "Image 44" },
  { src: fortyFive, alt: "Image 45" },
  { src: fortySix, alt: "Image 46" },
  { src: fortySeven, alt: "Image 47" },
  { src: fortyEight, alt: "Image 48" },
  { src: fortyNine, alt: "Image 49" },
  { src: fifty, alt: "Image 50" },
  { src: fiftyOne, alt: "Image 51" },
  { src: fiftyTwo, alt: "Image 52" },
  { src: fiftyThree, alt: "Image 53" },
  { src: fiftyFour, alt: "Image 54" },
  { src: fiftyFive, alt: "Image 55" },
  { src: fiftySix, alt: "Image 56" },
  { src: fiftySeven, alt: "Image 57" },
  // { src: fiftyEight, alt: "Image 58", link: "" },
  { src: fiftyNine, alt: "Image 59" },
  { src: sixty, alt: "Image 60" },
  { src: sixtyOne, alt: "Image 61" },
  // { src: sixtyTwo, alt: "Image 62", link: "" },
  { src: sixtyThree, alt: "Image 63" },
  { src: sixtyFour, alt: "Image 64" },
  { src: sixtyFive, alt: "Image 65" },
  { src: sixtySix, alt: "Image 66" },
  { src: sixtySeven, alt: "Image 67" },
  { src: sixtyEight, alt: "Image 68" },
  { src: sixtyNine, alt: "Image 69" },
  { src: seventy, alt: "Image 70" },
  { src: seventyOne, alt: "Image 71" },
  { src: seventyTwo, alt: "Image 72" },
  { src: seventyThree, alt: "Image 73" },
  { src: seventyFour, alt: "Image 74" },
  { src: seventyFive, alt: "Image 75" },
  { src: seventySix, alt: "Image 76" },
  { src: seventySeven, alt: "Image 77" },
  { src: seventyEight, alt: "Image 78" },
  { src: seventyNine, alt: "Image 79" },
  { src: eighty, alt: "Image 80" },
  { src: eightyOne, alt: "Image 81" },
  { src: eightyTwo, alt: "Image 82" },
  { src: eightyThree, alt: "Image 83" },
  { src: eightyFour, alt: "Image 84" },
  { src: eightyFive, alt: "Image 85" },
  { src: eightySix, alt: "Image 86" },
  { src: eightySeven, alt: "Image 87" },
  { src: eightyEight, alt: "Image 88" },
  { src: eightyNine, alt: "Image 89" },
  { src: ninety, alt: "Image 90" },
  { src: ninetyOne, alt: "Image 91" },
  { src: ninetyTwo, alt: "Image 92" },
  { src: ninetyThree, alt: "Image 93" },
  { src: ninetyFour, alt: "Image 94" },
  { src: ninetyFive, alt: "Image 95" },
  { src: ninetySix, alt: "Image 96" },
  { src: ninetySeven, alt: "Image 97" },
  { src: ninetyEight, alt: "Image 98" },
  { src: ninetyNine, alt: "Image 99" },
  { src: oneHundred, alt: "Image 100" },
  { src: oneHundredTwo, alt: "Image 102" },
  { src: oneHundredThree, alt: "Image 103" },
  { src: oneHundredFour, alt: "Image 104" },
  { src: oneHundredFive, alt: "Image 105" },
  { src: oneHundredSix, alt: "Image 106" },
  { src: oneHundredSeven, alt: "Image 107" },
  { src: oneHundredEight, alt: "Image 108" },
  { src: oneHundredNine, alt: "Image 109" },
  { src: oneHundredTen, alt: "Image 110" },
  { src: oneHundredEleven, alt: "Image 111" },
  { src: oneHundredTwelve, alt: "Image 112" },
  { src: oneHundredThirteen, alt: "Image 113" },
  { src: oneHundredFourteen, alt: "Image 114" },
  { src: oneHundredFifteen, alt: "Image 115" },
  { src: oneHundredSixteen, alt: "Image 115" },
  { src: oneHundredSeventeen, alt: "Image 115" },
];



export default function Partners() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="container mx-auto flex flex-col gap-[50px]">
        {/* Title & Sub-title */}
        <div className="flex flex-col gap-[15px]"
          data-aos="fade-up"
          data-aos-duration="1000">
          {/* Title */}
          <div className="text-center">
            <span className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-[600] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC]">
              Our Lenders
            </span>
          </div>
          {/* Subb-Title */}
          <div className="flex justify-center">
            <div className={`text-[#533641] sm:w-[60%] text-center ${roboto.className} leading-[25px] font-[400] tracking-[-1%]`}>
              Celebrating our journey of excellence, innovation, and impact through
              remarkable achievements and milestones.
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div
          className="flex flex-wrap justify-center items-center gap-8"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {partnerData.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-center items-center"
            >
              <div className="relative w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[100px] flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className="object-contain transition-transform duration-300"
                  sizes="(max-width: 768px) 160px, 220px"
                />
              </div>

            </a>
          ))}
        </div>
      </div>

      {/* Optional subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-transparent to-white opacity-50 -z-10"></div>
    </section>
  );
}
