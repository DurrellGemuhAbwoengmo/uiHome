
import React from 'react';
import { View, Text, Image, TextInput, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Header.styles'


const Header = () => {
    const search = <Icon name="search" size={ 30 } color="black" marginLeft={ 20 } marginTop={ 20 } />;

    return (
        <ScrollView>
            <View style={ styles.container }>
                <View style={ styles.header }>
                    <View>
                        <Image
                            source={ require( './../../../res/images/logo3.png' ) }
                            style={ { width: 50, height: 50 } }
                        />
                    </View>
                    <TextInput
                        style={ { borderBottomColor: '#000', borderBottomWidth: 1, padding: 1, } }
                        placeholder='looking for a house? xxxxxxxxxxxxxxx'
                        placeholderTextColor='#4d4d4d'
                    />
                    <Text>
                        { search }
                    </Text>
                </View>
                <View style={ styles.button }>
                    <Button
                        color='#63004F'
                        title='looking for a house?'
                    />
                    <Text>{ " " }</Text>
                    <Button
                        title='I have a house'
                    />
                </View>
            </View>
            
        </ScrollView>
    );
};


export default Header;
