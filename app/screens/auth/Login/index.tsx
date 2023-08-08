import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

interface LoginProps {

}

export const Login = (props : LoginProps)=>{
    return(
        <View style={styles.mainView}>
            <Text>This is Login Page</Text>
        </View>
    )

}