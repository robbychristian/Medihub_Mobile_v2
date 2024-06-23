import { Card, Text } from '@ui-kitten/components';
import moment from 'moment';
import React from 'react'
import { View } from 'react-native';

const MedicineCard = ({item}) => {
    return (
        <Card disabled style={{ width: "100%" }}>
          <Text category="h5" style={{ color: "#0284C7" }}>
            Medicine Name: {item.medicine_name}
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text category="label">
              Medicine Quantity: {item.medicine_quantity}
            </Text>
            <Text category="label">Medicine Dose: {item.medicine_dose}</Text>
          </View>
        </Card>
    );
}

export default MedicineCard;