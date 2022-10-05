import React from 'react'
import faq from './faq';

var MenuItem = function(props) {
    var page = Number(props.page);
    var title = faq[page].title;
    
    return (
        <li data-index={page} 
        onClick={props.update} style={{cursor:"pointer", fontSize:"13px", lineHeight:"19px"}}>
            
              
              {title}
            
        </li>
    );
  };

export default MenuItem
