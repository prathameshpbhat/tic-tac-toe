import React from 'react'

export default function playerInformation(props){
    const element=props.winner?<h1>Winner:{props.turn}</h1>:<h1>Turn:{(props.turn=="Cross")?"Cross":"Circle"}</h1>
    return element
}