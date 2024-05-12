import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as service from './service';
import AddPlayer from './AddPlayer';
import { useSelector } from 'react-redux';

function CompetitionDetails() {
    const { id } = useParams();
    const [data, setData] = React.useState([]);//item
    const [data2, setData2] = React.useState([]);//list of items
    const [visible, setVisible] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);

    const player = useSelector((state) => state.data);
    const playeremail = useSelector((state) => state.email);
    let players=useSelector((state)=>state.players);



    const fetchdata = () => {
        service.getAll().then((data) => {
            setData2(data);
            data.find((item) => {
                if (item.id == id) {
                    setData(item);
                    if (item.participants > 0) {
                        setVisible(true)
                    } else {
                        setVisible(false)
                    }
                }
            });

        });
    }


    useEffect(() => {
        fetchdata()
    }, []);

    
    useEffect(() => {
        console.log('it works')
    }, [players]);

    const show = (() => {
        setVisible2(true)
    })
    return (
        <div>
            price: {data.price} <br />
            date: {data.date}<br />
            description: {data.description}<br />
            participant: {data.participants}<br />
            {/* {visible?
      <button onClick={show}>participer</button>:null}<br/> */}
            <button disabled={!visible} onClick={show}>participer</button><br />
            {visible2 ?
                <AddPlayer data={data2} id={id} /> : ""}
            <div>
                <h2>Data from Redux Store:</h2>
                <p>{player}</p>
                <p>{playeremail}</p>
            </div>


           {players.map((item,index) => (
            <p key={index}>{item}</p>
           ))}
        </div>
    );
}

export default CompetitionDetails;
