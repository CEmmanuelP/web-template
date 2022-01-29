import styled from "styled-components";

const Card = ({ card }) => {
    return (
        <>
            <CardStyle className="absolute top-0 left-0 w-full h-full article">
                <h1 className="absolute left-0 top-0 text-[30px] opacity-0 transition-[all_0.5s]">
                    {card.name}
                </h1>
                <div className="w-full h-full inner">
                    <div className="w-full h-full border border-solid border-white border-opacity-50 box-border bg-white bg-opacity-5 p-[50px] relative opacity-70 overflow-hidden cursor-pointer transition-[all_0.5s] hover:bg-opacity-[15] hover:scale-105"></div>
                </div>
            </CardStyle>
        </>
    );
};

export default Card;

const CardStyle = styled.article`
    &:hover {
        h1 {
            top: -60px;
            opacity: 1;
        }
    }
`;
