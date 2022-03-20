import styled from 'styled-components'

export const StyledHeader = styled.header`
    height: 150px;
    border-bottom: .2rem solid ${props => props.theme.colors.lightGrey};

    display: flex;
    align-items: center;
    justify-content: flex-start;
 
    
    img {
        margin-left: 2.4rem;
    }

    h1 {
        margin-left: 2rem;
       
        color: ${props => props.theme.colors.darkPurple};

        span {
            color: black;
        }
    }

`