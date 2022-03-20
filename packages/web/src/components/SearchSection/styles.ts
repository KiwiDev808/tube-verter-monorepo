import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;

  h2 {
    text-align: center;
    font-size: 3rem;
  }
`;

export const StyledInput = styled.input`
  color: rgba(0, 0, 0, 0.5);

  margin-top: 6.2rem;

  border: 0.1rem solid #000;
  border-radius: 0.8rem;

  width: calc(100% - 10vw);
  max-width: 600px;

  font-weight: 500;
  font-size: 1.8rem;
  padding: 2rem;
  padding-right: 5rem;

  background-image: url("assets/lupa.svg");
  background-repeat: no-repeat;
  background-position: 95%;
  font-family: "Roboto Slab";

  &::placeholder {
    text-align: center;
  }

  &:focus {
    transition: all 0.3s ease-in-out;
    outline: none;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  }
`;
