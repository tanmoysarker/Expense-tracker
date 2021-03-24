import React, { useState, useEffect, useRef }  from 'react';
import {Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../assests/styles'
import SearchableDropdown from 'react-native-searchable-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';

const items = [
    // name key is must. It is to show the text in front
    {id: 1, name: 'Resturant Bill'},
    {id: 2, name: 'Tution'},
    {id: 3, name: 'Rent'},
    {id: 4, name: 'Subscription Fee'},
    {id: 5, name: 'Netflix'},
    {id: 6, name: 'Credit Card'},
    {id: 7, name: 'Shopping'},
    {id: 8, name: 'Movie'},
    {id: 9, name: 'Dinner'},
    {id: 10, name: 'Extra'},
  ];

  const Home =() => {
    const [previousNumber, setPreviousNumber] = useState(0);
    const [value, setValue] =  useState(0)
    const [total, setTotalNumber] = useState(0);
    const [category, setCategory] = useState('')
    const [newCategory, newCategorySet] = useState('')
    // const [value, setValue] =  useState(0)
    // const prevNum = useRef();

    // const usePreviousValue = (value) => {
    //   const ref = useRef();
    //   useEffect(() => {
    //     ref.current = value;
    //   },[value]);
    //   console.log('NEW NUMBER ref',ref.current)
    //   return ref.current;
    // };

    const getData= async ()=>{
      // AsyncStorage.clear();
      setValue(value);
      setPreviousNumber(value);
      
      var costs = []
      costs.push({value});
      const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

      const d = new Date();
      var arr = [{costs: [...costs], ...category,month:monthNames[d.getMonth()]}]

      const prevArr =[];
      if (previousNumber !== 0){
        var prevItems = await AsyncStorage.getItem('COSTLIST');
        prevArr.push(JSON.parse(prevItems))
        console.log('check prev data',prevArr[0]);
        var finalArr = [...arr,prevArr[0]]
      } else{
        finalArr = {"costs":[{"value":"10"}],"id":11,"name":"DEMO"}
      }

      
      console.log('costs',finalArr);
        try {
            await AsyncStorage.setItem('COSTLIST', JSON.stringify(finalArr))
            // await AsyncStorage.setItem('PREVNUMBER', newNumber);
            alert('Data successfully saved')
          } catch (e) {
            alert('Failed to save the data to the storage')
          }

          const totalValue =  await AsyncStorage.getItem('COSTLIST')
          console.log('PrevNUMBER',totalValue)
          var newVal = JSON.parse(totalValue)
          const res = newVal.concat().reduce((total, { costs = [] }) => {
            costs.forEach(({ value = 0 }) => total += +value);
            return total;
          }, 0);

          // const total = parseInt(previousNumber) + parseInt(value)
          setTotalNumber(parseInt(res));
          console.log('new',res);
    
     }

     const getCategory= async (item) =>{
      console.log('getCategory',item)
      // const totalValue =  await AsyncStorage.getItem('COSTLIST')
      // console.log('PrevNUMBER',totalValue)
      // const matchedItems = await totalValue.find(element => element.name === item)
      // console.log('find>>',matchedItems)
     }
    //  const [value, setValue] =  useState(0)
   //  const prevValue = usePreviousValue(value)
     
    return (
        <View style={{marginTop: 20,width:300,alignSelf:'center'}}>
        <Text style={styles.headerText}>Total Expense: {total}</Text>
        <Text style={styles.text}>Enter expenses and categorize them.</Text>
        <View style={{marginTop:20,}}>
        <Text style={styles.text}>Search Category from here:</Text>
        <SearchableDropdown
          onTextChange={(category) => getCategory(category)}
          // Listner on the searchable input
          onItemSelect={(category) => setCategory(category)}
          // Called after the selection
          containerStyle={{padding: 5}}
          // Suggestion container style
          textInputStyle={{
            // Inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#900',
            backgroundColor: '#FAF7F6',
            borderRadius:8,
            borderWidth:0.5
          }}
          itemStyle={{
            // Single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#900',
            borderWidth: 1,
          }}
          itemTextStyle={{
            // Text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            // Items container style you can pass maxHeight
            // To restrict the items dropdown hieght
            maxHeight: '50%',
          }}
          items={items}
          // Mapping of item array
          defaultIndex={2}
          // Default selected item index
          placeholder={category.name}
          // place holder for the search input
          resPtValue={false}
          // Reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          // To remove the underline from the android input
        />
        <Text style={styles.text}>Or</Text>
          </View>
          {/* <View style={styles.textinput}>    
            <TextInput
                style={{height: 40, paddingHorizontal:20}}
                placeholder="Category Name"
                onChangeText={category => setCategory(category)}
                defaultValue={category}
            />
          </View> */}
          <View style={styles.textinput}>    
            <TextInput
                style={{height: 40, paddingHorizontal:20}}
                placeholder="Enter New Category"
                onChangeText={value => newCategorySet(value)}
                // defaultValue={value}
            />
          </View>
          <View style={styles.textinput}>    
            <TextInput
                style={{height: 40, paddingHorizontal:20}}
                placeholder="Expense amount..."
                onChangeText={value => setValue(value)}
                keyboardType = 'number-pad'
                // defaultValue={value}
            />
          </View>

          <TouchableOpacity onPress={getData}>
          <View style={styles.activityIndicatorContainer}>
              <View style={styles.reload}>
             <Text style={styles.reloadText}>Add</Text>
            </View>
          </View>
          </TouchableOpacity>
          
      </View>
    )
}
 
export default Home;