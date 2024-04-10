import { useState, useEffect } from 'react';
import styled from 'styled-components';
import RotatingCircle from '../../components/RotatingCircle';
import MainButton from '../../components/MainButton';

const DivCarousel = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
        z-index: 1;
    }
`;
const ProgressBar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.625rem;
    background-color: ${props => props.theme.primary[60]};
    width: 0;
    z-index: 2;
    transition: all 1s ease-in-out;
`;
const CarouselImage = styled.img`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    opacity: 0;
    transition: opacity 1s ease-in-out;

    &.active {
        opacity: 1;
    }
`;
const CarouselContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: ${props => props.theme.text[10]};
`;
const Title = styled.h1`
    font-size: 2.5rem;
`;
const Pagraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: ${props => props.theme.text[30]};
`;


const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <section>
            <DivCarousel>
                <CarouselImage className={currentImageIndex === 0 ? 'active' : ''} src="" alt="Imagen 1" />
                <CarouselImage className={currentImageIndex === 1 ? 'active' : ''} src="" alt="Imagen 2" />
                <CarouselImage className={currentImageIndex === 2 ? 'active' : ''} src="" alt="Imagen 3" />
                <CarouselContent>

                    <Title > MANTENDREMOS TU LOOK IMPECABLE </Title>
                    <Pagraph >
                        El mejor lugar para tu corte de cabello (Página web en construcción)
                    </Pagraph >
                    <RotatingCircle size="48px" $borderwidth="4px" style={
                        { position: 'absolute', top: '10px', left: '-50px', transform: 'translateX(-50%)' }

                    } />
                    <MainButton>Reservar</MainButton>
                </CarouselContent>
                <ProgressBar style={{ width: `${((currentImageIndex + 1) / 3) * 100}%` }} />
            </DivCarousel>
        </section>
    );
}

export default HeroSection;