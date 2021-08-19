//import react from 'react'
import Imagecard from "./Imagecard";

const Imagelist = (props) => {

    const images = props.images.map((image) =>{
        return <Imagecard key = {image.id} image = {image}/>
    });

    if(images.length !== 0){
        return <div className = "image-list">{images}</div>   
    } 
    else if(images.length === 0 &&  props.searched === true){
        return <h1 className="ui red message">No images found</h1>
    }
    else{
        return <h1>Happy searching</h1>
    }

}

export default Imagelist;