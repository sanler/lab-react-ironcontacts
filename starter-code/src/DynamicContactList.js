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


    clickToAddContact=()=>{
        const mycontactsCpy=this.state.mycontacts;
        const randomIndex=Math.floor(Math.random()*(contactList.length+1));
        const randomContact=contactList.splice(randomIndex,1);
        mycontactsCpy.push(...randomContact);
        console.log(randomContact);
        console.log(mycontactsCpy);

        this.setState({
            mycontacts: mycontactsCpy
                 });
    }

    deleteContact=(index)=>{

        const mycontactsCpy=this.state.mycontacts;

        mycontactsCpy.splice(index,1);

        this.setState({
            mycontacts: mycontactsCpy
                });

    }

render(){
    return(
        <div>
            <h1>IronContacts</h1>
            <button onClick={this.clickToAddContact}>Add Random Contact</button>
            <div className="container">

                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th> 
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                <tbody>
                
                        {
                            this.state.mycontacts.map((oneContact, index) => 
                        
                            <Contact clickToDelete={() => this.deleteContact(index)} key={index} {...oneContact}/>

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
