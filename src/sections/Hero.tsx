import HeroIllustration from "@/assets/hero_illustration.svg?react";

export const Hero = () => {
    return (
        <section className="pt-[64px] md:pt-[80px] bg-white">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-[60px] px-[50px] md:px-[100px] py-[60px] md:py-[100px]">

                {/* Left Text */}
                <div className="flex flex-col gap-[20px] md:gap-[40px]">
                    <div className="flex flex-col gap-[28px] md:gap-[40px]">
                        <p className="font-semibold text-[20px] leading-[30px] text-[#2D2D2D] text-center md:text-left">
                            Hay, I am
                        </p>

                        <h1 className="font-semibold text-[48px] md:text-[80px] leading-tight md:leading-[90px] text-black text-center md:text-left">
                            Henry <br /> Nguyen
                        </h1>
                    </div>

                    <p className="font-normal text-[17px] leading-[27px] text-[#2D2D2D] text-center md:text-left">
                        Embedded System Engineer
                    </p>
                </div>

                {/* Right Illustration */}
                <div className="w-[280px] md:w-[556px] h-auto">
                    <HeroIllustration className="w-full h-auto" />
                </div>

            </div>

        </section >
    );
};