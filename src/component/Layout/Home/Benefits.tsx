import MotionComponent from "@/component/UI/elements/MotionComp";
import { fadeInVariants } from "@/component/UI/elements/motion";
import { BENEFITS } from "@/constants";
import { inter_bold, inter_light } from "@/utils/fonts";

export default function Benefits() {
  return (
    <main className="p-4 lg:p-6 py-12">
      <h2 className={`header-style ${inter_bold.className}`}>
        Why Invest With Us
      </h2>
      <p className={`paragraph-style ${inter_light.className}`}>
        Unlock Your Gateway to Financial Freedom
      </p>
      <section
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 lg:gap-6
      mt-[1rem] lg:mt-[2rem]">
        {BENEFITS.map((benefit, index) => (
          <MotionComponent
            as="div"
            variants={fadeInVariants("up", (index + 1) / 10, 0.5)}
            key={benefit.id}>
            <div className="flex items-center gap-3 ">
              <span className="p-1 bg-white rounded-full"></span>
              <h3 className={`box-header ${inter_bold.className}`}>
                {benefit.header}
              </h3>
            </div>
            <p
              className={`box-paragraph text-justify ${inter_light.className}`}>
              {benefit.paragraph}
            </p>
          </MotionComponent>
        ))}
      </section>
    </main>
  );
}
