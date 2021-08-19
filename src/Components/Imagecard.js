import React from 'react'
import "../Css/imagelist.css"


class Imagecard extends React.Component {

    constructor(props){
        super(props);

        this.state = {span: 0};

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpan);
        //console.log(this.imageRef.current);
        //console.log(this.imageRef.current.clientHeight);
    }

    setSpan = () =>{
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height/10)
        this.setState({span})
    }


    render(){
        return (
        <div style = {{gridRowEnd:`span ${this.state.span}`}}>
            <img
                className = "ui medium rounded image"
                ref = {this.imageRef} 
                alt = {this.props.image.alt_description}
                src ={this.props.image.urls.small}
                key = {this.props.image.id}
                />
        </div>
        )
    }
}

export default Imagecard;