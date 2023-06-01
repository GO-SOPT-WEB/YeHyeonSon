import styled from "styled-components";
import { useState, useRef, ChangeEvent } from "react";

interface TodoEditorProps {
  onCreate: (content: string) => void;
}

const TodoEditor: React.FC<TodoEditorProps> = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (!content) {
      inputRef.current?.focus();
      return;
    }
    onCreate(content);
  };

  return (
    <TodoEditorWrapper>
      <h4>새로운 Todo 작성하기🖍</h4>
      <InputWrapper>
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
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
  }

  input :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.Blue};
  }

  button {
    cursor: pointer;
    width: 5rem;
    border: none;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.Blue};
    ${({ theme }) => theme.fonts.Content};
    color: ${({ theme }) => theme.colors.White};
  }
`;
