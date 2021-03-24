import { Platform, StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  toolbarContainer: {
    height: 50,
    width: width - 20,
    padding: 15,
    flexDirection: 'row',
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 1 },
        zIndex: 15
      },
      android: {
        elevation: 3
      }
    }),
    marginTop: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  toolbarLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  toolbarRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toolbarIcon: {
    color: '#900'
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  modalClose: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowOffset: { width: -1, height: 2 }
      },
      android: {
        elevation: 3
      }
    })
  },
  modalContent: {
    width: '70%',
    height: 250,
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: -1, height: 2 }
      },
      android: {
        elevation: 3
      }
    })
  },
  sortingTextContainer: {
    // padding: 5,
    // marginTop: 14,
    // CUSTOM
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  sortingText: {
    color: '#000',
    fontSize: 15,
  },
  hintButton: {
    backgroundColor: '#fff'
  },
  activityIndicatorContainer:{
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
},
  reload:{
    flexDirection:'row',
    width:100,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFEFD5',
    borderRadius:8,
    marginTop:110,
    borderWidth:1
  },
  reloadText:{
    fontSize: 15,
    fontWeight: "800",
    color:"#900",
    alignSelf:'center',
   },
   text: {
    marginTop: 20,
    fontWeight:'bold',
    alignSelf:'center'
 },
  headerText:{
    marginTop: 20,
    fontSize:22,
    fontWeight:'bold',
    alignSelf:'center'
  },
  textinput:{
    width: 200,
    borderWidth:0.5,
    borderColor:'#900',
    borderRadius:8,
    alignSelf:'center',
    marginTop:30 
},
activityIndicatorContainer:{
  backgroundColor: "#fff",
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
},
})
