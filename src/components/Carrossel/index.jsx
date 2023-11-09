import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Carrossel = () => {
    const [position, setPosition] = useState(0);
    return (
        <>
            <CarrosselContainer>
                <CarrosselSlides $position={position}>
                    <CarrosselSlide>
                        <CarrosselContent>
                            <h6>Melhores ofertas personalizadas</h6>
                            <h2>Queima de <br /> estoque Nike 🔥</h2>
                            <p>Consequat culpa exercitation mollit nisi excepteur <br /> do do tempor laboris eiusmod irure consectetur.</p>
                            <Link></Link>
                        </CarrosselContent>
                    </CarrosselSlide>
                    <CarrosselSlide>
                        <CarrosselContent>
                            <h6>Melhores ofertas personalizadas</h6>
                            <h2>Queima de <br /> estoque Nike 🔥</h2>
                            <p>Consequat culpa exercitation mollit nisi excepteur <br /> do do tempor laboris eiusmod irure consectetur.</p>
                            <Link></Link>
                        </CarrosselContent>
                    </CarrosselSlide>
                    <CarrosselSlide>
                        <CarrosselContent>
                            <h6>Melhores ofertas personalizadas</h6>
                            <h2>Queima de <br /> estoque Nike 🔥</h2>
                            <p>Consequat culpa exercitation mollit nisi excepteur <br /> do do tempor laboris eiusmod irure consectetur.</p>
                            <Link></Link>
                        </CarrosselContent>
                    </CarrosselSlide>
                </CarrosselSlides>
                <CarrosselDots>
                    <CarrosselDot className={position == 0 && 'active'} onClick={() => setPosition(0)}></CarrosselDot>
                    <CarrosselDot className={position == 1 && 'active'} onClick={() => setPosition(1)}></CarrosselDot>
                    <CarrosselDot className={position == 2 && 'active'} onClick={() => setPosition(2)}></CarrosselDot>
                </CarrosselDots>
            </CarrosselContainer>
        </>
    );
}

const CarrosselContainer = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
`;
const CarrosselSlides = styled.div`
    width: 300%;
    display: flex;
    position: absolute;
    top: 0;
    left: calc(-100% * ${props => props.$position || 0});
    transition: all 500ms ease;
`;
const CarrosselSlide = styled.div`
    width: 100%;
`;
const CarrosselContent = styled.div`
    & h6{
        color: #F6AA1C;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.75px;
        margin-bottom: 20px;
    }
    & h2{
        color: #1f1f1f;
        font-size: 64px;
        font-weight:800;
        letter-spacing: 1px;
        line-height: 66px;
    }
    & p{
        color: #474747;
        font-size: 18px;
        line-height: 34px;
        letter-spacing: 0.75px;
        margin-top: 20px;
    }
    & a{

    }
`;
const CarrosselDots = styled.div`
    position: absolute;
    bottom: 53px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
`;
const CarrosselDot = styled.div`
    width: 12px;
    height: 12px;
    background-color: #cccccc;
    border-radius: 100%;
    transition: all .3s;

    &.active {
        background-color: #C92071;
    }
`;

export default Carrossel;