export default function Hero() {
  const outlets = [
    {
      number: "01",
      name: "Sri Sagar",
      location: "KHALPARA · SILIGURI",
      image:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=90",
      active: true,
    },
    {
      number: "02",
      name: "Tiffins by Sagar",
      location: "EAST MILANPALLY · SILIGURI",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=90",
      active: true,
    },
    {
      number: "03",
      name: "Sagar Family Restaurant",
      location: "SEVOKE ROAD · SILIGURI",
      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=90",
      active: true,
    },
    {
      number: "04",
      name: "Sagar's Signature",
      location: "FORMER LOCATION · SILIGURI",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=90",
      active: false,
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f7f2e8] text-[#171613]">

      {/* ================= HERO ================= */}

      <section id="home" className="relative overflow-hidden">

        <div className="pointer-events-none absolute right-[-35%] top-0 hidden h-[650px] w-[70%] rounded-bl-[50%] bg-[#eee5d5] lg:block" />

        <div className="relative mx-auto max-w-[1450px] px-6 pb-10 pt-8 sm:px-10 lg:px-12">

          {/* HEADER */}

          <header className="flex items-center justify-between">

            <a
              href="#home"
              className="font-display text-[2.8rem] leading-none tracking-[-0.04em] sm:text-5xl"
            >
              SAGAR
            </a>

            <button
              type="button"
              aria-label="Open navigation"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white/50 backdrop-blur-md transition-all duration-300 hover:border-[#b08d57]"
            >
              <span className="flex w-6 flex-col gap-[6px]">
                <span className="h-px w-full bg-[#171613]" />
                <span className="h-px w-full bg-[#171613]" />
                <span className="h-px w-full bg-[#171613]" />
              </span>
            </button>

          </header>


          


{/* LUXURY ORNAMENT */}

<div className="mt-9 flex items-center justify-center gap-3 sm:mt-10">

  <span className="h-px w-16 bg-[#b08d57]/45 sm:w-24" />

  <span className="text-[10px] text-[#b08d57]">
    ✦
  </span>

  <span className="h-px w-16 bg-[#b08d57]/45 sm:w-24" />

</div>


{/* LOCATION */}

<div className="mt-8 flex items-center gap-4 sm:mt-9">

  <span className="h-px w-10 bg-[#b08d57]" />

  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#716b61] sm:text-[10px]">
    Siliguri · West Bengal
  </p>

</div>


          {/* ================= HERO IMAGE ================= */}

          <div className="relative mt-8 sm:mt-10">

            <div className="relative mx-auto h-[58vh] min-h-[430px] max-h-[680px] w-full overflow-hidden rounded-tl-[42%] rounded-br-[8px] sm:h-[600px] lg:h-[650px]">

              {/* 01 — INDIAN FOOD */}

              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1600&q=90"
                alt="Sagar vegetarian cuisine"
                className="sagar-slide sagar-slide-1 absolute inset-0 h-full w-full object-cover"
              />


              {/* 02 — CHOLE BHATURE */}

              <img
                src="https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/chole_bhature.jpg"
                alt="Sagar vegetarian speciality"
                className="sagar-slide sagar-slide-2 absolute inset-0 h-full w-full object-cover"
              />


              {/* 03 — INDO CHINESE */}

              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2025/8/22/eba9ea8a-75b6-4d25-99f3-d7e0bede1275_1bf81713-d841-42f7-995d-91d829edf224.jpg"
                alt="Sagar vegetarian cuisine"
                className="sagar-slide sagar-slide-3 absolute inset-0 h-full w-full object-cover"
              />


              {/* 04 — DOSA */}

              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_300%2Ch_300%2Ce_grayscale%2Cc_fit/507c69e1e8be57ca7e4ce611eb70a542"
                alt="Sagar vegetarian speciality"
                className="sagar-slide sagar-slide-4 absolute inset-0 h-full w-full object-cover"
              />


              {/* DARK OVERLAY */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/10" />


              {/* ================= SLIDE CAPTIONS ================= */}

              <div className="absolute bottom-7 left-7 right-28 z-10 sm:bottom-10 sm:left-10 sm:right-40">

                <p className="text-[8px] uppercase tracking-[0.3em] text-white/65 sm:text-[9px]">
                  SAGAR · SILIGURI
                </p>


                {/* Caption container */}

                <div className="relative mt-2 h-[58px] overflow-hidden sm:h-[64px]">

                  {/* SLIDE 1 */}

                  <p className="sagar-caption sagar-caption-1 absolute left-0 top-0 max-w-full font-display text-[28px] leading-[1.05] text-white sm:text-4xl">
                    A taste worth returning to
                  </p>


                  {/* SLIDE 2 */}

                  <p className="sagar-caption sagar-caption-2 absolute left-0 top-0 max-w-full font-display text-[28px] leading-[1.05] text-white sm:text-4xl">
                    Sagar&apos;s special
                  </p>


                  {/* SLIDE 3 */}

                  <p className="sagar-caption sagar-caption-3 absolute left-0 top-0 max-w-full font-display text-[28px] leading-[1.05] text-white sm:text-4xl">
                    Flavours made for every table
                  </p>


                  {/* SLIDE 4 */}

                  <p className="sagar-caption sagar-caption-4 absolute left-0 top-0 max-w-full font-display text-[28px] leading-[1.05] text-white sm:text-4xl">
                    Food Paradise
                  </p>

                </div>

              </div>


              {/* ================= PURE VEGETARIAN ================= */}

              <div className="absolute bottom-6 right-6 z-10 flex h-24 w-24 items-center justify-center rounded-full border border-[#d4b47d] bg-[#f7f2e8]/95 sm:bottom-10 sm:right-10 sm:h-28 sm:w-28">

                <div className="text-center">

                  <p className="font-display text-2xl italic text-[#b08d57]">
                    Pure
                  </p>

                  <p className="text-[8px] uppercase tracking-[0.2em] text-[#756f66]">
                    Vegetarian
                  </p>

                </div>

              </div>

            </div>


            {/* GOLD OVAL */}

            <div className="pointer-events-none absolute -left-4 -top-5 h-[calc(100%+40px)] w-[75%] rounded-[50%] border border-[#b08d57]/45 sm:-left-7" />


            {/* GOLD STAR */}

            <span className="absolute left-[-4px] top-[40%] z-10 text-2xl text-[#b08d57] sm:text-3xl">
              ✦
            </span>

          </div>


          {/* ================= SLIDE INDICATORS ================= */}

          <div className="mt-5 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <span className="sagar-indicator sagar-indicator-1" />
              <span className="sagar-indicator sagar-indicator-2" />
              <span className="sagar-indicator sagar-indicator-3" />
              <span className="sagar-indicator sagar-indicator-4" />

            </div>

            <p className="text-[8px] uppercase tracking-[0.25em] text-[#817a70]">
              A glimpse of Sagar
            </p>

          </div>


          {/* ================= STATS ================= */}

          <div className="mt-10 grid grid-cols-3 border-y border-black/10 py-6 sm:mt-14 sm:py-7">

            <div className="text-center">

              <p className="font-display text-3xl sm:text-5xl">
                4
              </p>

              <p className="mt-1 text-[7px] uppercase tracking-[0.18em] text-[#756f66] sm:text-[9px]">
                Dining destinations
              </p>

            </div>


            <div className="border-x border-black/10 text-center">

              <p className="font-display text-3xl sm:text-5xl">
                4.6+
              </p>

              <p className="mt-1 text-[7px] uppercase tracking-[0.18em] text-[#756f66] sm:text-[9px]">
                Guest ratings
              </p>

            </div>


            <div className="text-center">

              <p className="font-display text-3xl sm:text-5xl">
                100%
              </p>

              <p className="mt-1 text-[7px] uppercase tracking-[0.18em] text-[#756f66] sm:text-[9px]">
                Vegetarian
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= RESTAURANTS ================= */}

      <section
        id="restaurants"
        className="relative overflow-hidden bg-[#eee5d5] py-20 sm:py-24"
      >

        <div className="pointer-events-none absolute right-[-100px] top-[-80px] h-[300px] w-[300px] rounded-full border border-[#b08d57]/15" />


        <div className="mx-auto max-w-[1450px]">

          {/* SECTION TITLE */}

          <div className="px-6 sm:px-10 lg:px-12">

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#b08d57]">
              Our Restaurants
            </p>

            <h2 className="mt-4 font-display text-5xl leading-none tracking-[-0.035em] sm:text-7xl lg:text-8xl">
              Find your Sagar.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-[#716b61]">
              Four experiences. One familiar name.
            </p>

          </div>


          {/* RESTAURANT CARDS */}

          <div className="mt-10 flex gap-4 overflow-x-auto px-6 pb-8 scrollbar-hide sm:px-10 lg:px-12">

            {[...outlets, ...outlets].map((outlet, index) => (

              <article
                key={`${outlet.number}-${index}`}
                className="group relative h-[430px] min-w-[270px] overflow-hidden rounded-sm sm:h-[520px] sm:min-w-[330px]"
              >

                <img
                  src={outlet.image}
                  alt={outlet.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />


                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />


                <div className="absolute inset-3 border border-white/20 transition-colors duration-500 group-hover:border-[#d0aa70]/70" />


                <div className="absolute left-6 top-6 text-[9px] tracking-[0.2em] text-white/75">
                  {outlet.number}
                </div>


                {!outlet.active && (
                  <div className="absolute right-6 top-6 bg-black/50 px-3 py-2 text-[7px] uppercase tracking-[0.15em] text-white/80 backdrop-blur-md">
                    Former Location
                  </div>
                )}


                <div className="absolute bottom-6 left-6 right-6">

                  <div className="mb-4 h-px w-10 bg-[#d0aa70]" />

                  <h3 className="font-display text-4xl leading-none text-white">
                    {outlet.name}
                  </h3>

                  <p className="mt-4 text-[8px] uppercase tracking-[0.2em] text-white/65">
                    {outlet.location}
                  </p>


                  <span className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f2e8] text-lg text-[#171613] transition-colors duration-300 group-hover:bg-[#b08d57] group-hover:text-white">
                    →
                  </span>

                </div>

              </article>

            ))}

          </div>


          {/* BOTTOM DIVIDER */}

          <div className="mx-6 flex items-center gap-4 sm:mx-10 lg:mx-12">

            <span className="h-px flex-1 bg-black/15" />

            <p className="whitespace-nowrap text-[8px] uppercase tracking-[0.25em] text-[#766f65]">
              Four experiences · One familiar name
            </p>

            <span className="h-px flex-1 bg-black/15" />

          </div>

        </div>

      </section>

    </main>
  );
} 