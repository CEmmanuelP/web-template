import { NavLink } from "react-router-dom";

const IndexPage = () => {
    return (
        <>
            <div className="w-full max-w-screen-lg m-auto">
                <div className="p-4 text-2xl font-bold bg-blue-300 font-Fira">
                    Indexpage
                </div>
                <div className="grid grid-cols-3 gap-3 p-6 mt-8 border border-gray-100 border-solid">
                    <NavLink
                        to="/profile-card"
                        className="p-4 text-center border border-orange-300 border-solid rounded-md"
                    >
                        profile card
                    </NavLink>
                    <NavLink
                        to="/city-animation"
                        className="p-4 text-center border border-solid rounded-md border-lime-300"
                    >
                        city animation
                    </NavLink>
                    <NavLink
                        to="/panorama"
                        className="p-4 text-center border border-solid rounded-md border-emerald-300"
                    >
                        panorama page
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default IndexPage;
