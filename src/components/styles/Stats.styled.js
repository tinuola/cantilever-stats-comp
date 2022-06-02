import styled from "styled-components";

export const StatsContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2.5rem;

  @media (min-width: 675px){
    border-top: 1px solid #423d6a;
    border-bottom: 1px solid #423d6a;
  }

  @media(min-width: 991px){
    padding-left: 4rem;
    padding-right: 4rem;
  }
`

export const StatItem = styled.div`
  border: 1px solid #423d6a;
  border-right-width: 0;
  flex-basis: 50%;
  padding: 2rem 1.75rem 2.5rem 1.75rem;

  &:nth-child(1),
  &:nth-child(3){
    border-left-width: 0;
  }

  &:nth-child(3),
  &:nth-child(4){
    border-top-width: 0;
  }

  @media (min-width: 675px){
    border-bottom-width: 0px;
    border-top-width: 0px;
    flex-basis: 25%;

    &:nth-child(3){
      border-left-width: 1px;
    }
  }

  @media(min-width: 991px){
    &:nth-child(1){
      border-left-width: 1px;
    }

    &:nth-child(4) {
      border-right-width: 1px;
    }
  }
`

export const StatIcon = styled.img`
  display: block;
  max-width: 100%;
`

export const StatNum = styled.h4`
  font-family: 'Caslon';
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: .5rem;

  &::after {
    content: '${({ suffix }) => suffix }';
    margin-left: .125rem;
  }

  @media(min-width: 991px){
    font-size: 5rem;
  }
`

export const StatText = styled.p`
  font-family: 'Graphik';
  font-size: .75rem;
  text-transform: uppercase;

  @media(min-width: 600px){
    width: 90%;
  }
`