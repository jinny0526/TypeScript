import React from "react";
import { TodoItem } from "../App";
import { SetStateAction } from "react";

interface TodoTime {
  todos: TodoItem[];
  setTodos: React.Dispatch<SetStateAction<TodoItem[]>>;
  //상위 컴포넌트에서 useState 상태 변경 함수를 넘길 때 정의할 수 있는 타입!
  isDone: boolean;
}

const Todo: React.FC<TodoTime> = ({ todos, setTodos, isDone }) => {
  const deleteTodo = (id: string): void => {
    //https://yamoo9.gitbook.io/typescript/types/function-union-void 참고하기
    //리턴값이 명시적으로 설정되지 않은 경우에 void를 쓴다.
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  //함수형 컴포넌트를 만들 때 React.FC를 사용한다.

  const switchtodo = (id: string): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      {isDone === false && (
        //isdone 부분이 false 일때 뒷부분이 나오게 하는 것!!
        <>
          <h2>todolist</h2>
          {todos
            .filter((todo) => todo.isDone === isDone)
            .map((todo) => {
              return (
                <div key={todo.id}>
                  <div>{todo.title}</div>
                  <div>{todo.content}</div>
                  <button onClick={() => switchtodo(todo.id)}>취소하기</button>
                  <button onClick={() => switchtodo(todo.id)}>완료하기</button>
                  <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
                </div>
              );
            })}
        </>
      )}
      {isDone === true && (
        //isdone 부분이 true 일때 뒷부분이 나오게 하는 것!! 공부하자
        <>
          <h2>Donelist</h2>

          {todos
            .filter((todo) => todo.isDone === isDone)
            .map((todo) => {
              return (
                <div key={todo.id}>
                  <div>{todo.title}</div>
                  <div>{todo.content}</div>
                  <button onClick={() => switchtodo(todo.id)}>취소하기</button>
                  <button onClick={() => switchtodo(todo.id)}>완료하기</button>
                  <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
                </div>
              );
            })}
        </>
      )}
    </>
  );
};

export default Todo;
