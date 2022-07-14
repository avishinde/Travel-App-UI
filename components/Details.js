import { StyleSheet, Text, View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,

} from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import Entypo from 'react-native-vector-icons/Entypo'

Entypo.loadFont();
const height = Dimensions.get("window").height

const Details = ({route,navigation}) => {
  const {item} = route.params
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.imageBig}
        style={styles.backgroundImage}
      >
        <TouchableOpacity style={styles.backIcon} 
          onPress={()=>navigation.goBack()}>
          <Entypo name='chevron-left' size={32} color={colors.white}/>
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name='location-pin' size={24} color={colors.white} />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.discriptionWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo name='heart' size={32} color={colors.orange}/>
        </View>
        <View style={styles.discriptionTextWrapper}>
          <Text style={styles.discriptionTitle}>Description</Text>
          <Text style={styles.discriptionText}>{item.description}</Text>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>PRICE</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.price}</Text>
              <Text style={styles.infoSubText}>/person</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>RATING</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.rating}</Text>
              <Text style={styles.infoSubText}>/5</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Duration</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.duration}</Text>
              <Text style={styles.infoSubText}> /hours</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonWrapper}
          onPress={()=>alert('You Booked a Trip!')}
        >
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.white,
  },
  backgroundImage:{
    height:height*0.6,
    justifyContent:'space-between'
  },
  discriptionWrapper:{
    flex:1,
    backgroundColor:colors.white,
    marginTop:-20,
    borderRadius:25
  },
  backIcon:{
    marginTop:40,
    marginLeft:20
  },
  titleWrapper:{
    marginHorizontal:20,
    marginBottom:40,
  },
  itemTitle:{
    color:colors.white,
    fontSize:32,
    fontWeight:'bold'
  },
  locationWrapper:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:5
  },
  locationText:{
    color:colors.white,
    fontSize:16,
    fontWeight:'bold'
  },
  heartWrapper:{
    position:'absolute',
    right:40,
    height:64,
    width:64,
    top:-25,
    backgroundColor:colors.white,
    borderRadius:64,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  discriptionTextWrapper:{
    marginHorizontal:20,
    marginTop:20,
  },
  discriptionTitle:{
    color:colors.black,
    fontSize:24,
    fontWeight:'bold'
  },
  discriptionText:{
    color:colors.darkGray,
    fontSize:16,
    marginTop:20,
    height:85
  },
  infoWrapper:{
    flexDirection:'row',
    marginHorizontal:20,
    justifyContent:'space-between',
    marginTop:20
  },
  infoItem:{

  },
  infoTitle:{
    fontSize:12,
    fontWeight:'bold',
    color:colors.gray 
  },
  infoTextWrapper:{
    flexDirection:'row',
    alignItems:'flex-end',
    marginTop:5
  },
  infoText:{
    color:colors.orange,
    fontSize:24,
    fontWeight:'bold'
  },
  infoSubText:{
    color:colors.gray,
    fontSize:14,
    fontWeight:'bold'
  },
  buttonWrapper:{
    marginTop:40,
    marginHorizontal:20,
    backgroundColor:colors.orange,
    alignItems:'center',
    paddingVertical:15,
    borderRadius:10
  },
  buttonText:{
    color:colors.white,
    fontSize:18,
    fontWeight:'bold'
  },
  

})