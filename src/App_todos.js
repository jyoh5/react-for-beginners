// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";

// function Hello() {
//   useEffect(() => {
//     console.log("created");
//     return () => console.log("destroyed");
//   }, [])
//   return <h1>Hello</h1>
// }


function App() {
  // simple to-do-list
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  }
  return <div>
    <h1>My To Dos ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input value={toDo} onChange={onChange} type="text" placeholder="write your to do~!"/>
      <button>Add To Do</button>
    </form>
    <hr />
    <ul>
      {toDos.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
  </div>;







  // const [showing, setShowing] = useState(false);
  // const onClick = () => setShowing(prev => !prev);
  // return <div>
  //   <button onClick={onClick}>{showing? "Hide" : "Show"}</button>
  //   {showing ? <Hello/> : null}
  // </div>;




  // const [keyword, setKeyword] = useState("");
  // const onChange = (e) => setKeyword(e.target.value);
  // const [counter, setValue] = useState(0);
  // const onClick = () => setValue((prev) => prev + 1);
  // console.log("run all", counter);
  // useEffect(() => { console.log("run once"); }, []);
  // useEffect(
  //   () => { if (keyword !== "" && keyword.length > 0) console.log("Search", keyword); }, 
  //   [keyword]
  // );
  // return (
  //   <div>
  //     <h1 className={styles.title}>Welcome React!</h1>
  //     <input value={keyword} onChange={onChange} type="text" placeholder="Search here" />
  //     <h3>{counter}</h3>
  //     <button onClick={onClick}>click</button>
  //     <Button text="Continue"/>
  //     <Button text="Change"/>
  //   </div>
  // );
}

export default App;
