import React from 'react';
import '../css/Content.css';
import '../css/App.css';

function ContentItem(props) {
    return (
        <div className='committee-col' to={props.path}>
            <div  className="pop_effect">
                <div className='contenty'>
                    
                        <img
                            className='contenty-img'
                            alt='Travel Image'
                            src={props.src}
                        />
                    
                </div>
                <h3 className='text'>{props.text1}</h3>
                <h5 className='text'>{props.text2}</h5>
            </div>
            
        </div>
    );
}

export default ContentItem;









