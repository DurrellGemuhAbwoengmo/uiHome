
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './Home.page.styles'
import Header from './../components/header/Header'
import UserList from './../data/User.list'
import RAgent from './../components/suggestions/agents/RAgents'
import RHouses from './../components/suggestions/house/RHouses'
const Home = () => {
    return (
        <ScrollView>
            <View style={ styles.container }>
                <View>
                    <Header />
                </View>
                <View style ={{flex: 1}}>
                    <UserList />
                </View>
                <View>
                    <RAgent />
                </View>
                <View style ={{flex: 1}}>
                    <UserList />
                </View>
                <View>
                    <RHouses />
                </View>
            </View>
        </ScrollView>
    );
};


export default Home;
