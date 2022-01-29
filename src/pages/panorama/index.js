import bgvideo from "../../assets/videos/panorama/bg.mp4";
import Card from "../../components/panorama/Card";

const PanoramaPage = () => {
    // const array = [
    //     {
    //         id: 1,
    //         name: "Co Company",
    //     },
    //     {
    //         id: 2,
    //         name: "What's New",
    //     },
    //     {
    //         id: 3,
    //         name: "Members",
    //     },
    //     {
    //         id: 4,
    //         name: "Advertisement",
    //     },
    //     {
    //         id: 5,
    //         name: "DCODELAB",
    //     },
    //     {
    //         id: 6,
    //         name: "Services",
    //     },
    //     {
    //         id: 7,
    //         name: "Promotion",
    //     },
    //     {
    //         id: 8,
    //         name: "Temperature",
    //     },
    // ];

    return (
        <>
            <main
                className="fixed w-full h-full"
                style={{ perspective: "1300px" }}
            >
                <video
                    width="100%"
                    height="100%"
                    autoPlay
                    loop
                    muted
                    className="fixed object-cover w-full h-full opacity-50"
                >
                    <source src={bgvideo} type="video/mp4" />
                </video>
                <section className="w-[600px] h-[800px] absolute top-1/2 left-1/2 -mt-[400px] -ml-[300px] ">
                    {/* {array?.map((card) => {
                        return <Card key={card.id} card={card} />;
                    })} */}
                </section>
            </main>
        </>
    );
};

export default PanoramaPage;
