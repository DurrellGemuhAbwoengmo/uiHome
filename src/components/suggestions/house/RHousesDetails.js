import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';

import Carda from './../agents/Carda';
import Cardsec from './../agents/Cardsec';


const RHousesDetails = ( props ) => {

    return (
        <View>
            
        <Carda>
            <Cardsec>
                <View>
                <TouchableOpacity>
                    <Image
                        source={ props.user.thumbnail }
                        style={ styles.image }
                    />
                </TouchableOpacity>
                </View>
            </Cardsec>
            
        </Carda>
        </View>
    );
};

const styles = {

    image: {
        height: 110,
        width: 110,
        padding: 10
    }
};

export default RHousesDetails 