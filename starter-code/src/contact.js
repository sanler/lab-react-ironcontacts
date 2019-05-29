import React from 'react';
import './contactList.css';

const Contact=(props)=>{



    return (
        <tr>
            <td><img alt="contactimg" className="contactimg" src={props.pictureUrl}/></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
        </tr>
      )


}

export default Contact;