import { Card, Text } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";

const RequestCard = ({ item }) => {
  return (
    <Card disabled style={{ width: '100%' }}>
      <Text category="h5" style={{ color: "#0284C7" }}>
        Reference #: {item.order_reference}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text category="label">Name: {item.user.first_name} {item.user.last_name}</Text>
        <Text category="label">Status: {item.order_status}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text category="label">Total Quantity: {item.order_quantity}</Text>
      </View>
    </Card>
  );
};

export default RequestCard;
