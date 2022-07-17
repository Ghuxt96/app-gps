import React, {useState, useEffect}from "react";
import { Text, View } from "react-native";
import {css} from '../css/Css';
import MapView, {Marker, Polyline}from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirecctions from 'react-native-maps-directions';
import { API_KEY } from '@env';
const destinyImage = require('../assets/destination.png');

export default function MapsScreen({ navigation }) {
  const [origin, setOrigin] = useState({
    latitude: 10.693415,
    longitude: -71.633946,
  });
  const [destination, setDestination] = useState({
    latitude:  10.694164849584308,
    longitude: -71.63402435459903,
  });

  useEffect(() => {
    getLocationPermission();
  }, [])

  async function getLocationPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permiso negado");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const current = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
   
     
    }
    setOrigin(current);
  }
  return (
  <View style={css.container}>
      <MapView
       style={css.map}
       initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.9,
        longitudeDelta: 0.4,
    
      }}
      showsUserLocation
      showsMyLocationButton={true}
      followUserLocation={true}
      zoomEnabled={true}
      rotateEnabled={true}
      loadingEnabled={true}
     >
       
      <Marker
          draggable
          coordinate={destination}
          image={destinyImage}
          onDragEnd={(direction) =>
            setDestination(direction.nativeEvent.coordinate)
          }
        />
        <MapViewDirecctions
          origin={origin}
          destination={destination}
          apikey={API_KEY}
          strokeColor="red"
          strokeWidth={6}
          lineDashPattern={[0]}
        />
      </MapView>
    <View style={css.search}>

  </View>
  </View>
    );
}   

