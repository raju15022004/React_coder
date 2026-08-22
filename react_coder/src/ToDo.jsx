function ToDo(){

  function callFun(){
    alert("function called")
  }

  return(
    <div>
      <h1>Anil Sidhu</h1>
      <img
      src="https://cdn.pixabay.com/photo/2018/02/18/13/10/nature-3162233_1280.jpg"
      alt="Anil Sidhu"
      class="photo"

      />

      <ul>
        <li>Invent new traffic light</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
      <button onClick={callFun}>Click Me</button>
    </div>
  )
}

export default ToDo;
