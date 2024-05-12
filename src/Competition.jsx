import React from 'react';
import { Link } from 'react-router-dom';

function Competition({data}) {
  return (
    <>
    
      <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.fees}</td>
              <td>{data.date}</td>
              <td><Link  className='btn btn-primary' to={`/details/${data.id}`} >details</Link></td>
            </tr>
    </>
  );
}

export default Competition;
