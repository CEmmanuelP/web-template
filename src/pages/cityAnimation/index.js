import sun from "../../assets/img/cityAnimation/sun.png";
import cloud1 from "../../assets/img/cityAnimation/cloud1.png";
import cloud2 from "../../assets/img/cityAnimation/cloud2.png";
import circle from "../../assets/img/cityAnimation/circle.png";
import townNight from "../../assets/img/cityAnimation/town_night.png";
import townDay from "../../assets/img/cityAnimation/town_day.png";
import man from "../../assets/img/cityAnimation/man.png";
import family from "../../assets/img/cityAnimation/family.png";

const CityAnimationPage = () => {
    return (
        <>
            <div className="w-full h-screen overflow-hidden bg-[#b1e1e2] animate-[sky_linear_20s_infinite]">
                <h1 className="absolute w-[1000px] text-center text-[92px] font-light text-white top-1/2 left-1/2 -translate-x-1/2 translate-y-[150%]">
                    Have a Good Day!!
                </h1>
                <section className="absolute w-[1000px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%]">
                    <article className="absolute w-full h-full sky">
                        <img
                            src={sun}
                            className="absolute -ml-[100px] origin-[center_500px] -top-[150px] left-1/2 animate-[sun_linear_20s_infinite]"
                        />
                        <img
                            src={cloud1}
                            className="absolute left-[10%] -top-[30px] animate-[flow_linear_10s_infinite]"
                        />
                        <img
                            src={cloud2}
                            className="absolute left-0 top-[20px] animate-[flow_linear_20s_infinite]"
                        />
                    </article>
                    <article className="town">
                        <img
                            src={circle}
                            className="absolute bottom-[104px] left-1/2 -ml-[165px] opacity-70 animate-[rotation_linear_20s_infinite]"
                        />
                        <img
                            src={townNight}
                            className="absolute bottom-0 left-[40px]"
                        />
                        <img
                            src={townDay}
                            className="absolute bottom-0 left-[40px]"
                        />
                    </article>
                    <article
                        className="people"
                        className="absolute top-0 left-0 w-full h-full"
                    >
                        <img
                            src={man}
                            className="absolute bottom-0 left-0 animate-[flow_linear_7s_infinite]"
                        />
                        <img
                            src={family}
                            className="absolute bottom-0 left-0 animate-[flow_linear_20s_infinite]"
                        />
                    </article>
                </section>
            </div>
        </>
    );
};

export default CityAnimationPage;
