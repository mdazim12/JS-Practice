import { useEffect, useState } from "react"
import Friend from "./Friend"

    export default function(){

        const [friends, setFriend] = useState([])

        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriend(data))
        },[])
 
        return(
            <div>
                <h3>Friends: {friends.length}</h3>

            {
                // friends.map(friend => <Friend friend = {friend}></Friend>)
                friends.map(friend => <Friend key={friend.id} friend={friend} />)
            }

            </div>
        )
    }