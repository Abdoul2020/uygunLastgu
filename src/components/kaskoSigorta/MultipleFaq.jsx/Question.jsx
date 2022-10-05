import React from 'react'

var Question = function(props) {
    var clazz;
    if (
      props.page == props.openPage && 
      props.index == props.openIndex
    ) {
      clazz = "faq_answer_open";
    } else {
      clazz = "faq_answer";
    }
    
    return (
      <div>
        <h4 
          className='faq_question' 
          data-page={props.page}
          data-index={props.index}
          onClick={props.toggle}>
          Question: {props.q}
        </h4>
        <h4 
          className={clazz}>
          {props.a}
        </h4>
      </div>
    );
  }

export default Question
