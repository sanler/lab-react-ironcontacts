import React, { Component } from 'react';
import contactList from './contacts.json';
import Contact from './contact';
import './contactList.css';

const contactListCopy=contactList.splice(0,5);


class DynamicContactList extends Component{
    constructor(){
       
        super();
      
        this.state={

            mycontacts: contactListCopy

        }
    }

render(){
    return(
        <div>
            <h1>IronContacts</h1>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th> 
                            <th>Popularity</th>
                        </tr>
                    </thead>
                <tbody>
                
                        {
                            this.state.mycontacts.map((oneContact, index) => 
                        
                            <Contact  {...oneContact}/>

                            )
                        }
                    
                </tbody>
                </table>
            </div>
        </div>

        );

    }
 }
export default DynamicContactList;
