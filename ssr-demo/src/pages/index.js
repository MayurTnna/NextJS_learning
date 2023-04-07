import React, { useEffect, useState } from "react";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return{
    props : {
      todos : data,
    }
  }
}

const index = ({todos}) => {
  // const [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const data = await res.json();
  //     setTodos(data);
  //   };
  //   getData();
  // }, []);
  return (
    <div>
      <h1>index</h1>
      {console.log(todos)}
      {todos.length === 0 ? (
        <h1>loading</h1>
      ) : (
        todos.map((item) => (
          <div key={item.id}>
            <p>
              {item.id} : {item.title}
            </p>
            <hr/>
          </div>
        ))
      )}
    </div>
  );
};

export default index;

//advantages
// faster page loading faster pag
// rendering there's, firstly here HTML is generated at server than sended to browser

