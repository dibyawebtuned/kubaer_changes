{/* 2. Types of First Home Buyer Loans & Government Support */}
<div className="container mx-auto px-4">
  <section className="flex flex-col gap-[0px] sm:gap-[30px] py-12 sm:py-24">
    <h2
      className={`text-2xl text-center !font-semibold mb-4 !leading-[40px] !text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${archivo.className}`}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      data-aos-once="true"
    >
      Types of Home Loans
    </h2>

    <div className="flex flex-col gap-8">
      {/* First row */}
      <div className="flex flex-col sm:flex-row gap-6">
        {loanOptions.slice(0, 2).map((loan, index) => (
          <button
            key={index}
            onClick={() => {
              // Replace with your click action, e.g. navigate to details page
              console.log("Clicked:", loan.title);
            }}
            className="flex gap-4 flex-1 p-6 bg-white rounded-2xl shadow-[0_4px_15px_rgba(241,114,172,0.2)] hover:shadow-[0_6px_20px_rgba(241,114,172,0.5)] transform transition-transform transition-shadow duration-1000 ease-in-out hover:-translate-y-2 items-start border-l-4 border-[#F172AC]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 200}
            data-aos-once="true"
          >
            {/* Icon */}
            <div className="flex-shrink-0 text-[#F171AC]">{loan.icon}</div>

            {/* Title */}
            <div className="flex flex-col">
              <div
                className={`text-[18px] md:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] font-[500] mb-2 ${archivo.className}`}
              >
                {loan.title}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Remaining items */}
      <div className="flex flex-col sm:flex-row gap-6 flex-wrap">
        {loanOptions.slice(2).map((loan, index) => (
          <button
            key={index}
            onClick={() => console.log("Clicked:", loan.title)}
            className="flex gap-4 flex-1 p-6 bg-white rounded-2xl shadow-[0_4px_15px_rgba(241,114,172,0.2)] hover:shadow-[0_6px_20px_rgba(241,114,172,0.5)] transition-all duration-300 items-start border-l-4 border-[#F172AC]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 300}
            data-aos-once="true"
          >
            <div className="flex-shrink-0 text-[#F171AC]">{loan.icon}</div>
            <div className="flex flex-col">
              <div
                className={`text-[18px] md:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] font-[500] mb-2 ${archivo.className}`}
              >
                {loan.title}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  </section>

  {/* Government Support Section */}
  <section className="pb-10 flex flex-col gap-[10px] sm:gap-[30px]">
    <h4
      className={`!text-2xl text-center !font-semibold !mb-4 !leading-[30px] !text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] ${archivo.className}`}
    >
      Beyond the loan types, crucial government initiatives <br /> can significantly assist first home buyers:
    </h4>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          title: "First Home Buyer Guarantee (FHBG)",
          icon: Gift,
          link: "/fhbg", // Example link
        },
        {
          title: "Regional First Home Buyer Guarantee (RFHBG)",
          icon: MapPin,
          link: "/rfhbg",
        },
        {
          title: "Family Home Guarantee (FHG)",
          icon: Users,
          link: "/fhg",
        },
        {
          title: "First Home Owner Grant (FHOG)",
          icon: HandCoins,
          link: "/fhog",
        },
        {
          title: "First Home Super Saver (FHSS) Scheme",
          icon: PiggyBank,
          link: "/fhss",
        },
        {
          title: "Help to Buy Scheme (Coming Soon)",
          icon: Building2,
          link: "#",
        },
      ].map((item, index) => {
        const Icon = item.icon;

        return (
          <a
            key={index}
            href={item.link}
            className="flex gap-4 flex-1 p-6 bg-white rounded-2xl shadow-[0_4px_15px_rgba(241,114,172,0.2)] hover:shadow-[0_6px_20px_rgba(241,114,172,0.5)] transition-all duration-300 items-start border-l-4 border-[#F172AC]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 200}
            data-aos-once="true"
          >
            {/* ICON */}
            <div className="flex-shrink-0">
              <Icon className="w-8 h-8 text-[#F171AC]" />
            </div>

            {/* CONTENT */}
            <div>
              <div
                className={`text-[18px] md:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#86489B] to-[#F171AC] font-[500] mb-2 ${archivo.className}`}
              >
                {item.title}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  </section>
</div>