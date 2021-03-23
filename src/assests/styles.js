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
        shadowOffset: { width: 0, height: 1 }
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
    justifyContent: 'space-between'
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
  }
})
