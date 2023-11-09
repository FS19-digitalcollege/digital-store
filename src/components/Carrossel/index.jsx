import styled from "styled-components";

const Carrossel = () => {
    return (
        <>
            <CarrosselContainer>
                <CarrosselSlides>
                    <CarrosselSlide>Banner 1</CarrosselSlide>
                    <CarrosselSlide>Banner 2</CarrosselSlide>
                    <CarrosselSlide>Banner 3</CarrosselSlide>
                </CarrosselSlides>
                <CarrosselDots>
                    <CarrosselDot>Dot 1</CarrosselDot>
                    <CarrosselDot>Dot 2</CarrosselDot>
                    <CarrosselDot>Dot 3</CarrosselDot>
                </CarrosselDots>
            </CarrosselContainer>
        </>
    );
}

const CarrosselContainer = styled.div``;
const CarrosselSlides = styled.div``;
const CarrosselSlide = styled.div``;
const CarrosselDots = styled.div``;
const CarrosselDot = styled.div``;

export default Carrossel;