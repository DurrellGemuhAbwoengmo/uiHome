import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import RAgentDetails from './RAgentsDetail'

class RAgent extends Component {
    state = { users: [ { name: 'hello' } ] };

    componentDidMount() {
        let agents = [
            { image: require( './../../../../res/images/u8.jpeg' ), },
            { image: require( './../../../../res/images/u14.jpg' ), },
            { image: require( './../../../../res/images/u4.jpg' ), },
            { image: require( './../../../../res/images/u6.jpg' ), },
            { image: require( './../../../../res/images/u21.jpg' ), },
            { image: require( './../../../../res/images/u2.jpg' ), },
            { image: require( './../../../../res/images/u9.jpg' ), },
        ];
        this.setState( { users: agents } );
    }

    renderUsers() {
        return this.state.users.map( user =>
            <RAgentDetails key={ user.name }
                user={ user }
            />
        );
    }
    render() {
        return (
            <ScrollView
            horizontal={true}
            > 
            <View>
                <Text style={{
                    marginLeft: 10,
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>Agents Near you
                </Text>
                <View style={ { flexDirection: 'row' } }>
                    { this.renderUsers() }
                </View>
            </View>
            </ScrollView>
        );
    }

}



export default RAgent;