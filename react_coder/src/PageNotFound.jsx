import { Link } from "react-router";

function PageNotfound(){
  return(
    <div style={{textAlign:"center"}}>
      <h1>Page Not Found </h1>
      <div>
        <Link to="/">Go to Home Page</Link>
      </div>
      <img style={{width:"%"}} src="https://cdna.artstation.com/p/marketplace/presentation_assets/003/430/262/large/file.jpg?1706950301"/>
    </div>
  )
}

export default PageNotfound;
