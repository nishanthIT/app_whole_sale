import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useEffect, useState } from 'react';
import { ActivityIndicator, BackHandler, FlatList,  TextInput, Image,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import filter from 'lodash.filter';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const API_ENDPOINT = 'https://randomuser.me/api/?results=20';

const ListItemDetails  = () =>{
  
    const [searchquery,setsearchquery] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const [data,setData] = useState([])
    const [error,setError] = useState(null)
    const [fullDate,setFullData] = useState([])
    
    useEffect(()=>{
      setIsLoading(true);
      fetchData(API_ENDPOINT)
    },[])
    
    const fetchData = async (API_ENDPOINT) =>{
      try{
        const responce = await fetch(API_ENDPOINT)
        const json = await responce.json()
        setData(json.results);
        console.log(json.results)
        setFullData(json.results);
        setIsLoading(false)
        
    
    
      }catch(e){
    
        setError(e)
        console.log(e)
      }
    
    }
    
    const handelSearch = (query) => {
      setsearchquery(query);
      const formatedQuery = query.toLowerCase()
      const filteredData = filter(fullDate, (user)=> {
        return contains(user,formatedQuery);
      }) 
      setData(filteredData)
    
    }
    
    // const contains = ((name ,email) =>{
    //   const{first,last} = name;
    //   if( first.includes(query) || last.includes(query) || email.includes(query)){ return true; }
    //   return false;
    // })
    const contains = (user, query) => {
      const { name, email } = user;
      const fullName = `${name.first.toLowerCase()} ${name.last.toLowerCase()}`; // Combine first and last name
      const lowerCaseEmail = email.toLowerCase();
    
      return (
        fullName.includes(query) || lowerCaseEmail.includes(query)
      );
    };
    
    
    if(isLoading){
      return(
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
           <ActivityIndicator size={"large"} color='#5500dc'/>
        </View>
      )
    }
    if(error){
      return(
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
           <Text>
            Error in fetching data... Please check your internet connection!
           </Text>
        </View>
      )
    }
    
    
      return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20, paddingTop: 20 }}>
  <TextInput 
    placeholder="Search" 
    clearButtonMode="always" 
    style={styles.searchBox} 
    autoCapitalize="none" 
    autoCorrect={false} 
    value={searchquery}
    onChangeText={(query) => handelSearch(query)} 
  />
  
  <FlatList
  data={data}
  keyExtractor={(item) => item.login.username}
  renderItem={({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.picture.thumbnail }} style={styles.image} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.textName}>{item.name.first} {item.name.last}</Text>
        <Text style={styles.textEmail}>{item.email}</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={() => handleIconPress(item)}>
      <MaterialCommunityIcons name="delete" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )}
/>


</SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      searchBox: {
        marginTop: 20, // Adjust the space above the search bar
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#fff', // Optional: Better contrast
      },
      itemContainer:{
        flexDirection:"row",
        alignItems: 'center',
        marginBottom:10,
        marginTop:10,
      },
      image:{
        width:50,
        height:50,
        borderRadius:25,
      },
      textName:{
        fontSize:17,
        marginLeft:10,
        fontWeight:"600",
      },
      textEmail:{
        fontSize:14,
        marginLeft:10,
        color:"gray",
      }, iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },
      icon: {
        fontSize: 20,
        color: '#4CAF50', // Green color or your choice
      }
    });

    ListItemDetails.navigationOptions = () => {
        return {
          headerShown: true,
        };
      };
    


export default  ListItemDetails;