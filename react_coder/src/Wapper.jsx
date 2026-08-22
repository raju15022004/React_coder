function Wrapper({children}){
  return(
    <div style={{color:"green",border:"5px solid green",width:"300px"}}>
      {/* <h1>Hello Everyone</h1> */}
      {children}
    </div>
  )
}

export default Wrapper;
