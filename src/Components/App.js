import React from "react"
import unsplash from "../Api/unsplash"
import Searchbar from "./Searchbar"
import Imagelist from "./Images";


class App extends React.Component {

    state = {images : [], searched : false};

    onSearchSubmit = async text => {
        const response = await unsplash.get('/search/photos',{
        params : {query : text},
        });
        this.setState({images: response.data.results, searched: true});
    }   

    render(){

    return(
        <div className = "ui container" style = {{marginTop:"30px"}}>
            <Searchbar onSubmit = {this.onSearchSubmit}/>
            <Imagelist images = {this.state.images} searched = {this.state.searched}/>
        </div>
    );
    }
}

export default App;