// an action exports a function, 
// that function must itself, return an object
// that object myst have a prop of 'type'

export default function addStudent(studentName){
    console.log("add student action was called...")
    console.log(studentName)
    return {
        type: 'ADD_STUDENT',
        payload: studentName
    }
}