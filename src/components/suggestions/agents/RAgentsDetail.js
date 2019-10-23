import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';

import Carda from './Carda';
import Cardsec from './Cardsec';


const RAgentDetails = ( props ) => {

    return (
        <View>

            <Carda>
                <Cardsec>
                    <View>
                        <TouchableOpacity>
                            <Image
                                source={ props.user.image }
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
        height: 80,
        width: 80,
        padding: 10
    }
};

export default RAgentDetails 