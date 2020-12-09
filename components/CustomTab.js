import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import Icons from '../constants/icons';
import {COLORS} from '../constants/theme';

// import { Container } from './styles';

const CustomTab = ({state, focused}) => {

    const navigation = useNavigation();


    function goTo(screenName){
        navigation.navigate(screenName)
    }
  return (
      <View style={{backgroundColor: '#fff', height: 60, flexDirection: 'row'}}>
          <TouchableOpacity
                onPress={() => goTo('Home')}
                activeOpacity={1}
                style={{
                    flex: 1, 
                    alignItems: 'center',
                    justifyContent: 'center'
                    }}>
             <View style={{
                  position: 'absolute',
                  top: state.index === 0 ? -22 : 0,
                  justifyContent: 'center', 
                  alignItems: 'center',
                  height: 50,
                  width: 50,
                  borderWidth: 4,
                  borderColor: state.index === 0 ? '#f8f8f9' : 'transparent',
                  borderRadius: 25,
                  backgroundColor: '#fff'
             }}>

                <Image 
                source={Icons.cutlery}
                style={{
                    width: 25,
                    height: 25,
                    tintColor: state.index === 0 ? COLORS.primary : COLORS.secondary
                }}
                
                />
             </View>
             
          </TouchableOpacity>
          <TouchableOpacity
                onPress={() => goTo('Search')}
                activeOpacity={1}
                style={{
                    flex: 1, 
                    alignItems: 'center',
                    justifyContent: 'center'
                    }}>
             <View style={{
                  position: 'absolute',
                  top: state.index === 1 ? -22 : 0,
                  justifyContent: 'center', 
                  alignItems: 'center',
                  height: 50,
                  width: 50,
                  borderWidth: 4,
                  borderColor: state.index === 1 ? '#f8f8f9' : 'transparent',
                  borderRadius: 25,
                  backgroundColor: '#fff'
             }}>

                <Image 
                source={Icons.search}
                style={{
                    width: 25,
                    height: 25,
                    tintColor: state.index === 1 ? COLORS.primary : COLORS.secondary
                }}
                
                />
             </View>
             
          </TouchableOpacity>
          <TouchableOpacity
                onPress={() => goTo('Like')}
                activeOpacity={1}
                style={{
                    flex: 1, 
                    alignItems: 'center',
                    justifyContent: 'center'
                    }}>
             <View style={{
                  position: 'absolute',
                  top: state.index === 2 ? -22 : 0,
                  justifyContent: 'center', 
                  alignItems: 'center',
                  height: 50,
                  width: 50,
                  borderWidth: 4,
                  borderColor: state.index === 2 ? '#f8f8f9' : 'transparent',
                  borderRadius: 25,
                  backgroundColor: '#fff'
             }}>

                <Image 
                source={Icons.like}
                style={{
                    width: 25,
                    height: 25,
                    tintColor: state.index === 2 ? COLORS.primary : COLORS.secondary
                }}
                />
             </View>
             
          </TouchableOpacity>
          <TouchableOpacity
                onPress={() => goTo('User')}
                activeOpacity={1} 
                style={{
                    flex: 1, 
                    alignItems: 'center',
                    justifyContent: 'center'
                    }}>
             <View style={{
                  position: 'absolute',
                  top: state.index === 3 ? -15 : 0,
                  justifyContent: 'center', 
                  alignItems: 'center',
                  height: 50,
                  width: 50,
                  borderWidth: 4,
                  borderColor: state.index === 3 ? '#f8f8f9' : 'transparent',
                  borderRadius: 25,
                  backgroundColor: '#fff'
             }}>

                <Image 
                source={Icons.user}
                style={{
                    width: 25,
                    height: 25,
                    tintColor: state.index === 3 ? COLORS.primary : COLORS.secondary
                }}
                
                />
             </View>
             
          </TouchableOpacity>
      </View>
  )
}

export default CustomTab;