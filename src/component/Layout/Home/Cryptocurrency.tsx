import { inter_bold, inter_medium } from "@/utils/fonts";

export default function Cryptocurrency() {
  return (
    <main className="p-4 lg:p-6 h-dvh">
      <section>
        <video autoPlay loop playsInline>
          {/* <source src="/pics/movingCloud.gif" type="video/gif" /> */}
          Your browser does not support the video tag.
        </video>
        <h3
          className={`text-xs text-right text-[#0194FE] lg:text-base font-normal ${inter_medium.className}`}>
          The Cryptocurrency
        </h3>
        <h2
          className={`text-3xl text-right lg:text-4xl font-semibold ${inter_bold.className} mt-[0.5rem]`}>
          [broker name]
        </h2>
        <p
          className={`lg:w-[40%] lg:ml-auto text-xs text-center lg:text-right text-gray-400 
            text-base font-normal ${inter_medium.className} mt-[1rem]`}>
          [broker name] is one of the leading investment platforms in the United
          States offering an array of regulated cryptocurrency investment
          programs from real trading processes
        </p>
        <div
          className={`flex justify-between lg:w-[60%] lg:mx-auto gap-2 mt-[4rem]`}>
          <div>
            <h3>
              $489,602,068
              <span>
                {/* <Image src={dollarz} width={30} height={30} alt="" /> */}
              </span>
            </h3>{" "}
            <p>PROFITS</p>
          </div>
          <div>
            <h3>
              $14,387,068
              <span>
                {/* <Image src={bitCoin} width={30} height={30} alt="" /> */}
              </span>
            </h3>{" "}
            <p>INVESTMENTS</p>
          </div>
          <div>
            <h3>
              1562
              <span>
                {/* <Image src={userz} width={30} height={30} alt="" /> */}
              </span>
            </h3>
            <p>TOTAL USERS</p>
          </div>
        </div>
      </section>
    </main>
  );
}
