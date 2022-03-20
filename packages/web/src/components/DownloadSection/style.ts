import styled from "styled-components";

export const FigureCaption = styled.figure`
  width: calc(100% - 10vw);
  max-width: 600px;
  height: 30vh;
  max-height: 40vh;
  /* border: .3rem solid ${(props) => props.theme.colors.darkPurple}; */
  box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.7);
  border-radius: 0.4rem;

  margin: 0 auto;
  margin-top: 3.2rem;
`;

export const YoutubeDiv = styled.div`
  margin: 0 auto;
  width: calc(100% - 10vw);
  height: 25vh;
  display: flex;
  flex-direction: column;
  
 

  margin-top: 2rem;



`;

export const DivTitle = styled.div`
    width: 100%;
    
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.lightGrey};

    h3 {
      margin-bottom: 0.8rem;
      font-size: 2.4rem;
      font-weight: 500;
    }
  

`

export const DivDuration = styled.div`
    margin-top: 1.2rem;

    p {
        font-size: 1.8rem;
        font-weight: 500;
    }

`
