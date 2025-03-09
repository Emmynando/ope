"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { inter_bold, inter_medium } from "@/utils/fonts";
import CarouselText from "./CarouselContent";
import { CAROUZEL } from "@/constants";

export default function Testimonials() {
  return (
    <main className="p-4 lg:p-6 ">
      <h2 className={`header-style ${inter_bold.className}`}>
        What Are Our Clients Saying
      </h2>
      <p
        className={`paragraph-style text-gray-400 ${inter_medium.className} mb-[2rem]`}>
        {" "}
        Our clients have a lot to say about us, here's are some reviews
      </p>
      <section>
        <Carousel
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}>
          <CarouselContent>
            {CAROUZEL.map((items) => (
              <CarouselItem>
                <CarouselText
                  key={items.id}
                  paragraph={items.title}
                  title={items.heading}
                  id={items.id}
                  name={items.namez}
                  country={items.country}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  );
}
