import React from 'react'

const Error = () => {
  return (
    <ErrorMessage> Error 404 : 찾을 수 없는 페이지입니다 </ErrorMessage>
  )
}

export default Error

const ErrorMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
    
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.Blue};
`

