/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center space-y-4">

      {/* Kart 1 */}
      <div className="container bg-white flex items-center justify-center h-screen w-full bg-cover bg-center lg:bg-kart1-background lg:aspect-[16/9] lg:h-auto">
        <p className="text-4xl font-bold text-center whitespace-pre-wrap mb-52 sm:text-5xl lg:text-2xl lg:mb-20 2xl:text-5xl">
          Unlocking the{"\n"}Future of the Software{"\n"}Innovation
        </p>
      </div>

      {/* Kart 2 */}
      <div className="container bg-kart2-background bg-cover bg-center flex items-center justify-center h-screen w-full rounded-none lg:aspect-[16/9] lg:h-auto">
        <div className="flex flex-col text-center lg:text-left lg:p-2 lg:w-4/5 2xl:w-3/5">
          <h2 className="text-red-500 font-bold text-4xl sm:text-5xl lg:text-4xl">
            Bigger Team.
          </h2>
          <h2 className="text-red-300 font-bold text-4xl sm:text-5xl lg:text-4xl mt-2">
            More Time.
          </h2>
          <p className="text-white text-sm p-4 sm:text-xl lg:text-md lg:p-1">
            With our expanded team and extended development timeline, we’re committed
            to delivering exceptional quality and innovative solutions. By investing
            more time and resources, we ensure that every project receives the attention
            it deserves and exceeds your expectations.
          </p>
        </div>
      </div>


      {/* Kart 3 */}
      <div className="container bg-white flex flex-col bg-cover bg-center items-center justify-center h-screen w-full lg:flex-row lg:h-auto lg:aspect-[16/9]">

        <div className="h-full w-full relative mb-5 lg:mb-40 lg:w-1/2 2xl:mb-60">
          <Image
            src="/leftViewPhone.png"
            alt=""
            layout="fill"
            objectFit="contain"
            className="rounded-l-lg"
          />
        </div>

        <div className="flex flex-col items-center h-full justify-center lg:w-1/2 lg:mr-8">
          <h1 className="text-red-800 font-bold text-xl mb-5 sm:text-3xl lg:text-3xl 2xl:text-5xl">
            Apps
          </h1>
          <h2 className="text-black font-bold text-md text-center mb-2 sm:text-lg md:text-xl lg:text-xl 2xl:text-2xl">
            We craft engaging applications that captivate and entertain.
          </h2>
          <p className="text-black text-sm font-normal text-center p-2 sm:text-md md:text-lg 2xl:text-lg 2xl:font-normal">
            Explore your city like never before with YerelRota! Uncover hidden gems and personalized recommendations 
            tailored just for you. Start your adventure today!
          </p>

          <div className="flex flex-row justify-center space-x-10 mt-8 mb-36 lg:mb-0">
            <a href="/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/GooglePlay.png"
                  alt="Google Play Store"
                  width={150}
                  height={50}
                  className="hover:scale-105 transition-transform"
                />
              </a>

              <a href="/" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/AppStore.png"
                  alt="Google Play Store"
                  width={150}
                  height={50}
                  className="hover:scale-105 transition-transform"
                />
              </a>
          </div>
        </div>
      </div>

      {/* Kart 4 */}
      <div className="container bg-white flex flex-col bg-cover bg-center items-center justify-center h-screen w-full lg:flex-row lg:h-auto lg:aspect-[16/9]">

        <div className="w-full lg:w-1/2 h-full relative mt-10 lg:mt-0">
          <Image
            src="/IsometricIphone.png"
            alt=""
            layout="fill"
            objectFit="contain"
            className="rounded-l-lg"
          />
        </div>

        <div className="flex flex-col items-center justify-center lg:w-2/3 h-full">
          <h1 className="text-red-800 text-3xl mb-2 font-bold lg:text-4xl 2xl:text-5xl">
            New App !
          </h1>
          <h2 className="text-black font-bold text-5xl text-center mb-5 lg:text-xl lg:mb-2 2xl:text-2xl">
            Coming Soon
          </h2>
          <p className="text-black text-xl text-center lg:text-md 2xl:text-xl">
            Get ready for an exciting new experience. We're launching soon
          </p>

          <div className="flex flex-row justify-center space-x-10 mt-8 mb-36 lg:mb-0">
          <a target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/GooglePlay.png"
                  alt="Google Play Store"
                  width={150}
                  height={50}
                />
              </a>

              <a target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/AppStore.png"
                  alt="Google Play Store"
                  width={150}
                  height={50}
                />
              </a>
          </div>
        </div>
      </div>

    </div>
  );
}
