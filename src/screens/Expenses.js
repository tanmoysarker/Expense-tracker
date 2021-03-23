import React from 'react';
import { View, Text, TouchableOpacity, Button, Dimensions } from 'react-native';
import styles from '../assests/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default Expense = () => {
    return(
    <View style={styles.toolbarContainer}>
    <TouchableOpacity style={styles.toolbarLeft}>
        <Icon
            style={styles.toolbarIcon}
            name='angle-down'
            size={18}
        />
        <Text style={{ color: '#818995', marginLeft: 5 }}>Categories</Text>
    </TouchableOpacity>
    <View
        style={[
            styles.toolbarRight
        ]}>
            <TouchableOpacity
                style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#818995', marginRight: 5 }}>
                    Week
                </Text>
                <Icon
                    style={styles.toolbarIcon}
                    name='angle-down'
                    size={18}
                />
            </TouchableOpacity>
        <TouchableOpacity
            style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#818995', marginRight: 5 }}>
                 Month
            </Text>
            <Icon
                style={styles.toolbarIcon}
                name='angle-down'
                size={18}
            />
        </TouchableOpacity>
    </View>
    </View>
    )
}