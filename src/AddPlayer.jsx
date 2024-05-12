import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from './store';
import * as service from './service';
function AddPlayer({data,id}) {
    const [playerName, setPlayerName] = useState('');
    const dispatch = useDispatch();
    const handleInputChange = (event) => {
        setPlayerName(event.target.value);
      };
      const handleAddClick = async () => {
        if (data.find((item) => item.players.find((item2) => item2.name === playerName))) {
            alert('Player already exists');
        } else {
            let item=data.find((item) => item.id==id)
            item.players.push({name:playerName})
            item.participants=item.participants-1;
            service.addPlayerToEvent(item);  

            dispatch(setData(playerName));
           
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
