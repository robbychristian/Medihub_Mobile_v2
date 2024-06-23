import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { View } from 'react-native'
import { DEV_URL } from '../../../config/filepath'
import Loading from '../../components/Loading'
import { Text } from '@ui-kitten/components'
import moment from 'moment'
import MedicineCard from '../../components/Cards/MedicineCard'

const ViewRequest = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const [data, setData] = useState(null)
    useEffect(() => {
        console.log((JSON.parse(route.params.data).user_medicines.length))
        setData(JSON.parse(route.params.data))
        const unsubscribe = navigation.addListener('focus', () => {
            setData(JSON.parse(route.params.data))
        })
        return unsubscribe
    }, [navigation])
    return (
        <View>
            {data && (
            <>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text category='h5' style={{ paddingVertical: 15 }}>PRESCRIPTION IMAGE</Text>
                    <Image source={{ uri: `${DEV_URL}/image/prescriptions/${data.prescription.prescription_image}` }} style={{ width: "100%" , height: 300}} />
                </View>
                <View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                        <Text category='h5'>Order #: {data.order_reference}</Text>
                        <View style={{ backgroundColor: 'rgb(245 158 11)', borderRadius: 10, paddingHorizontal: 8, paddingVertical: 5 }}>
                            <Text category='label' style={{ color: "#fff" }}>{data.order_status}</Text>
                        </View>
                    </View>
                    <Text category='h6'>Name: {data.user.first_name} {data.user.last_name}</Text>
                    <Text category='h6'>Email: {data.user.email}</Text>
                    <Text category='h6'>Date: {moment(data.created_at).format("LL")}</Text>
                </View>
                <View style={{ width: '100%' }}>
                    {data.user_medicines.length > 0 && data.user_medicines.map((item, index) => {
                        return (
                            <MedicineCard item={item} key={index} />
                        )
                    })}
                </View>
            </>
            )}
        </View>
    );
}

export default ViewRequest;