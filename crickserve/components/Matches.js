import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View,Button} from 'react-native';
 
export default class Matches extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true,matches:[]}
      }
    
      componentDidMount(){
 
        return fetch('http://192.168.8.101:8080/')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              matches: responseJson,
              
            }, function(){
          
            });
      
          })
          .catch((error) =>{
            console.error(error);
          });
      }
    
      render(){
    
        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator></ActivityIndicator>
            </View>
          )
        }
    
        return(
          <View style={{flex: 1, paddingTop:20}}>
            <FlatList
              data={this.state.matches}
              renderItem={
                ({item, index}) => {
                    return (
                      <View style={styles.postbox}>    
                                                        
                            <Text>{item.key}</Text>
                            <Text>{item.moreDetails}</Text>
                            <Text>{item.season}</Text>
                            <Text>{item.shortName}</Text>
                            <Text>{item.status}</Text>
                            <Text>{item.statusOverview}</Text>
                            <Text>{item.statusShortDescription}</Text>
                                                              
                            
                        </View>
                    );
                }
            }
            key={
                (item) => item.toString()
            }
            />
          </View>
        );
      }
}

const styles = StyleSheet.create({
  
      postbox: {
        flex: 1,
        borderWidth:1,
        borderRadius: 10,
        borderColor:'#5998C5',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding:30,
      },
  });

 


