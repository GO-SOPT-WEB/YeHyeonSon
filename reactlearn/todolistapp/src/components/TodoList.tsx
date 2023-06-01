import styled from "styled-components";
import TodoItem from "./TodoItem";
import { Todo } from "../Types";
import { useState } from "react";

interface TodoListProps {
  todo: Todo[];
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todo,
  onUpdate,
  onDelete,
}: TodoListProps) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const getSearchedTodo = () => {
    return search === ""
      ? todo
      : todo.filter((item) =>
          item.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <TodoListWrapper>
      <TodoListTitle>TodoList🍀</TodoListTitle>
      <SearchBar
        value={search}
        onChange={onChangeSearch}
        type="text"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchedTodo().map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
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
