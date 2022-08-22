import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${({ theme }) => theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin: 4rem 2rem;
  }

  @media (max-width: 375px) {
    margin: 0 0;
    height: 100vh;
  }
`
