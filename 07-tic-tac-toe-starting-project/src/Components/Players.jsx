import { useState } from "react";

export default function({name,symbol,isActive}){

 const [IsEditing,SetIsEditing]=useState(false);

 const[PlayerName,SetPlayerName]=useState(name);

 let content=!IsEditing?<span className="player-name">{PlayerName}</span>:
 <input type="text" required value={PlayerName} onChange={(event)=>SetPlayerName(event.target.value)}/>;
 let buttonTitle=!IsEditing?"Edit":"Save";
    return(
    <li className={isActive?'active':undefined} >
    <span className="player">
    {content}   
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={()=>SetIsEditing(x=>!x)}>{buttonTitle}</button>
    </li>
    );
    
}
