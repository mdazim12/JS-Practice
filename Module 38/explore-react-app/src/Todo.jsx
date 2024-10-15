
//  export default function todo({task}){
//         return (
//             <li>To do list : {task} </li>
//         )
//     }


 export default function todo({task, isDone}){
        if(isDone){
            return <li>Finised : {task}</li>
        }
        else{
            return <li>Work on : {task} </li>
        }
    }