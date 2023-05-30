import styled from "styled-components";

const TodoList = () => {
  return (
    <TodoListWrapper>
      <TodoListTitle>TodoList🍀</TodoListTitle>
      <SearchBar type="text" placeholder="검색어를 입력하세요" />
    </TodoListWrapper>
  );
};

export default TodoList;

const TodoListWrapper = styled.div`
  color: ${({ theme }) => theme.colors.Black};
`;

const TodoListTitle = styled.h4`
  ${({ theme }) => theme.fonts.Content};
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const SearchBar = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.Black};
  margin-bottom: 20px;
  padding-top: 15px;
  padding-bottom: 15px;

  :focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.Blue};
  }
`;
