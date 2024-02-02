import React,{useState} from 'react'

const About = () => {
   
const [mystyle,setMystyle]= useState({
    color:"black",
    backgroundColor:"white"
   });
const [btntext, setBtntext] = useState("Enable Dark Mode");
const handleStyle=()=>{
   if(mystyle.color==="black"){
    setMystyle({
        color:"white",
        backgroundColor:"black"
       })
    setBtntext("Enable Light Mode");
   }
   else{
    setMystyle({ 
         color:"black",
        backgroundColor:"white"
    });
    setBtntext("Enable Dark Mode");

}
}
  return (
    <div>
      <div className="card my-3" style={mystyle}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a  className="btn btn-primary" href='/' onClick={handleStyle}>{btntext}</a>
  </div>
</div>
    </div>
  )
}

export default About
