const GO_NEXT='go to next question';
const GO_PRE='go to previous question';
const CHOSEN ='choosen answer for cunrrent index';

const initQuestion={
	q_num:1
}

const initAnswer={
	answers:{}
}
export function gonext(){
	return {type:GO_NEXT}
}
export function goprev(){
	return {type:GO_PRE}
}
export function currentQReducer(state=initQuestion,action){
	switch(action.type){
		case GO_PRE: return{...state,q_num:state.q_num>1?state.q_num-1:state.q_num};
		case GO_NEXT: return{...state,q_num:state.q_num+1}
		default: return state;
	}
}
export function chosenAnswer(data){
	return{
		type:CHOSEN,
		payload:data
	}
}
export function answerReducer(state=initAnswer,action){
	if(action.type===CHOSEN) return {...state, answers:action.payload};
	else return state;
}