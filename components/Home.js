import { StyleSheet, Text, View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import activitiesData from '../assets/data/activitiesData'
import discoverCategoriesData from '../assets/data/discoverCategoriesData'
import discoverData from '../assets/data/discoverData'
import learnMoreData from '../assets/data/learnMoreData'
import {SafeAreaView} from 'react-native-safe-area-context'
import profile from '../assets/images/person.png'


Feather.loadFont();
Entypo.loadFont();

const Home = ({navigation}) => {
  const renderDiscoverItem = ({item}) =>{
    return(
      <TouchableOpacity
        onPress={()=>navigation.navigate('Details',{
          item:item
        })}
      
      >
        <ImageBackground
          source={item.image}
          style={[styles.discoverItem,{marginLeft:item.id==='discover-1'?20:0}]}
          imageStyle={styles.discoverItemImage}
        >
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name='location-pin' size={18} color={colors.white}/> 
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  };
  const renderActivityItem = ({item}) => {
    return(
    <View style={[styles.activityItemWrapper,
      {marginLeft:item.id==='activities-1' ? 20 : 0}
    ]}>
      <Image source={item.image} style={styles.activityItemImage}/>
      <Text style={styles.activityItemText}>{item.title}</Text>
    </View>
  )};
  const renderLearnMoreItem = ({item}) => {
    return(
      <View>
        <ImageBackground
         source={item.image}
         style={[styles.learnMoreItem,{
           marginLeft: item.id==='learnMore-1' ? 20 : 0
         }]}
         imageStyle={styles.learnMoreItemImage}
        >
          <Text style={styles.learnMoreItemText}>{item.title}</Text>

        </ImageBackground>
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
        <View style={styles.menuWrapper}>
          <Feather name='menu'
          size={32} 
          color={colors.black} 
          style={styles.menuIcon} 
          />
          <Image 
          source={profile}
          style={styles.profileImage}
          />
        </View>
        </SafeAreaView>
        {/*Discover*/}
        <View style={styles.discoversWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <Text style={[styles.discoverCategoriesText, {color:colors.orange}]}>All</Text>
            <Text style={styles.discoverCategoriesText}>Destinations</Text>
            <Text style={styles.discoverCategoriesText}>Cities</Text>
            <Text style={styles.discoverCategoriesText}>Experiences</Text>
          </View>
          <View style={styles.dicoverItemWrapper}>
            <FlatList 
              data={discoverData}
              renderItem={renderDiscoverItem}
              keyExtractor={(item)=>item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        {/*Activies*/}
        <View style={styles.activityWrapper}>
          <Text style={styles.activityWrapperTitle}>Activities</Text>
          <View style={styles.activitiesItemWrapper}>
            <FlatList 
              data={activitiesData}
              renderItem={renderActivityItem}
              keyExtractor={(item)=>item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        {/*Learn More*/}
        <View style={styles.LearnMoreWrapper}>
          <Text style={styles.LearnMoreTitle}> Learn More</Text>
          <View style={styles.LearnMoreItemWrapper}>
            <FlatList 
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item)=>item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
       </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    color:colors.white
  },
  menuWrapper:{
    marginHorizontal:20,
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  
  profileImage:{
    height:52,
    width:52,
    borderRadius:10,
  },
  discoversWrapper:{
    //marginHorizontal:20,
    marginTop:20
  },
  discoverTitle:{
    fontSize:32,
    fontWeight:'bold',
    marginHorizontal:20
  },
  discoverCategoriesWrapper:{
    flexDirection:'row',
    marginTop:20,
    marginHorizontal:20
  },
  discoverCategoriesText:{
    marginRight:30,
    color:colors.gray,
    fontSize:16,
  },
  dicoverItemWrapper:{
    paddingVertical:20
  },
  discoverItem:{
    width:170,
    height:250,
    justifyContent:'flex-end',
    paddingHorizontal:10,
    paddingVertical:20,
    marginRight:20,
  },
  discoverItemImage:{
    borderRadius:20, 
  },
  discoverItemTitle:{
    fontSize:18,
    color:colors.white,
    fontWeight:'bold'
  },
  discoverItemLocationWrapper:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:5
  },
  discoverItemLocationText:{
    fontSize:14,
    color:colors.white,
    fontWeight:'bold',
    marginLeft:5
  },
  activityWrapper:{
    marginTop:10,
  },
  activityWrapperTitle:{
    marginHorizontal:20,
    fontSize:24,
    fontWeight:'bold',
    color:colors.black
  },
  activitiesItemWrapper:{
    paddingVertical:20

  },
  activityItemWrapper:{
    justifyContent:'center',
    alignItems:'center',
    marginRight:20,
  },
  activityItemImage:{
    width:36,

  },
  activityItemText:{
    marginTop:5,
    fontSize:14,
    fontWeight:'bold',
    color:colors.gray
  },
  LearnMoreWrapper:{
    marginTop:10
  },
  LearnMoreTitle:{
    marginHorizontal:20,
    fontSize:24,
    fontWeight:'bold',
    color:colors.black
  },
  LearnMoreItemWrapper:{
    paddingVertical:20
  },
  learnMoreItem:{
    width:170,
    height:180,
    justifyContent:'flex-end',
    marginRight:20
  },
  learnMoreItemImage:{
    borderRadius:20
  },
  learnMoreItemText:{
    fontSize:18,
    fontWeight:'bold',
    color:colors.white,
    marginHorizontal:10,
    marginVertical:20
  }
})