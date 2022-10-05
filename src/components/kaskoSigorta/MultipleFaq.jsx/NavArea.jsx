import React from 'react'
import MenuItem from './MenuItem';
import faq from './faq';

var NavArea = function(props) {
    return (
      <div>
       {faq.map(function(val, page){
          return (
            <MenuItem 
              page={page} 
              update={props.update} />
          );
        })}
      </div>
    );
  }

export default NavArea
