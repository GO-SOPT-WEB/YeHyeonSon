import styled from "styled-components";

const TodoEditor = () => {
  return (
    <TodoEditorWrapper>
      <h4>새로운 Todo 작성하기🖍</h4>
      <InputWrapper>
        <input type="text" placeholder="새로운 Todo..." />
        <button>추가</button>
      </InputWrapper>
    </TodoEditorWrapper>
  );
};

export default TodoEditor;

const TodoEditorWrapper = styled.div`
  color: ${({ theme }) => theme.colors.Black};
  ${({ theme }) => theme.fonts.SubTitle};
  margin-top: 2rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  input {
    flex: 1;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.colors.Black};
    border-radius: 0.5rem;
    ${({ theme }) => theme.fonts.Content};
    font-size: smaller;
    
  }

  input :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.Blue};
  }
  
  button {
    cursor: pointer;
    width: 80%;
    border: none;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.Blue};
    ${({ theme }) => theme.fonts.Content};
    font-size: smaller;
    color: ${({ theme }) => theme.colors.White};
  }
`;
