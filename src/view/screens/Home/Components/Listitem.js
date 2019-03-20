import React from "react";
import { TouchableOpacity } from "react-native";
import { Card, CardItem, Text, Body } from "native-base";

const ListItem = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <CardItem>
          <Body>
            <Text style={{ color: "rgba(0,0,0,0.6)" }}>{text}</Text>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default ListItem;
