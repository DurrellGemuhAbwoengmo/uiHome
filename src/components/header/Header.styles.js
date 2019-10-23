import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
        alignItems: 'center',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.9
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5,
        marginTop: 8,
        marginRight: 5
        //marginLeft: 20
    },
    footer: {
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
        alignItems: 'center',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.9

    }
  
   
});

export default styles;
