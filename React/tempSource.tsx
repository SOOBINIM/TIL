import React from "react";
import "./TodoListTemlpate.css";
import "./Form.css";
import "./Search.css";
import { MdDone, MdEditNote, MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";

interface Props {}

interface TodoItemData {
  id: number;
  text: string | undefined;
  complete: boolean;
}

interface State {
  createInput: string;
  updateInput1: string;
  searchInput: string;
  todoItems: TodoItemData[]; // TodoItemData 로 이뤄진 배열
}

class TodoList extends React.Component<Props, State> {
  id: number = 0;

  constructor(props: State) {
    super(props);
    this.state = {
      todoItems: [],
      createInput: "",
      updateInput1: "",
      searchInput: "",
    };
  }

  public onUpdate = (id: number, updateInput: string): void => {
    const { todoItems } = this.state;
    this.setState({
      todoItems: todoItems.map((data) =>
        id === data.id ? { ...todoItems, ...data } : data
      ),
    });
    // console.log("업데이트");
    // const { todoItems } = this.state;
    // const index = todoItems.findIndex((data) => data.id === id); // id 로 인덱스 찾기
    // const selectedItem = todoItems[index]; //  아이템 선택
    // const nextItems = [...todoItems]; // 배열 내용을 복사

    // // nextItems 는 바뀌는 전체 배열 값
    // const nextItem = {
    //   ...selectedItem,
    //   complete: !selectedItem.complete,
    //   text: updateInput,
    // };

    // console.log(
    //   "updateInput : " + updateInput + " nextItem.text : " + nextItem
    // );

    // nextItems[index] = nextItem; // 교체 처리

    // this.setState({
    //   todoItems: nextItems,
    // });
  };

  public onRemove = (id: number): void => {
    this.setState(({ todoItems }) => ({
      todoItems: todoItems.filter((todo) => todo.id !== id),
    }));
  };

  public onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    console.log(value);
    this.setState({
      createInput: value,
    });
  };

  public onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // 페이지 전환 막기
    // input 비우고, todoItems 추가
    console.log("id : " + this.id);
    this.setState(({ todoItems, createInput }) => ({
      createInput: "",
      todoItems: todoItems.concat({
        // concat 사용 이유
        // 이전 배열과 현재의 배열이 달라져 최적화 할 수 있게 된다.
        // push를 사용 하지 않는 이유는 두 배열이 같아지기 떄문에 비교할 수 없고 최적화를 할 수 없다.
        id: this.id++,
        text: createInput,
        complete: false,
      }),
    }));
  };

  public onSearch = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    this.setState({
      searchInput: value,
    });
  };

  public handleToggleEditChange = (
    e: React.FormEvent<HTMLInputElement>
  ): void => {
    const { value } = e.currentTarget;
    console.log("handleToaggleEditChange : " + value);
    this.setState({
      updateInput1: value,
    });
  };

  public handleToggleEdit = (id: number): void => {
    const { todoItems } = this.state;
    const index = todoItems.findIndex((data) => data.id === id); // id 로 인덱스 찾기
    const selectedItem = todoItems[index]; //  아이템 선택
    const nextItems = [...todoItems]; // 배열 내용을 복사

    // nextItems 는 바뀌는 전체 배열 값
    const nextItem = {
      ...selectedItem,
      complete: !selectedItem.complete,
    };

    nextItems[index] = nextItem; // 교체 처리

    this.setState({
      todoItems: nextItems,
    });
  };

  public render() {
    const {
      onChange,
      onSubmit,
      onRemove,
      onUpdate,
      onSearch,
      handleToggleEdit,
      handleToggleEditChange,
    } = this;
    const { createInput, todoItems, updateInput1, searchInput } = this.state;
    // const mapToComponent = (data) => {
    //   data.filter((todoItems) => {
    //     return todoItems.name.indexOf(this.state.searchInput) > -1;
    //   });
    // };

    const todoItemsList = todoItems
      // .filter((data) => {
      //   if (searchInput == null) return data;
      //   else if (data.text?.toLowerCase().includes(searchInput.toLowerCase()))
      //     return data;
      // })

      .map((data) => (
        <li key={data.id}>
          {data.complete ? (
            <form>
              <input
                onChange={handleToggleEditChange}
                defaultValue={todoItems[data.id / 2].text}
                // value={updateInput1}
              />
              <span
                style={{ marginLeft: "0.5rem" }}
                onClick={() => handleToggleEdit(data.id)}
              >
                <MdDone />
              </span>
              <span
                style={{ marginLeft: "0.5rem" }}
                onClick={() => onRemove(data.id)}
              >
                <MdDelete />
              </span>
            </form>
          ) : (
            <div>
              <b>{data.text}</b>
              <span
                style={{ marginLeft: "0.5rem" }}
                onClick={() => handleToggleEdit(data.id)}
              >
                <MdEditNote />
              </span>
              <span
                style={{ marginLeft: "0.5rem" }}
                onClick={() => onRemove(data.id)}
              >
                <MdDelete />
              </span>
            </div>
          )}
        </li>
      ));

    return (
      <main className="todo-list-template">
        <div className="title">
          <h1>오늘 뭐하지?</h1>
          <div className="search">
            <input
              onChange={(e) => onSearch(e)}
              placeholder={"내가.. 뭐..하려 했더라??"}
              value={searchInput}
            ></input>
          </div>
        </div>
        <section className="form-wrapper">
          <div className="form">
            <form onSubmit={onSubmit}>
              <input
                onChange={onChange}
                value={createInput}
                placeholder={"할 일을 입력 하세요."}
              />
              <Button variant="contained" color="secondary" type="submit">
                추가하기
              </Button>
            </form>
          </div>
        </section>
        <section className="todos-wrapper">
          <ul>{todoItemsList}</ul>
        </section>
      </main>
    );
  }
}

export default TodoList;
