import React from 'react';
import { View, ScrollView } from 'react-native';

const Cardsec = (props) => {
    return (
        <ScrollView
       // horizontal={true}
        >
        <View>
        <View style={ styles.containerStyle}>
            {props.children}
        </View>
        </View>
        </ScrollView>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
       // justifyContent: 'flex-start',
       // flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
       // flexDirection: 'row'
    }
}
export default Cardsec;