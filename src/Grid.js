import React from 'react'
import style from './grid.module.css'
const renderSymbol=(input)=>{
   
    if(input=="Cross"){
        return(
            <h1>X</h1>
        )
    }
        else if(input=="Circle"){
            return (
                <h1>O</h1>
            )
        }
        return null;
    
}
export  default function Grid(props){
   

    const divisions=props.positions.map((value,index)=>{
        const isWinner=props.winningIndex.includes(index)
        
        return(
            <div onClick={()=>{
              
        
                props.setPostions(index)
                
            }}
            key={index}
            
            className={isWinner?style.winner:null}>
                {renderSymbol(value)}
                </div>
        )
    })
    return (
        <div className={style.container}>
         {divisions}

        </div>
    )
}