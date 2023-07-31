import React, { SetStateAction, useState } from "react";
import { TodoItem } from "../App";
import { nanoid } from "nanoid";

interface Contents {
  todos: TodoItem[];
  setTodos: React.Dispatch<SetStateAction<TodoItem[]>>;
  //props 타입 지정 함수
  //https://newbedev.com/passing-usestate-as-props-in-typescript 이 사이트 참고하기
}

const Content: React.FC<Contents> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  //FC는 react안에 저장되어있는 모듈로 FunctionComponent라는 뜻이다.

  const 타이틀값 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const 본문값 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };
  //input 상태 관리하기
  //그럼, onChange 의 e 객체의 입을 React.ChangeEvent<HTMLInputElement>로 지정해서 구현을 하고,
  //onSubmit도 마찬가지로 커서를 올리면 나타나는 React.FormEvent < HTM타LFormElement > 를 e 객체의 타입으로 지정해서 구현해보겠습니다.

  const addTodo = (): void => {
    const newTodo = {
      id: nanoid(),
      title,
      content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <label>제목 :</label> <input value={title} onChange={타이틀값} />
      <label>내용 :</label> <input value={content} onChange={본문값} />
      <button onClick={addTodo}>추가하기</button>
    </div>
  );
};

export default Content;
