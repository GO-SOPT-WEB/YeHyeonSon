import React from 'react'
import styled from 'styled-components'

const ErrorMessage = () => {
  return (
    <ErrorWrapper> Error 404 : Not Found 해당 도시이름을 찾을 수 없습니다 </ErrorWrapper>
  )
}

export default ErrorMessage

const ErrorWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
    
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.Blue};
`