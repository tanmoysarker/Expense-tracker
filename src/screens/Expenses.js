import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, FlatList, Platform } from 'react-native';
import styles from '../assests/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';

const listItem = [
    {name:'Patrick star',id:"1",costs:[{name:'Read Book'},{name:'Drink water'}]},
    {name:'Gallileo',id:"2",costs:[{name:'Read Book'},{name:'Drink water'},{name:'Walking'}]},
    {name:'Einsten',id:"3",costs:[{name:'Read Book'},{name:'Drink water'}]},
    {name:'Peterson',id:"4",costs:[{name:'Read Book'},{name:'Drink water'}]},
    {name:'Schwarzenneger',id:"5",costs:[{name:'Read Book'},{name:'Drink water'}]},
    {name:'Dostoyevsky',id:"6",costs:[{name:'Read Book'},{name:'Drink water'}]}
]

export default Expense = () => {
    const [cost, setCost] = useState('');
    const [filterCategory, setfilterCategory] = useState();
    const [myCosts, setMyCosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log('useeffect')
        readData();
      }, [])

      
    const readData = async () => {
        const matchedItems = listItem.find(element => element.id === '3')
        setMyCosts([matchedItems]);
        // console.log('Failed to fetch the data from storage 1',myCosts)
        // const expenseValue =  AsyncStorage.getItem(cost)
        //   console.log('expenseValue',expenseValue)

        try {
          const expenseValue =  await AsyncStorage.getItem('COSTLIST')
          console.log('expenseValue>>',expenseValue)
          //setMyCosts(expenseValue);
        } catch (e) {
          alert('Failed to fetch the data from storage')
        }
        console.log('expense value2',cost)
      }

      //const matchedItems = listItem.find(element => element.id === '2')
    //   console.log('matchedItems',matchedItems)

    return(
    <View>
    
    <View style={styles.toolbarContainer}>
    <TouchableOpacity style={styles.toolbarLeft}>
        {/* <Icon
            style={styles.toolbarIcon}
            name='angle-down'
            size={18}
        /> */}
        <View style={{...(Platform.OS !== 'android' && {
        zIndex: 10
      })}}>
         <DropDownPicker
            items={[
                {label: 'Category', value: 'Category'},
                {label: 'USA', value: 'usa'},
                {label: 'UK', value: 'uk'},
                {label: 'France', value: 'france'},
            ]}
            defaultValue={'Category'}
            containerStyle={{height: 40,width:130}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => setfilterCategory(item)}
        />
        </View>
        {/* <Text style={{ color: '#818995', marginLeft: 5 }}>Categories</Text> */}
    </TouchableOpacity>
   
    <View
        style={[
            styles.toolbarRight
        ]}>
            <TouchableOpacity
                style={{ flexDirection: 'row' }}>
                {/* <Text style={{ color: '#818995', marginRight: 5 }}>
                    Week
                </Text>
                <Icon
                    style={styles.toolbarIcon}
                    name='angle-down'
                    size={18}
                /> */}
                   <DropDownPicker
                        items={[
                            {label: 'Month', value: 'Month'},
                            {label: 'Jan', value: 'Jan'},
                            {label: 'Feb', value: 'Feb'},
                            {label: 'Mar', value: 'Mar'},
                        ]}
                        defaultValue={'Month'}
                        containerStyle={{height: 40,zIndex: 5,width:130}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => setfilterCategory(item)}
                    />
            </TouchableOpacity>
        {/* <TouchableOpacity
            style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#818995', marginRight: 5 }}>
                 Month
            </Text>
            <Icon
                style={styles.toolbarIcon}
                name='angle-down'
                size={18}
            />
        </TouchableOpacity> */}
    </View>
    </View>
    <View style={{marginTop:50,paddingHorizontal:15}}>
        {/* <Text style={{fontWeight:'bold'}}>
            Bill
        </Text>
        <Text>
            30
        </Text> */}
        <FlatList
            style={{marginTop:10,borderRadius:8}}
            data={myCosts}
            renderItem={({item})=>(
            <View style={{justifyContent:'center',marginBottom:5}}>
            <Text style={{backgroundColor:'#f2e3df',color:'#000',padding:10,fontWeight:'bold',fontSize:20}}>
            * {item.name} *
            </Text>
            {item.costs.map(cost => {
            return (
                <Text style={{backgroundColor:'#f2e3df',color:'#000',padding:10}}>
                    {cost.value}
                </Text>
            )
        })
        }
            </View>
            )}
        />
    </View>
    
    
    
    </View>

    )
}