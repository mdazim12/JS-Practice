
//  export default function todo({task}){
//         return (
//             <li>To do list : {task} </li>
//         )
//     }


//  export default function todo({task, isDone}){
//         if(isDone){
//             return <li>Finised : {task}</li>
//         }
//         else{
//             return <li>Work on : {task} </li>
//         }
//     }

    // export default function todo({task, isDone}){
    //             return (
    //                 <li> {isDone ? 'Finised the work' : 'Working the labor'} {task} </li>
    //             )
    //         }
        
    // export default function todo({task, isDone}){
    //             return (
    //                 <li> {task} {isDone && ':Done'} </li>
    //             )
    //         }

    export default function todo ({task , isDone}){
        return (
            <li> {task} {isDone || ':Do it right now'} </li>
        )
    }
        