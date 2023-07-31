import { nanoid } from "nanoid";
import "./App.css";
import { useState } from "react";
import Content from "./components/Content";
import Todo from "./components/Todo";

export interface TodoItem {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}
//객체가 가져야하는 속성과 매서드 정리, 기본 구현을 제공하지 않습니다.
const App = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: nanoid(),
      title: "제목1 ",
      content: "내용1",
      isDone: false,
    },
    {
      id: nanoid(),
      title: "제목2 ",
      content: "내용2",
      isDone: true,
    },
  ]);

  return (
    <>
      <h1>투두리스트</h1>
      <Content todos={todos} setTodos={setTodos} />
      <Todo todos={todos} setTodos={setTodos} isDone={false} />
      <Todo todos={todos} setTodos={setTodos} isDone={true} />
    </>
  );
};

export default App;
