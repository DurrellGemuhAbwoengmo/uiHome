
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Footer.styles'


const Footer = () => {
    const person = <Icon name="person" size={ 30 } color="black" marginLeft={ 20 } marginTop={ 20 } />;
    const dashboard = <Icon name="dashboard" size={ 30 } color="black" marginLeft={ 20 } marginTop={ 20 } />;
    const home = <Icon name="home" size={ 30 } color="black" marginLeft={ 20 } marginTop={ 20 } />;

    return (
        <ScrollView>
            <View style={ styles.container }>

            <View style={ styles.footer}>
                    <Text>
                        {home}
                    </Text>
                    <Text>
                        {dashboard}
                    </Text>
                    <Text>
                        {person}
                    </Text>
            </View>
            </View>
        </ScrollView>
    );
};


export default Footer;
