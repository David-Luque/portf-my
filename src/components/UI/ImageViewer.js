import * as React from 'react';

const ImageViewer = ({ image, name })=>{
    return (
        <div className="image-viewer">
            <span>X</span>
            <img src={image} alt={`${name} preview`}/>
        </div>
    )
};

export default ImageViewer;