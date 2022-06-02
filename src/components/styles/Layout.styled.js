import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  min-width: 375px;
  padding: 2.5rem 0;  
  width: 100%;
`

export const Divider = styled.hr`
  background-color: #423d6a;
  border: none;
  height: 1px;
  margin: 2.5rem 0;
`

export const Frame = styled.div`
  margin: 0 1.75rem;
  position: relative;

  @media (min-width: 991px){
    margin: 0 4rem;
  }
`