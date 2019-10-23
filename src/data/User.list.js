import React, { Component } from 'react';
import { View, Text } from 'react-native';


import UserDetails from './User.details'

class UserList extends Component {
    state = { users: [ {name: 'hello'}] };

    componentDidMount() {
        let dummyUsers = [
            {name: "Martin", category: "Agent", image: require('./../../res/images/u8.jpeg'), thumbnail: require('./../../res/images/h1.jpg'), message: "I am rich so I want a fabulouse house, nicely structured to potrait my riches. I am rich so I want a fabulouse house, nicely structured to potrait my riches"},
            {name: "Base", category: "Agent",  image: require('./../../res/images/u14.jpg'), thumbnail: require('./../../res/images/h2.jpg'), message: "Hi there I have a house for sale, well suited for your taste, located in a noise free area, perfectly design you can check it out below"},
            {name: "Durrell", category: "client",  image: require('./../../res/images/u4.jpg'), thumbnail: require('./../../res/images/h3.jpg'), message: "I am rich so I want a fabulouse house, nicely structured to potrait my riches. I am rich so I want a fabulouse house, nicely structured to potrait my riches. I need some think like the one below"},
            {name: "Abdoul", category: "Agent",  image: require('./../../res/images/u6.jpg'), thumbnail: require('./../../res/images/h4.jpg'), message: "Hi there I have a house for sale, well suited for your taste, located in a noise free area, perfectly design you can check it out below"},
            {name: "Bendip", category: "Agent",image: require('./../../res/images/u21.jpg'), thumbnail: require('./../../res/images/h5.jpg'), message: "I am rich so I want a fabulouse house, nicely structured to potrait my riches. I am rich so I want a fabulouse house, nicely structured to potrait my riches"},
            
        ];
        this.setState({ users: dummyUsers });
    }

    renderUsers(){
        return this.state.users.map(user => 
        <UserDetails key = {user.name}
            user={user}
        />
        );
    }
    render() {
        return (
            <View>
               {this.renderUsers()} 
            </View>  
        );
     }    

    }



    export default UserList;