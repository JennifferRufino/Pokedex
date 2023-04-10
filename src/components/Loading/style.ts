


import styled, {keyframes} from 'styled-components'

const spinning = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Loading = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;

    
    border: 8px solid blue;
    border-left: 8px solid white;
    animation-name: ${spinning};
    animation-duration: 3s;
    animation-iteration-count: infinite;
`