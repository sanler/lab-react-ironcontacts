import React from 'react';

const Contact=(props)=>{



    return (
        <tr>
            <td>{props.pictureUrl}</td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
        </tr>
      )




}

export default Contact;