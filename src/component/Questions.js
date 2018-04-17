import React, {Component} from 'react'
import Qpanel from '../container/Quespanel'
import Apanel from '../container/Anspanel'
import { connect } from 'react-redux';
import {getQuestions} from '../redux/questionsReducer'
import {gonext,goprev,chosenAnswer} from '../redux/ansReducer'
import "./question.css"
class Questions extends Component{
	constructor(props){
		super(props)
		this.state={
			question:'',
			finished:false,
			points:[],
			score:0,

		}
		this.props.getQuestions();
		this.answerClick=this.answerClick.bind(this)
		this.goback=this.goback.bind(this);
		this.gonext=this.gonext.bind(this);

	}

	goback(){
		this.props.goprev();
	}
	gonext(){
		this.props.gonext();
		if(this.props.current.q_num>=this.props.questions.length){this.setState({finished:true},()=>this.totalScores())}
	}	
	answerClick(ans_id,ans_point){
			const ans={a_id:ans_id,a_point:ans_point}
			const chosen={q_num:this.props.current.q_num,ans}

			 let m=this.state.points.find(obj=>obj.q_num===chosen.q_num)
			 if(!m){
			 	this.props.chosenAnswer(chosen);
			 	this.setState({points:[...this.state.points,chosen]})
			 	
			 	console.log(this.props)
			 }else{
			 	let array=this.state.points.slice();
			 	array[array.indexOf(m)].ans=ans;
			 	this.setState({points:array})
			 }
			 this.props.gonext();

			 if(this.props.current.q_num>=this.props.questions.length){this.setState({finished:true},()=>this.totalScores())}
		
	}
	totalScores(){
		let score=0
		this.state.points.forEach(ans=>score+=ans.ans.a_point)
		this.setState({score:score})
	}

	render(){

		if(this.state.finished===true) return(<div className="score">
			Congratulations! 
			you finished the quiz.
			<div className='result'>your score: {this.state.score}</div>
			</div>)
		return(
			<div className="content">
				<button className='prev'  onClick={this.goback}>go back</button>
				<button className='next' onClick={this.gonext}>go next</button>
				<Qpanel question={this.props.questions} id={this.props.current.q_num}></Qpanel>
				<Apanel handleClick={this.answerClick} id={this.props.current.q_num} content={this.props.questions}/>

			</div>
		)
	}
}
const mapStatetoProps=(state)=>{
	return {
		questions:state.getQuestionsReducer.questions,
		current:state.currentQReducer,
		answers: state.answerReducer.answers
	}
}
const actionCreators={getQuestions,gonext,goprev,chosenAnswer}
Questions=connect(mapStatetoProps,actionCreators)(Questions)
export default Questions;