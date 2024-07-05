import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const CustomButton = () => {
    return(
        <View>
        <TouchableOpacity
          style={{
            // flex : 0.5,
            height: 60,
            width: '100%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#1C1B1B"
          }}>
          <Text style={{fontSize: 14, color: '#FFFFFF'}}>Next</Text>
        </TouchableOpacity>
      </View>
    );
}

export default CustomButton;