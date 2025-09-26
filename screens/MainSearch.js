import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { useEffect, useState } from 'react';
import { ActivityIndicator, BackHandler, FlatList,  TextInput, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import filter from 'lodash.filter';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'; // Better API for product-like data

const MainSearch  = () =>{
  
    const [searchquery,setsearchquery] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const [data,setData] = useState([])
    const [error,setError] = useState(null)
    const [fullDate,setFullData] = useState([])
    const [addedItems, setAddedItems] = useState([]) // Track added items
    
    useEffect(()=>{
      setIsLoading(true);
      fetchData(API_ENDPOINT)
    },[])
    
    const fetchData = async (API_ENDPOINT) =>{
      try{
        const responce = await fetch(API_ENDPOINT)
        const json = await responce.json()
        
        // Transform the data to look more like products
        const transformedData = json.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          company: user.company?.name || 'No Company',
          phone: user.phone,
          website: user.website,
          // Create a product-like structure
          productName: `Product ${user.id}`,
          price: `$${(Math.random() * 100 + 10).toFixed(2)}`,
          category: user.company?.bs || 'General',
          image: `https://picsum.photos/100/100?random=${user.id}` // Random product image
        }));
        
        setData(transformedData);
        console.log(transformedData)
        setFullData(transformedData);
        setIsLoading(false)
        
    
    
      }catch(e){
    
        setError(e)
        console.log(e)
      }
     
    }
    
    const handelSearch = (query) => {
      setsearchquery(query);
      const formatedQuery = query.toLowerCase()
      const filteredData = filter(fullDate, (item)=> {
        return contains(item,formatedQuery);
      }) 
      setData(filteredData)
    
    }
    
    const handleIconPress = (item) => {
      const isAdded = addedItems.includes(item.id);
      
      if (isAdded) {
        // Remove from added items
        setAddedItems(prev => prev.filter(id => id !== item.id));
        console.log('Removed from list:', item.productName);
      } else {
        // Add to added items
        setAddedItems(prev => [...prev, item.id]);
        console.log('Added to list:', item.productName);
      }
    };
    
    const contains = (item, query) => {
      const { name, email, productName, category, company } = item;
      const searchString = `${name.toLowerCase()} ${email.toLowerCase()} ${productName.toLowerCase()} ${category.toLowerCase()} ${company.toLowerCase()}`;
      
      return searchString.includes(query);
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
          {/* Header */}
          <View style={styles.header}>
            <Icon name="magnify" size={28} color="#007BFF" />
            <Text style={styles.headerTitle}>Product Search</Text>
            <View style={styles.addedCounter}>
              <Text style={styles.addedCountText}>{addedItems.length}</Text>
            </View>
          </View>
          
          {/* Search Box */}
          <TextInput 
            placeholder="Search for products, categories, companies..." 
            clearButtonMode="always" 
            style={styles.searchBox} 
            autoCapitalize="none" 
            autoCorrect={false} 
            value={searchquery}
            onChangeText={(query) => handelSearch(query)} 
          />
          
          {/* Results Counter */}
          <Text style={styles.resultsCounter}>
            {data.length} product{data.length !== 1 ? 's' : ''} found
          </Text>
          
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              const isAdded = addedItems.includes(item.id);
              
              return (
                <View style={styles.itemContainer}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <View style={{ flex: 1, marginLeft: 15 }}>
                    <Text style={styles.productName}>{item.productName}</Text>
                    <Text style={styles.textName}>{item.name}</Text>
                    <Text style={styles.textEmail}>{item.company}</Text>
                    <View style={styles.priceContainer}>
                      <Text style={styles.price}>{item.price}</Text>
                      <Text style={styles.category}>{item.category}</Text>
                    </View>
                  </View>
                  <TouchableOpacity 
                    style={[styles.iconContainer, isAdded && styles.iconContainerAdded]} 
                    onPress={() => handleIconPress(item)}
                  >
                    <Icon 
                      name={isAdded ? "check-circle" : "plus-circle"} 
                      size={28} 
                      color={isAdded ? "#FFFFFF" : "#007BFF"} 
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
          />
          
          {/* Extra spacing for PhonePe-style navigation */}
          <View style={{ height: Platform.OS === 'android' ? 90 : 85 }} />
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
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 15,
        marginBottom: 10,
      },
      headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 12,
        flex: 1,
      },
      addedCounter: {
        backgroundColor: '#007BFF',
        borderRadius: 20,
        minWidth: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
      },
      addedCountText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
      },
      searchBox: {
        marginBottom: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderColor: '#007BFF',
        borderWidth: 2,
        borderRadius: 12,
        backgroundColor: '#f8f9fa',
        fontSize: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      resultsCounter: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
        paddingHorizontal: 5,
        fontStyle: 'italic',
      },
      itemContainer:{
        flexDirection:"row",
        alignItems: 'center',
        marginBottom: 15,
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      image:{
        width: 60,
        height: 60,
        borderRadius: 8,
        backgroundColor: '#f0f0f0',
      },
      productName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
      },
      textName:{
        fontSize: 15,
        fontWeight: '600',
        color: '#007BFF',
        marginBottom: 2,
      },
      textEmail:{
        fontSize: 13,
        color: '#666',
        marginBottom: 5,
      },
      priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      },
      price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4CAF50',
      },
      category: {
        fontSize: 12,
        color: '#999',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 8,
      },
      iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 25,
        backgroundColor: '#f0f8ff',
      },
      iconContainerAdded: {
        backgroundColor: '#4CAF50',
      },
    });

MainSearch.navigationOptions = () => {
        return {
          headerShown: true,
        };
      };
    


export default  MainSearch;