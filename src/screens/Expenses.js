import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, FlatList, Platform, ActivityIndicator } from 'react-native';
import styles from '../assests/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';

const listItem = [
    {"costs":[{"value":"90"}],"id":2,"name":"codepen"},
    // {"name":'Gallileo',"id":"2",costs:[{value:'Read Book'},{value:'Drink water'},{value:'Walking'}]},
    // {"name":'Einsten',id:"3",costs:[{value:'Read Book'},{value:'Drink water'}]},
    // {"name":'Peterson',id:"4",costs:[{value:'Read Book'},{value:'Drink water'}]},
    // {"name":'Schwarzenneger',id:"5",costs:[{value:'Read Book'},{value:'Drink water'}]},
    // {"name":'Dostoyevsky',id:"6",costs:[{value:'Read Book'},{value:'Drink water'}]}
]

export default Expense = () => {
    const [cost, setCost] = useState('');
    const [filterCategory, setfilterCategory] = useState();
    const [myCosts, setMyCosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        console.log('useeffect',myCosts)
        readData();
      }, [])

      
    const readData = async () => {
        // setIsFetching(true);
        // const matchedItems = listItem.find(element => element.id === '3')
        // setMyCosts([matchedItems]);
        console.log('mycosts>>',myCosts)
        try {
          const expenseValue =  await AsyncStorage.getItem('COSTLIST')
          console.log('expenseValue>>',expenseValue)
          setTimeout(function(){ setMyCosts(JSON.parse(expenseValue)); }, 5000);
          
       
        //   setIsFetching(false);
        } catch (e) {
          alert('Failed to fetch the data from storage')
        }
       
      }

    const getCategory=(item)=>{
        console.log(console.log('cat>>',item.value))

    }

    const getMonth=(item)=>{
        console.log(console.log('month>>',item.value))
    }

      //const matchedItems = listItem.find(element => element.id === '2')
      console.log('matchedItems',myCosts)
    if (!myCosts.length) {
        console.log('matchedItems1',myCosts)
        return (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator animating={true}/>
            </View>
        );
    } else {
        console.log('matchedItems2',myCosts)
        // sts = sts.map(item => {
		// 	return {
		// 		label: item.name
		// 	};
		// });
        // var newArr = myCosts
        // var modArr = newArr.map(item => {
		// 	return {
		// 		label: item.name
		// 	};
        //  })
		// });
        // var modArr = newArr.map(function(item) { 
        //     delete item.id; 
        //     return item; 
        // });
       
        return(
            <View>
            
            <View style={styles.toolbarContainer}>
            <TouchableOpacity style={styles.toolbarLeft}>
                {/* <Icon
                    style={styles.toolbarIcon}
                    name='angle-down'
                    size={18}
                /> */}
                 <DropDownPicker
                    items={[
                        {label: 'Category', value: 'Category',hidden: true},
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
                    onChangeItem={item => getCategory(item)}
                />
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
                                    {label: 'Month', value: 'Month',hidden: true},
                                    {label: 'Jan', value: 'Jan'},
                                    {label: 'Feb', value: 'Feb'},
                                    {label: 'Mar', value: 'Mar'},
                                    {label: 'Apr', value: 'Apr'},
                                    {label: 'May', value: 'May'},
                                    {label: 'Jun', value: 'Jun'},
                                    {label: 'Jul', value: 'Jul'},
                                    {label: 'Aug', value: 'Aug'},
                                    {label: 'Sep', value: 'Sep'},
                                    {label: 'Oct', value: 'Oct'},
                                    {label: 'Nov', value: 'Nov'},
                                    {label: 'Dec', value: 'Dec'},
                                ]}
                                defaultValue={'Month'}
                                containerStyle={{height: 40,zIndex: 5,width:130}}
                                style={{backgroundColor: '#fafafa'}}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{backgroundColor: '#fafafa'}}
                                onChangeItem={item => getMonth(item)}
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
            <View style={{marginTop:30,paddingHorizontal:15}}>
                {/* <Text style={{fontWeight:'bold'}}>
                    Bill
                </Text>
                {myCosts.map(cost => {
                    return (
                        <Text style={{backgroundColor:'#f2e3df',color:'#000',padding:10}}>
                            {cost.name}
                        </Text>
                    )
                })
                }
                <Text>
                    30
                </Text> */}
                <FlatList
                    style={{marginTop:10,borderRadius:8}}
                    data={myCosts}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item,i})=>(
                    <View style={{justifyContent:'center',marginBottom:5}} key={i}>
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
    
}