import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import {GOOGLEMAPS_APIKEY} from "@env";

export default function SearchBar ({ cityHandler }) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{key: GOOGLEMAPS_APIKEY}}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
            console.log(data.description);
            const city = data.description.split(',')[0];
            cityHandler(city);
        }}
        placeholder="Search"
        styles={{
            textInput: {
                backgroundColor: "#B3B1B1",
                borderRadius: 20,
                fontWeight: "700",
                marginTop: 7,
            },
            textInputContainer: {
                backgroundColor: "#B3B1B1",
                borderRadius: 50,
                flexDirection: "row",
                alignItems: "center",
                marginRight: 10,
            },
        }}
        renderLeftButton={() => (
            <View style={{ marginLeft: 10 }}>
                <Ionicons name='location-sharp' size={24} />
            </View>
        )}
        renderRightButton={() => (
            <View
                style={
                    {
                        flexDirection: "row",
                        marginRight: 8,
                        backgroundColor: "#979594",
                        padding: 9,
                        borderRadius: 30,
                        alignItems: "center",
                    }
                }
            >
                <AntDesign 
                    name='clockcircle' 
                    size={11} 
                    style={{ marginRight: 6}}
                />
                <Text>Search</Text>
            </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})