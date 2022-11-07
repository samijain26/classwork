import axios from "axios";

import { useEffect, useRef, useState } from "react";

function Todos({ user }) {
  let [todos, setTodos] = useState([]);
  let [DeleteTodos, setDeleteTodos] = useState([]);
  let [updateToDo, setUpdateToDo] = useState([]);
  let notesRef = useRef();

  const getAllTodos = async () => {
    let token = localStorage.getItem("token");
    // console.log('2:',token)
    try {
      const response = await axios.get("http://localhost:8080/todos/index", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTodos(response.data.todos);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(todos);
  useEffect(() => {
    console.log("testing");
    getAllTodos();
  }, [DeleteTodos, updateToDo]);

  const deleteItem = async (id) => {
    let token = localStorage.getItem("token");
    const remove = await axios.delete(
      `http://localhost:8080/todos/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("2", remove.data.todos);
    setDeleteTodos([...todos]);
  };
  // console.log(object)
  const updateItem = async (id) => {
    let token = localStorage.getItem("token");
    console.log("23", updateToDo);
    const update = await axios.put(
      "http://localhost:8080/todos/update",
      {
        id: id,
        notes: updateToDo,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("2", update.data.todos);
    setUpdateToDo([...todos]);
     
  };

   const upateHandler = (e) => {
     setUpdateToDo(e.target.value);
    
    // setUpdateToDo('')
   };
  const handleSubmit = async (event) => {
    event.preventDefault();

    let token = localStorage.getItem("token");

    let newTodo = {
      notes: notesRef.current.value,
      user,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/todos/add",
        newTodo,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      setTodos([...todos, response.data.todos]);
      notesRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Todos</h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "20px",
        }}
      >
        {todos?.map((t) => {
          return (
            <>
              <li style={{ padding: "15px" }} key={t?._id}>
                {t?.notes}
                {/* <img
                  style={{ height: "220px", width: "200px" }}
                  src={t?.notes}
                /> */}
                <button onClick={() => deleteItem(t._id)}>Delete</button>
              </li>
              <input type="text" onChange={upateHandler}></input>
              <button onClick={() => updateItem(t._id)}>Update</button>
            </>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={notesRef} />
        <br />
        <br />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default Todos;

// import axios from "axios";
// import { useEffect, useRef, useState } from "react";

// // import todoService from "../services/todoService";

// let initialRender = true;

// function Todos({ user }) {
//   let [todos, setTodos] = useState([]);
//   let notesRef = useRef();

//   const getTodos = async () => {
//     try {
//       const response = await todoService.index();
//       console.log(response.data.todos);
//       setTodos(response.data.todos);
//       console.log(response);
//     } catch (e) {
//       console.log("test");
//     }
//   };

//   useEffect(() => {
//     if (initialRender) {
//       console.log("what");
//       getTodos();
//       initialRender = false;
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(notesRef.current.value);
//     let todo = {
//       notes: notesRef.current.value,
//       user,
//     };
//     try {
//       const response = axios.post("http://localhost:8080/todos", todo);
//       setTodos({ ...todos });
//     } catch (e) {}
//   };

//   return (
//     <div>
//       <h1>Todos</h1>

//       {todos.map((t) => (
//         <p id={t._id}>{t.notes}</p>
//       ))}

//       <form onSubmit={handleSubmit}>
//         <input type="text" ref={notesRef} />
//         <br />
//         <button>Add Todo</button>
//       </form>
//     </div>
//   );
// }

// export default Todos;
