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
                    value = {this.state.text} 
                    onChange = {(e) => {this.setState({text:e.target.value})}}
                    />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;

