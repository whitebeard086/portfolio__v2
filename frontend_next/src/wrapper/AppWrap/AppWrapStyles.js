import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
`

export const AppWrapper = styled.div`
    width: 100%;
`

export const Copyright = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 1rem 5rem;
    position: fixed;
    bottom: 0;
    right: 0;
    
    p{
        text-transform: capitalize;
        font-weight: 200;
        color: white;
    }
`

export const Text = styled.p`

`