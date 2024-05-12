import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setData, setEmail, setPlayers } from './store';
import * as service from './service';
function AddPlayer({data,id}) {
    const [playerName, setPlayerName] = useState('');
    const dispatch = useDispatch();
    let players=useSelector((state)=>state.players);
    const handleInputChange = (event) => {
        setPlayerName(event.target.value);
      };

      const handleAddClick = async () => {
        let item2=data.find((item) => item.id==id)
        if ( item2.players.find((item2) => item2.name === playerName)) {
            alert('Player already exists');
        }


        // if (data.find((item) => item.players.find((item2) => item2.name === playerName))) {
        //     alert('Player already exists');
        // } 


        else {
            let item=data.find((item) => item.id==id)
            if(!item.players){
                item.players=[];
            }
            item.players.push({name:playerName})
            item.participants=item.participants-1;
            service.addPlayerToEvent(item);  

            dispatch(setData(playerName));
            dispatch(setEmail(playerName+"@gmail.com"));
            dispatch(setPlayers((playerName)))
           
          }
    };

  return (
    <>
      <input
        type="text"
        name="name"
        value={playerName} 
        onChange={handleInputChange}
      />
      <button onClick={handleAddClick}>Add</button>
    </>
  );
}

export default AddPlayer;
