import React from 'react';
import * as service from './service';
import Competition from './Competition';
function Competitions() {
    const [data, setData] = React.useState([]);

    const fetchdata = () => {
      service.getAll().then((data) => {
        setData(data);
      });
    }

    React.useEffect(() => {
      fetchdata();
    }, []);

  return (
    <>
        <div className="container">
      <h1>Content Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Fees</th>
            <th>Date</th>
            <th>details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
          <Competition data={item} key={index}/>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Competitions;
