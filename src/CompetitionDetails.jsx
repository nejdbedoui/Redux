import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as service from './service';
import AddPlayer from './AddPlayer';
import { useSelector } from 'react-redux';

function CompetitionDetails() {
    const { id } = useParams();
    const [data, setData] = React.useState([]);
    const [data2, setData2] = React.useState([]);
    const [visible, setVisible] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);

    const player = useSelector((state) => state.data);
    const playeremail = useSelector((state) => state.email);
    const fetchdata = () => {
        service.getAll().then((data) => {
            setData2(data);
            data.find((item) => {
                if (item.id == id) {
                    setData(item);
                    if(item.participants>0){
                        setVisible(true)
                    }else{
                        setVisible(false)
                    }
                }
            });
            
        });
      }
    useEffect(() => {
        fetchdata()
       console.log(id);
    }, []);

    const show=(()=>{
        setVisible2(true)
    })
  return (
    <div>
      price: {data.price} <br/>
      date: {data.date}<br/>
      description: {data.description}<br/>
      participant: {data.participants}<br/>
      {visible?
      <button onClick={show}>participer</button>:null}<br/>
      {visible2?
      <AddPlayer data={data2} id={id} />:"" }
      <div>
      <h2>Data from Redux Store:</h2>
      <p>{player}</p>
      <p>{playeremail}</p>
    </div>
    </div>
  );
}

export default CompetitionDetails;
