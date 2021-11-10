import * as React from 'react';

const ImageViewer = ()=>{

    const hidePreview = ()=>{
        const imagePreviewDiv = document.querySelector('.image-viewer');
        imagePreviewDiv.style.display = 'none';
    };

    return (
        <aside id="image-viewer" className="image-viewer">
            <span className="image-viewer__close" onClick={() => hidePreview()}>
                &times;
            </span>
            <div className="image-viewer__content">
                <img className="image-viewer__img" src="" alt="preview"/>
            </div>
            
        </aside>
    )
};

export default ImageViewer;