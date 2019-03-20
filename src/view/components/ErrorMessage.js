import React from "react";
import { Text, View } from "native-base";

const ErrorMessage = ({ text }) => (
  <View padder>
    <Text style={{ alignSelf: "center" }}>{text}</Text>
  </View>
);

export default ErrorMessage;
