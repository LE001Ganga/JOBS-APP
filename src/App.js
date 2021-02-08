import React,{Component} from 'react';
import data from './data/data.json'
export default class App extends Component{
  constructor(){
    super();
    this.state={
      searchString:""
    }
  }
  setSearchString=(event)=>{
    this.setState({
      searchString:event.target.value
    })
  }
  render(){
    var searchKey=this.state.searchString;
    var filteredData=data.filter(jobTitle=>{
      return jobTitle.title.toLowerCase().indexOf(searchKey.toLowerCase())!==-1
    })
    console.log(filteredData)
    return(
      <div className="container">
        <header className="bg-primary text-center text-white p-2">
          <h1>Search Job Here....</h1>
        </header>
        <div className="row justify-content-center">
           <div className="col-lg-6 col-md-10 mt-3">
             <form>
               <input type="text" className="form-control"
               placeholder="Enter search string....." 
               onKeyUp={(evnetString)=>{this.setSearchString(evnetString)}}/>
             </form>
           </div>  
        </div>
        <div className="row justify-content-center">
          {filteredData.map((item,index)=>(
            <div className="col-lg-3 col-md-5">
              <div className="card mt-3">
                <div className="card-body" key={index}>
                  
                  <h2 className="text-primary">{item.title}</h2>
                  <br />
                  
                  <h2 className="text-danger">{item.company} </h2>
                  <p className="text-success">{item.type}</p>
                  {/* <p> {item.description}</p> */}
                  <p>{item.location}</p>                 

                </div></div></div>
          ))}

        </div>
      </div>
    )
  }
}