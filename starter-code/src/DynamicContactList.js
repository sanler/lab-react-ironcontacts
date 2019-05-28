import React, { Component } from 'react';
import contactList from './contacts.json';
import Contact from './contacts.json';
const contactListCopy=contactList.splice(0,5);


class DynamicContactList extends Component{
render(){
    return(
        <h1>IronContacts</h1>
        <table>
            <tr>
                <td>Picture</td>
                <td>Name</td> 
                <td>Popularity</td>
            </tr>
            <tr>
                {
                    this.state.movies.map((oneMovie, index) => 
                    // some code to be rendered will come here
                    // return <ImprovedCard key={index} {...oneMovie} clickToDelete={this.deleteMovieHandler.bind(this, index)} />
                    //<ImprovedCard  clickToDelete={() => this.deleteMovieHandler(index)} key={index} title={oneMovie.title} director={oneMovie.director}/>
                    <ImprovedCard  clickToDelete={() => this.deleteMovieHandler(index)} {...oneMovie}/>

                    )
                }
            
            </tr>
      

        );

    render(){
        return(
        <h1>IronContacts</h1>
        <table>
            <tr>
                <td>Picture</td>
                <td>Name</td> 
                <td>Popularity</td>
            </tr>
            <Contact 
        </table>);
    }
}

export default DynamicContactList;
