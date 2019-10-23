import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity,TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from './../components/card/Card';
import CardSection from './../components/card/Card.section';
import Modal from 'react-native-modal'




class UserDetails extends Component() {

    state = {
        modalVisible: false,
    };

    setModalVisible( visible ) {
        this.setState( { modalVisible: visible } );
    }
    render() {
        const favorite = <Icon name="favorite-border" size={ 30 } color="#4d4d4d" marginLeft={ 20 } marginTop={ 20 } />;
        const morevert = <Icon name="more-vert" size={ 30 } color="#4d4d4d" marginLeft={ 20 } marginTop={ 20 } />;
        const message = <Icon name="message" size={ 30 } color="#4d4d4d" marginLeft={ 20 } marginTop={ 20 } />;
        const share = <Icon name="share" size={ 30 } color="#4d4d4d" marginLeft={ 20 } marginTop={ 20 } />;
        const filedownload = <Icon name="file-download" size={ 30 } color="#4d4d4d" marginLeft={ 20 } marginTop={ 20 } />;
        return (
            <Card>
                <CardSection>
                    <View>
                        <Image
                            style={ styles.userImage }
                            source={ this.props.user.image }
                        />
                    </View>
                    <View style={ styles.userNameSec }>
                        <Text>{ this.props.user.name }</Text>
                        <Text>{ this.props.user.category }</Text>
                    </View>
                    <View style={ { justifyContent: 'center', alignItems: 'flex-start', marginLeft: 170 } }>
                        <TouchableOpacity>
                            <Text>
                                { morevert }
                            </Text>
                        </TouchableOpacity>
                    </View>
                </CardSection>
                <CardSection>
                    <Text style={ { textAlign: 'justify', } }>
                        { "    " } { props.user.message }
                    </Text>
                </CardSection>
                <CardSection >
                    <Image
                        source={ this.props.user.thumbnail }
                        style={ styles.thumbnail }
                    />
                </CardSection>
                <CardSection>
                    <View style={ { flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' } }>
                        <TouchableOpacity>
                            <Text>
                                { favorite }
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Modal
                                animationType="slide"
                                transparent={ false }
                                visible={ this.state.modalVisible }
                                onRequestClose={ () => {
                                    Alert.alert( 'Modal has been closed.' );
                                } }>
                                <View style={ { flex: 1, } }>
                                    <View>
                                        <TextInput
                                            placeholder='comment goes here'
                                            placeholderTextColor='#4d4d4d'
                                        />
                                        <TouchableHighlight
                                            onPress={ () => {
                                                this.setModalVisible( !this.state.modalVisible );
                                            } }>
                                            <Text>Hide Modal</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </Modal>
                            <TouchableOpacity onPress={ () => {
                                this.setModalVisible( true );
                            } }>
                                <Text>
                                    { message }
                                </Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>
                                { share }
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>
                                { filedownload }
                            </Text>
                        </TouchableOpacity>
                    </View>
                </CardSection>
            </Card>
        );
    }
};

const styles = {
    userNameSec: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 90,
        marginRight: 5,
    },
    thumbnail: {
        height: 200,
        width: null,
        flex: 1
    }
};

export default UserDetails 