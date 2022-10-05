import React from 'react'
import Question from './Question';
import faq from './faq';

var PageContent = function(props) {
    var page = Number(props.page);
    var items = faq[page].items;
    
    return (
      <div className="faq_page_contents" >
        {items.map(function(item, index){
          return (
            <div style={{background:"#FFFF" , margin:"10px", cursor:"pointer", borderRadius:"10px"}}>
              <Question 
                a={item.a} 
                q={item.q} 
                openPage={props.openPage}
                openIndex={props.openIndex}
                page={page}
                index={index}
                toggle={props.toggle}/>
            </div>
          );
        })}
      </div>
    );
    
  };

export default PageContent
