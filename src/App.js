import React from 'react'
import Grid from './Grid'
import Playerinfo from './playerInfo'


export default function App(props){
    const [data,setdata]=React.useState({
        winner:{
            winner_symbol:undefined,
            index:[],
        },
        turn:"Cross",
        positions: new Array(9).fill(null)
    })
    return (
        <> <Grid 
        winningIndex={data.winner.index}
    positions={data.positions}
    setPostions= {index=>{
        console.log(data)
       
        setdata(prevdata=>{
            
            if(prevdata.positions[index]==null&&!data.winner.winner_symbol){
               
                const data={...prevdata}
                data.positions[index]=data.turn
                data.turn=(data.turn=="Cross")?"Circle":"Cross"
                const lines=[
                    [0,1,2],
                    [3,4,5],
                    [5,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6],

                ]
                lines.forEach(line=>{
                    const [a,b,c]=line
                    if(data.positions[a]===data.positions[b]&&
                        data.positions[b]===data.positions[c]&&
                        data.positions[c]!=null
                        
                        ){
                       
                        data.winner.winner_symbol=(data.turn=="Cross")?"Circle":"Cross";
                        data.winner.index=line
                    }
                })
                 return data
            }
            return prevdata;
          
        })
    }

    }
    />
    <Playerinfo 
    turn={data.turn}
    winner={data.winner.winner_symbol}
    />
    </>
    )
    
}