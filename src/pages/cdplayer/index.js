import styled from "styled-components";

const CdPlayerPage = () => {
    return (
        <CdPlayerPageStyle>
            <article>
                <section className="album">
                    <div className="disk">
                        <div className="disk_inner" />
                    </div>
                </section>
            </article>
        </CdPlayerPageStyle>
    );
};

const CdPlayerPageStyle = styled.div`
    overflow: hidden;
    font-size: 1.2rem;

    article {
        background: linear-gradient(120deg, #0272a4, #f6a564);
        width: 100vw;
        height: 100vh;

        .album {
            position: absolute;
        }
    }
`;

export default CdPlayerPage;
