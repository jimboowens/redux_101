const students = [
    'Stanley',
    'Kyle',
    'Ron',
    'Rob',
    'JR',
    'Matt',
    'Jim',
]
// all reducer functions have two params:
// 1. current state
//      1(cont'd). usually you want to provide a default state
// 2. info from the action
export default (state=students,action)=>{
    if(action.type=== 'ADD_STUDENT') {
        let newStudents=state.slice();
        newStudents.push(action.payload);
        return newStudents;
    }
    return state;
    
} 