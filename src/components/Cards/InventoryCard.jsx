import { Card, Text } from "@ui-kitten/components";
import moment from "moment";
import React, { useEffect } from "react";
import { View } from "react-native";

const InventoryCard = ({item}) => {
  return (
    <Card disabled style={{ width: "100%" }}>
      <Text category="h5" style={{ color: "#0284C7" }}>
        Item Name: {item.inventory_name}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text category="label">
          Item Quantity: {item.inventory_quantity}
        </Text>
        <Text category="label">Status: <Text category="label" status={Number(item.inventory_quantity) < Number(item.inventory_threshold) ? "danger" : "success"}>{Number(item.inventory_quantity) < Number(item.inventory_threshold) ? "Critical" : "In Stock"}</Text></Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text category="label">Item Expiration: {moment(item.inventory_expiration).format('LL')}</Text>
      </View>
    </Card>
  );
};

export default InventoryCard;
