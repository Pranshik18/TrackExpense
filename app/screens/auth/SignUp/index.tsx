import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

interface SignUpProps {

}

export const SignUp = (props : SignUpProps)=>{
    return(
        <View style={styles.mainView}>
            <Text>This is Sign Up Page</Text>
        </View>
    )

}