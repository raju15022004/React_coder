import styled from "styled-components"

function App(){

  // const Heading=styled.h1`
  // color:red;
  // border:1px solid green;

  // `

  const Heading=styled.h1({
    color:'red',
    border:'1px solid green',
    borderRadius:'5px',
    margin:'20px',
    padding:'20px',
  })

  const StyleBtn=styled.button`
  color:red;
  width:120px;
  height:40px;
  margin:20px
  `

  return(

  <>
   <h1>hello</h1>
   <Heading>Hello Heading</Heading>
   <Heading>Hello Heading</Heading>
   <Heading>Hello Heading</Heading>
   <Heading>Hello Heading</Heading>
   <StyleBtn>Login</StyleBtn>
  </>
  )
}

export default App;
