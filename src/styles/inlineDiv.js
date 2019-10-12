import styled from "styled-components";
export const DivStyle = styled.div`
   display: block;
   height: 5px;
   background: var(--primaryColor);
   width: 10rem;
   margin-left: 50%;
   transform: translateX(-50%);
   margin-bottom: 1rem;
`;
export const HeroStyled = styled.div`
   background-image: url(${(props) => props.img});
   background-repeat: no-repeat;
   background-size: cover;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;
export const UpHeroStyled = styled(HeroStyled)`
   height: 65vh;
`;
