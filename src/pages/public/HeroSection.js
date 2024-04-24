import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainButton from '../../components/MainButton';
import Image1 from '../../assets/images/img1.jpg';
import Image2 from '../../assets/images/img2.jpg';
import Image3 from '../../assets/images/img3.jpg';

const DivCarousel = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 800px;

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
    height: 100%;
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
    font-size: 1.5rem;
    text-transform: uppercase;

    @media (min-width: 576px) {
        font-size: 2rem;
    }
    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;
const Pagraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 500;
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
        <section style={{padding: "0"}}>
            <DivCarousel>
                <CarouselImage className={currentImageIndex === 0 ? 'active' : ''} src={Image1} alt="Imagen 1" />
                <CarouselImage className={currentImageIndex === 1 ? 'active' : ''} src={Image2} alt="Imagen 2" />
                <CarouselImage className={currentImageIndex === 2 ? 'active' : ''} src={Image3} alt="Imagen 3" />
                <CarouselContent>

                    <Title >¿Listo para un corte de cabello que resalte tu estilo y personalidad?</Title>
                    <Pagraph >
                        Atención Solo con reserva de cita previa.
                    </Pagraph >
                    <MainButton href='https://wa.me/59169404756?text=¡Hola!.%20Quiero%20Agendar%20una%20cita.' target="_blank">
                        <FontAwesomeIcon icon={faWhatsapp} style={{fontSize: "1.5rem"}} />
                        Agendar cita
                    </MainButton>
                </CarouselContent>
                <ProgressBar style={{ width: `${((currentImageIndex + 1) / 3) * 100}%` }} />
            </DivCarousel>
        </section>
    );
}

export default HeroSection;