import React from "react";
import { View, Text, Button } from "react-native";


function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Anasayfa</Text>
        <Button title="hakkımızda" onPress={() => navigation.navigate("about")}></Button> 
      </View>
    );
  }

  export default HomeScreen;