import styled from "styled-components";

interface TodoItemProps {
    id: number;
    content: string;
    isDone: boolean;
    createdDate: number;
  }

const TodoItem = ({id, content, isDone, createdDate}: TodoItemProps) => {
  return (
    <TodoItemWrapper>
      <TodoCheckBox checked={isDone} type="checkbox" />
      <TodoTitle>{content}</TodoTitle>
      <TodoDate>{new Date(createdDate).toLocaleDateString()}</TodoDate>
      <DeleteButton>삭제</DeleteButton>
    </TodoItemWrapper>
  );
};

export default TodoItem;

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.Black};
  ${({ theme }) => theme.fonts.Content};
`;

const TodoCheckBox = styled.input`
  width: 1.5rem;
`;

const TodoTitle = styled.span`
  flex: 1;
  font-size: 14px;
`;

const TodoDate = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.Gray};
`;

const DeleteButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.Blue};
  background-color: ${({ theme }) => theme.colors.Gray};
  ${({ theme }) => theme.fonts.Content};
  font-size: 14px;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
