import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => {
    return (
        //passed styles from prop will overwrite
      <View style={[styles.container, props.style]}>
          {props.children}
      </View>
    );
};

const styles = {
    container: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};


export { CardSection }