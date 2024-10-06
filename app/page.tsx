import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center space-y-4">
      {/* Kart 1 */}
      <div className="container bg-white flex items-center justify-center w-full bg-kart1-background bg-cover bg-center lg:aspect-[16/9] lg:h-auto xxsm:h-screen ">
        <p className="text-4xl font-bold text-center whitespace-pre-wrap lg:mb-20 xxsm:text-3xl mb-52">
          Unlocking the{"\n"}Future of the Software{"\n"}Innovation
        </p>
      </div>

      {/* Kart 2 */}
      <div className="container bg-kart2-background bg-cover bg-center flex items-center justify-center aspect-[16/9] w-full lg:h-auto xxsm:h-screen rounded-none">
        <div className="flex flex-col text-center lg:text-left lg:p-4 lg:w-3/5">
          <h2 className="text-red-500 font-bold lg:text-7xl xxsm:text-4xl">
            Bigger Team.
          </h2>
          <h2 className="text-red-300 font-bold lg:text-7xl mt-2 xxsm:text-4xl">
            More Time.
          </h2>
          <p className="text-white lg:text-lg lg:mt-4 text-sm p-4">
            With our expanded team and extended development timeline, we’re committed
            to delivering exceptional quality and innovative solutions. By investing
            more time and resources, we ensure that every project receives the attention
            it deserves and exceeds your expectations.
          </p>
        </div>
      </div>


      {/* Kart 3 */}
      <div className="container bg-white flex flex-col bg-cover bg-center items-center justify-center lg:flex-row lg:h-auto aspect-[16/9] w-full xxsm:h-screen">

        <div className="w-full lg:mb-64 lg:w-1/2 h-full relative mb-5">
          <Image
            src="/leftViewPhone.png"
            alt=""
            layout="fill"
            objectFit="cover"
            className="rounded-l-lg"
          />
        </div>

        <div className="flex flex-col items-center justify-center lg:w-2/3 h-full">
          <h1 className="text-red-800 text-xl font-bold lg:text-5xl mb-5">
            Apps
          </h1>
          <h2 className="text-black font-bold text-md text-center mb-5 lg:text-xl">
            We Craft Engaging Applications That Captivate and Entertain.
          </h2>
          <p className="text-black text-sm font-bold text-center lg:text-md">
            Explore your city like never before with YerelRota! Uncover hidden gems and personalized recommendations 
            tailored just for you. Start your adventure today!
          </p>

          <div className="flex flex-row justify-center space-x-10 mt-8 mb-40">
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
      
    </div>
  );
}
