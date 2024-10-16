import { useState } from "react"

    export default function() {

        const [team, setTeam] =useState(11)

        const hadelAdd = () =>{
            const newTeam = team + 1;
            setTeam(newTeam)
        }

        const handelRemove = () =>{
            const removeTeam = team - 1;
            setTeam(removeTeam)
        }

        const teamStyle = {
            border :'2px soild green',
            margin : '15px',
            padding : '25px',
            background: 'gray'
        }

        return (
            <div style={teamStyle}>
                <h3>Team : {team} </h3>
                <button onClick={hadelAdd}>Add Player</button>
                <button onClick={handelRemove}>Remove</button>
            </div>
        )
    }