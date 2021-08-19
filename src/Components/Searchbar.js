import React from "react"
import "../Css/imagelist.css"


class SearchBar extends React.Component{

    state = {text:""}

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.text);
    }
    
    render(){
        
        return (
        <div className = "ui segment">
            <form onSubmit = {this.onFormSubmit} className = "ui form">
                <div className = "field">
                    <label>Image search</label>
                    <input 
                    type="text" 
                    placeholder= "search images..."
                    value = {this.state.text} 
                    onChange = {(e) => {this.setState({text:e.target.value})}}
                    />
                    <button 
                    className = "ui inverted secondary button" 
                    onClick = {this.onFormSubmit} 
                    style = {{marginTop:"10px"}}>Search
                    <i className="search icon" style = {{marginLeft:"10px"}}></i>
                    </button>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;

