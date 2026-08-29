let count=0
function App(){

  return(
  <>
  <h1>Keeping Components Pure</h1>
  <Counter />
  <Counter />
  <Counter />
  <Counter />
    </>
  );
}

const Counter=()=>{
  count=count+1
 return <h1>Counter {count}</h1>
}


export default App;
