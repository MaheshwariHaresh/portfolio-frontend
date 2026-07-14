import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectGallery({ images = [] }) {
  if (!images.length) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#FF6B2B]">
            Gallery
          </p>

          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white">
            Project Screens
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="gallery-pagination" />
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="gallery-nav-prev"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              className="gallery-nav-next"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".gallery-nav-prev",
          nextEl: ".gallery-nav-next",
        }}
        pagination={{
          clickable: false,
          type: "fraction",
          el: ".gallery-pagination",
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="projectGallery"
      >
        {images.map((img, index) => {
          const titleText = img?.title?.trim() || "Project Screenshot";
          const captionText =
            typeof img?.caption === "string" ? img.caption.trim() : "";
          const altText = img?.title
            ? `${img.title} interface`
            : `Project screenshot ${index + 1}`;

          return (
            <SwiperSlide key={img?._id || `${img?.url || img?.image}-${index}`}>
              <div className="gallery-slide flex h-full flex-col">
                <div className="gallery-frame overflow-hidden">
                  <img
                    src={img?.url}
                    alt={altText}
                    loading="lazy"
                    className="gallery-image h-full w-full object-cover"
                  />
                </div>

                <div className="mt-4 rounded-2xl border border-zinc-200/80 bg-white/80 px-5 py-4 shadow-[0_10px_35px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
                  <h3
                    className="text-lg font-semibold leading-tight text-zinc-900 dark:text-white md:text-xl"
                    style={{ fontFamily: "'PT Sans', sans-serif" }}
                  >
                    {titleText}
                  </h3>
                  {captionText ? (
                    <p className="mt-2 text-sm leading-7 text-zinc-500 break-words dark:text-zinc-400">
                      {captionText}
                    </p>
                  ) : null}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
