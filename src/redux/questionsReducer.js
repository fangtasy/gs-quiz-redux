import axios from 'axios'
const GET_ALL='get all questions'
const initState={
	questions:[]
}

function get_question(data){
	return {type:GET_ALL, payload:data}
}
export function getQuestions(){
	//console.log("id here",id);
	return dispatch=>axios.get('/assessment/questions.json')
	.then(res=>{
		//console.log(res.data)
		return dispatch(get_question(res.data));
	})
}
export function getQuestionsReducer(state=initState,action){
	if(action.type===GET_ALL) return {...state,questions:action.payload}
	else return state;
}