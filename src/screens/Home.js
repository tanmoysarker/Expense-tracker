import React, { useState, useEffect, useRef }  from 'react';
import {Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../assests/styles'
import SearchableDropdown from 'react-native-searchable-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';

const items = [
    // name key is must. It is to show the text in front
    {id: 1, name: 'angellist'},
    {id: 2, name: 'codepen'},
    {id: 3, name: 'envelope'},
    {id: 4, name: 'etsy'},
    {id: 5, name: 'facebook'},
    {id: 6, name: 'foursquare'},
    {id: 7, name: 'github-alt'},
    {id: 8, name: 'github'},
    {id: 9, name: 'gitlab'},
    {id: 10, name: 'instagram'},
  ];

  const Home =() => {
    const [previousNumber, setPreviousNumber] = useState(0);
    const [value, setValue] =  useState(0)
    const [total, setTotalNumber] = useState(0);
    const [category, setCategory] = useState('')
    // const [value, setValue] =  useState(0)
    // const prevNum = useRef();
//    function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }



    // const usePreviousValue = (value) => {
    //   const ref = useRef();
    //   useEffect(() => {
    //     ref.current = value;
    //   },[value]);
    //   console.log('NEW NUMBER ref',ref.current)
    //   return ref.current;
    // };

    // useEffect(() => {
    //     prevNum.current = value;
    //     setPreviousNumber(prevNum.current);
    //     console.log('NEW NUMBER',previousNumber)
    //     AsyncStorage.setItem('Prev', prevNum.current)
    // });

    const getData= async ()=>{
      setValue(value);
      setPreviousNumber(value);
      console.log('previousNumber',previousNumber)
      console.log('category',category);
      var costs = []
      costs.push({value});
      var arr = [{costs: [...costs], ...category}]
      console.log('costs',arr);
        try {
            await AsyncStorage.setItem('COSTLIST', JSON.stringify(arr))
            // await AsyncStorage.setItem('PREVNUMBER', newNumber)
            alert('Data successfully saved')
          } catch (e) {
            alert('Failed to save the data to the storage')
          }

          const totalValue =  await AsyncStorage.getItem('COSTLIST')
          console.log('PrevNUMBER',totalValue)

          const total = parseInt(previousNumber) + parseInt(value)
          setTotalNumber(total);
          console.log('new',total);
    
     }
    //  const [value, setValue] =  useState(0)
   //  const prevValue = usePreviousValue(value)
     
    return (
        <View style={{marginTop: 20,width:300,alignSelf:'center'}}>
        <Text style={styles.headerText}>Total Expense: {total}</Text>
        <Text style={styles.text}>Enter expenses and categorize them.</Text>
        <View style={{marginTop:20,}}>
        <SearchableDropdown
          onTextChange={(category) => console.log(category)}
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
            maxHeight: '60%',
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