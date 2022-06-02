import styled from "styled-components";

export const CtaLabel = styled.span`
  font-family: 'Graphik';
  font-size: .875rem;
  font-weight: 600;
`

export const CtaLink = styled.a`
  background-color: #9f8de4;
  border: none;
  border-radius: 1.75rem;
  color: #000;
  display: block;
  margin-top: 2rem;
  padding: 1rem 0;
  text-align: center;
  text-decoration: none;
  width: 100%;

  @media (min-width: 500px){
    width: 265px;
  }
`

export const FlexHeading = styled.div`
  @media (min-width: 991px){
    flex-basis: 65%
  }
`

export const FlexSubheading = styled.div`
  margin-top: 2rem;

  @media (min-width: 767px){
    width: 640px;
  }

  @media (min-width: 991px){
    width: 415px;
    margin-top: 0;
  }
`

export const Header = styled.header `
  @media (min-width: 991px){
    display: flex;
  }
`

export const Heading = styled.h2 `
  color: ${({ color }) => color };
  font-family: 'Caslon';
  font-size: 3.65rem;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.1;
  text-transform: uppercase;

  @media (min-width: 500px){
    font-size: 5rem;
  }
  
  @media (min-width: 1200px){
    font-size: 6rem;
  }
`

export const Subheading = styled.h3 `
  font-family: 'Graphik-Regular';
  font-weight: lighter;
  font-size: 1rem;
  line-height: 1.8;

  @media (min-width: 991px){
    font-size: 1.125rem;
  }
`