import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faStickyNote } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProfileCardPage = () => {
    return (
        <>
            <div className="bg-[#ebfaff] w-screen h-screen">
                <section className="wrap w-[340px] border border-solid border-gray-200 p-[30px] bg-white  m-auto shadow-[10px_10px_30px_rgba(0, 0, 0, 0.1)] rounded-[10px]">
                    <nav className="flex justify-between w-full menu">
                        <Link to="#" className="text-[20px] text-[#666]">
                            <FontAwesomeIcon icon={faBars} />
                        </Link>
                        <Link to="#" className="text-[20px] text-[#666]">
                            <FontAwesomeIcon icon={faStickyNote} />
                        </Link>
                    </nav>
                    <article className="w-full text-center profile font-['arial']">
                        <div
                            className="rounded-full shadow-[5px_15px_30px_rgba(173, 216, 230, 0.8)] w-[200px] h-[200px] m-auto mb-[20px]"
                            style={{
                                boxShadow:
                                    "5px 15px 30px rgba(173, 216, 230, 0.8)",
                            }}
                        >
                            <img
                                src="https://cdn.pixabay.com/photo/2021/10/16/06/13/girl-6714026_960_720.jpg"
                                alt="profile img"
                                className="w-full h-full rounded-full"
                            />
                        </div>

                        <h1 className="font-bold text-[22px] leading-none text-[#555] mb-1">
                            NOAH EUGENE
                        </h1>
                        <h2 className="text-[12px] font-normal text-[#bbb] mb-7">
                            JS INTERACTIVE DEVELOPER
                        </h2>

                        <Link
                            to="#"
                            className="block w-[180px] h-8 m-auto bg-[#444] rounded-2xl font-bold text-[10px] text-white leading-8 text-center bg-gradient-to-tr from-[#4affff] to-[#35e0f7]"
                            style={{
                                boxShadow:
                                    "5px 10px 20px rgba(0, 255, 255, 0.493)",
                            }}
                        >
                            VIEW MORE
                        </Link>
                    </article>
                    <ul className="my-6 text-center">
                        <li className="w-full my-2 border-b border-solid border-gray-50">
                            <FontAwesomeIcon
                                icon={faFacebookF}
                                className="w-1/5 text-center text-[#555] text-base mr-2"
                            />
                            <span className="font-normal text-[11px] font-Orbitron text-[#555] tracking-[1px]">
                                Visit My Facebook page.
                            </span>
                        </li>
                        <li className="w-full my-2 border-b border-solid border-gray-50">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="w-1/5 text-center text-[#555] text-base mr-2"
                            />
                            <span className="font-normal text-[11px] font-Orbitron text-[#555] tracking-[1px]">
                                chrisp3@daum.net
                            </span>
                        </li>
                    </ul>
                    <nav className="w-full text-center">
                        <Link
                            to="#"
                            className="inline-block w-[30px] h-[30px] rounded-full mx-[10px] bg-[#35e0f7] on"
                            style={{
                                boxShadow:
                                    "5px 5px 10px rgba(74, 255, 255, 0.7)",
                            }}
                        ></Link>
                        <Link
                            to="#"
                            className="inline-block w-[30px] h-[30px] rounded-full mx-[10px] bg-[#55f5cd]"
                            style={{
                                boxShadow:
                                    "5px 5px 10px rgba(85, 245, 178, 0.7)",
                            }}
                        ></Link>
                        <Link
                            to="#"
                            className="inline-block w-[30px] h-[30px] rounded-full mx-[10px] bg-[#ff80df]"
                            style={{
                                boxShadow:
                                    "5px 5px 10px rgba(255, 128, 223, 0.7)",
                            }}
                        ></Link>
                        <Link
                            to="#"
                            className="inline-block w-[30px] h-[30px] rounded-full mx-[10px] bg-[#a794fd]"
                            style={{
                                boxShadow:
                                    "5px 5px 10px rgba(167, 148, 253, 0.7)",
                            }}
                        ></Link>
                    </nav>
                </section>
            </div>
        </>
    );
};

export default ProfileCardPage;
