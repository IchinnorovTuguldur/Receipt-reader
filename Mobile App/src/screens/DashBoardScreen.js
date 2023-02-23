import { React } from 'react';
import { View, FlatList, Image, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import tempImage from '../receipts/costco1.png';
const images = [
  {id: '1'},
  {id: '2'},
  {id: '3'},
  {id: '4'},
  {id: '5'},
];

function Dashboard() {
    return (  
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Budget $500</Text>
      <View style={styles.container}>
      <Text style={styles.title}>Previous Receipts</Text>
      
      <FlatList
        horizontal
        data={images}
        renderItem={({item}) => {
         return <Image style={styles.item} source={tempImage} />
        }}
        keyExtractor={item => item.id}
      />
      </View>
      </ScrollView>
    );  
  }


const styles = StyleSheet.create({
  container: {
  },
  item: {
    backgroundColor: '#a9a9ac',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 160,
    width: 90,
    
  },
  title: {
    padding: 20,
    fontSize: 32,

  },
  scrollView: {
    marginHorizontal: 20,
  }
});
  
export default Dashboard;