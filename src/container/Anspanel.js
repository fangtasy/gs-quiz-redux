import React from 'react'
import './answer.css'
const Apanel = (props) => {
  
  const content=props.content.find(obj=>obj.id===props.id)
  function handleAnswerClick(id,pt){
      props.handleClick(id,pt);
  }

  if (content) {
  	return (
  		<div className="apanel">
          	{	

            	content.answers.map(a=> {
            		return (<button className="answer" key={a.id} onClick={()=>handleAnswerClick(a.id,a.point)}>{a.answer}</button>)
            	})
      		}
      	</div>
    );
  } else {
  	return null;
  }
};

export default Apanel