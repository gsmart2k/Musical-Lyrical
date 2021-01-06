import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Zoom from "react-reveal/Zoom"
import {Link} from "react-router-dom"
import Searchbar from "./component/Searchbar"
import Lyricspage from "./component/lyricspage";



class App extends Component {
  state = { 
    searchinput:"",
   }
   

  render() { 

    const handleSearchInput = ()=>{
      return  this.state.searchinput
    }

    const handleSearchChange = (e)=>{
     this.setState({searchinput : e.target.value})
    }

    console.log(this.state.searchinput)
    
    return ( 
      <React.Fragment>
        
        <Zoom>
        <div className="header">
          <h4 className="header-text">Musical</h4>
          <p className="span">Lyrical</p>
        </div>
        </Zoom>
        <BrowserRouter>
      <Route  exact path="/" render={()=> <Searchbar searchInput={this.state.searchinput} onSearchChange={handleSearchChange} />} />
      <Route path="/lyrical" component={Lyricspage}/>
      </BrowserRouter>
      </React.Fragment>
     );
  }
}
 
export default App ;