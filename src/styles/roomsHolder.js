import styled from "styled-components";
export const RoomsHolderContainer = styled.div`
   display: grid;
   grid-gap: 30px;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   margin: 4rem 2rem;
`;
export const SingleRoomStyled = styled.div`
   margin: 3rem 1.5rem;
   display: grid;
   grid-gap: 20px;
   grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

   & img {
      width: 100%;
      -webkit-box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 2px 7px 1px rgba(0, 0, 0, 0.75);
   }
`;

export const DetailsHolder = styled.div`
   margin: 3rem 1.5rem;
   display: grid;
   grid-gap: 100px;
   grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
   font-family: Georgia, "Times New Roman", Times, serif;
   & h2 {
      letter-spacing: 2px;
      padding: 1rem 0;
   }
   & p {
      font-size: 1.2rem;
      word-spacing: 2px;
   }
`;
export const SubdetailsHolder = styled.ul`
   margin: 2rem 1.5rem;
   list-style: none;
   display: grid;
   grid-gap: 20px;
   grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
   font-family: Georgia, "Times New Roman", Times, serif;
   font-size: 1.2rem;
`;
