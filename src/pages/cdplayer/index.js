import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import iu1 from "../../assets/img/cdplayer/iu_1.jpg";

const CdPlayerPage = () => {
    const [album, setAlbum] = useState();
    const [pageNum, setPageNum] = useState(0);
    const [totalNum, setTotalNum] = useState(3);

    let bgArray = new Array();
    bgArray[0] = ["#0272a4", "#f6a564"];
    bgArray[1] = ["#b6bfc8", "#36595b"];
    bgArray[2] = ["#e58e82", "#6f569f"];

    const contentWrapRef = useRef();

    useEffect(() => {}, []);

    useEffect(() => {
        console.log(pageNum);
        console.log(totalNum);
    }, [pageNum, totalNum]);

    const clickPrevButton = () => {
        if (pageNum > 0) {
            setPageNum(pageNum - 1);
        } else {
            setPageNum(totalNum - 1);
        }
    };

    const clickNextButton = () => {
        if (pageNum < totalNum - 1) {
            setPageNum(pageNum + 1);
        } else {
            setPageNum(0);
        }
    };

    // const pageChangeFunc = () => {
    //     contentWrapRef.current.style.background = `linear-gradient(120deg, ${bgArray[pageNum][0]}, ${bgArray[pageNum][1]})`;

    //     for (let i = 0; i < totalNum; i++) {
    //         if (pageNum === i) {
    //             album[i]
    //         }
    //     }
    // }

    return (
        <CdPlayerPageStyle>
            <article className="contentWrap" ref={contentWrapRef}>
                <section className="album">
                    <div className="disk">
                        <div className="disk_inner" />
                    </div>
                    <a
                        href="https://www.youtube.com/watch?v=nM0xDI5R50E"
                        target="blank"
                        className="coverImg"
                    >
                        <img src={iu1} alt="" />
                    </a>
                </section>
            </article>
            <div className="buttonWrap">
                <button type="button" onClick={clickPrevButton}>
                    PREV
                </button>
                <ul className="pointWrap">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <button type="button" onClick={clickNextButton}>
                    NEXT
                </button>
            </div>
        </CdPlayerPageStyle>
    );
};

const rotateAni = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const CdPlayerPageStyle = styled.div`
    overflow: hidden;
    font-size: 1.2rem;

    .contentWrap {
        background: linear-gradient(120deg, #0272a4, #f6a564);
        width: 100vw;
        height: 100vh;

        .album {
            position: absolute;
            top: 30%;
            left: 30%;
            width: 600px;
            height: 400px;
            /* transition: all 0.4s ease-in-out; */

            &:hover {
                .disk {
                    left: 40%;
                    /* transition-delay: 0s; */
                }
            }

            .coverImg {
                position: absolute;
                width: 400px;
                height: 400px;
                box-shadow: 2px 14px 40px rgba(0, 0, 0, 0.3);

                img {
                    width: inherit;
                    height: inherit;
                }
            }

            .disk {
                position: absolute;
                top: 4px;
                left: 30%;
                width: 392px;
                height: 392px;
                border-radius: 50%;
                background: linear-gradient(120deg, #000, #333333, #000);
                box-shadow: 4px 14px 40px rgba(0, 0, 0, 0.3);
                transition: left 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                animation: ${rotateAni} 10s ease infinite;

                .disk_inner {
                    position: absolute;
                    top: 30%;
                    left: 30%;
                    width: 160px;
                    height: 160px;
                    background-color: #0473a4;
                    border-radius: 50%;
                    border: 3px dashed rgba(255, 255, 255, 0.4);

                    &::after {
                        position: absolute;
                        content: "";
                        top: 50%;
                        left: 50%;
                        width: 10px;
                        height: 10px;
                        background-color: black;
                        border-radius: 50%;
                    }
                }
            }
        }
    }

    /* @media only screen and (max-width: 720px) {
        .contentWrap .album {
            top: 40%;
            width: 300px;
            height: 200px;
        }
    } */

    .buttonWrap {
        position: fixed;
        bottom: 5vh;
        text-align: center;
        width: 100%;

        button {
            padding: 6px 20px;
            margin: 0 3px;
            background-color: #000;
            color: #fff;

            &:hover {
                background-color: #fff;
                color: #000;
            }
        }

        .pointWrap {
            position: relative;
            display: inline-block;
            padding: 0 10px;

            li {
                position: relative;
                display: inline-block;
                width: 10px;
                height: 10px;
                margin: 0 5px;
                text-align: center;
                cursor: pointer;
                background-color: rgba(0, 0, 0, 0.4);
                border-radius: 50%;
                /* transition: background 0.3s ease-out; */

                &:active {
                    background-color: black;
                }
            }
        }
    }
`;

export default CdPlayerPage;
