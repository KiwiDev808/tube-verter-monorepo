import styled from "styled-components";

export const ButtonSearch = styled.button`
  margin-top: 2.4rem;
  width: calc(100% - 10vw);
  max-width: 600px;
  padding: 1.6rem;

  background-color: ${props => props.theme.colors.lightPurple};
  font-size: 2.4rem;
  font-weight: 500;

  color: white;
  border-radius: 0.8rem;
  font-family: "Roboto Slab";

  cursor: pointer;

  border: .1rem solid;
  transition: all 0.4s ease-in-out;

  &:hover {
   
    background-color: ${props => props.theme.colors.hoverPurple};
  }
 
`;

export const ButtonDownload = styled(ButtonSearch)`
    max-width: 24rem;
    
    align-self: center;
    
`
