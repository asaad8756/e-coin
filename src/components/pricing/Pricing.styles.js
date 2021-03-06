import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PricingSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 70px 0;

    @media screen and (max-width: 768px) {
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const PricingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;

export const PricingHeading = styled.h2`
    font-size: 3rem;
    margin-bottom: 24px;

     @media screen and (max-width: 768px) {
        font-size: 2.5rem;        
    }
`;

export const PricingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;

export const PricingCard = styled(Link)`
    background: #1b2030;
    width: 280px;
    height: 500px;
    text-decoration: none;
    border-radius: 4px;

    &:nth-child(2) {
        margin: 24px;
    }

    &:hover {
        transform: scale(1.06);
        transition: all 0.3s ease-out;
        color: #1c2237;
    }

    @media screen and (max-width: 960px) {
        width: 90%;

        &:hover {
            transform: none;
        }
    }
`;

export const PricingCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    padding: 24px;
    align-items: center;
    color: #fff;
`;

export const PricingCardIcon = styled.div`
    margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
    margin-bottom: 5px;
    font-size: 1.5rem;
`;

export const PricingCardCost = styled.h4`
    font-size: 2rem;
`;

export const PricingCardLength = styled.p`
    font-size: 14px;
    margin-bottom: 24px;
`;

export const PricingCardFeatures = styled.ul`
    margin: 16px 0 32px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
    margin-bottom: 10px;
`;