import React from 'react'
import './qpanel.css'
 function findContent(list,id){
		const content=list.find(obj=>obj.id===id)
		return content
	}
const Qpanel= (props)=>{
	const content=findContent(props.question,props.id)
	if(content===undefined) return null
	return(
	<div className="qpanel">
		<div className="title">{content.question}</div>
		<div className="contents">{content.description}</div>
	</div>)

}
export default Qpanel