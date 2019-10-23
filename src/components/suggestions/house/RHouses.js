import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import RHousesDetails from './RHousesDetails'

class RHouses extends Component {
    state = { users: [ { name: 'hello' } ] };

    componentDidMount() {
        let dummyUsers = [
            { thumbnail: require( './../../../../res/images/h1.jpg' ) },
            { thumbnail: require( './../../../../res/images/h2.jpg' ) },
            { thumbnail: require( './../../../../res/images/h3.jpg' ) },
            { thumbnail: require( './../../../../res/images/h4.jpg' ) },
            { thumbnail: require( './../../../../res/images/h5.jpg' ) },
            { thumbnail: require( './../../../../res/images/h1.jpg' ) },
            { thumbnail: require( './../../../../res/images/h2.jpg' ) },
        ];
        this.setState( { users: dummyUsers } );
    }

    renderUsers() {
        return this.state.users.map( user =>
            <RHousesDetails key={ user.name }
                user={ user }
            />
        );
    }
    render() {
        return (
            <ScrollView
                horizontal={ true }
            >
                <View>
                    <Text style={{
                    marginLeft: 10,
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>Recommended Houses</Text>
                    <View style={ { flexDirection: 'row' } }>
                        { this.renderUsers() }
                    </View>
                </View>
            </ScrollView>
        );
    }

}



export default RHouses;