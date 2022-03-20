import styled from "styled-components";

export const Container = styled.section`
  background: rgba(93, 97, 124, 0.4);
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 0 5rem;
  margin: 0 5rem;

  @media ${props => props.theme.breakpoints.xmd} {
    padding: 0;
    margin: 0 2rem;
  }
`;

export const Title = styled.h2`
    font-size: 3rem;
    margin-bottom: 3rem;

    @media ${props => props.theme.breakpoints.md} {
        font-size: 2rem;
    }

    @media ${props => props.theme.breakpoints.sm} {
        font-size: 1.7rem;
    }
`

export const FooterCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;

    @media ${props => props.theme.breakpoints.xmd} {
        flex-direction: column;
    }
`

export const FooterCard = styled.div`
    display: flex;
    align-items: center;
    width: 250px;
    background: rgba(93, 97, 124, 0.3);
    padding: .5rem;
    border-radius: 8px;
`

export const Image = styled.img`
    width: 50px;
    object-fit: cover;
`

export const CardItem = styled.a`
    color: rgb(45, 46, 73);
    font-weight: 800;
    padding: 1rem;
`

export const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 90%;

    @media ${props => props.theme.breakpoints.xmd} {
        width: 100%;
    }
`

export const FormItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    outline: none;
    background: rgba(93, 97, 124, 0.3);
    color: rgb(45, 46, 73);
    font-weight: 800;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    width: 80%;
`

export const ContactMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%
`

export const Message = styled.textarea`
    width: 80%;
    outline: none;
    border: none;
    min-height: 130px;
    border-radius: 5px;
    padding: 1rem;
    font-weight: 800;
    color: rgb(45, 46, 73);
    background: rgba(93, 97, 124, 0.3);
`

export const Button = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  outline: none;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
  color: rgba(255, 255, 255);
  background: rgb(45, 46, 73);
  transition: all 0.4s ease;

  &:hover {
      transform: scale(0.99);
  }

  &:active {
      transform: scale(1.01);
  }
`

export const SuccessMessage = styled.div`

`

export const Text = styled.h3`

`