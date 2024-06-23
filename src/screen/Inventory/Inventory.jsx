import { Card, Input, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { api } from '../../../config/api';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../components/Loading';
import InventoryCard from '../../components/Cards/InventoryCard';

const Inventory = () => {
    const {user} = useSelector(state => state.auth)
    const navigation = useNavigation()
    const [inventory, setInventory] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    useEffect(() => {
        if (search == "") {
            api.get(`inventorymanagement/searchinventory?health_care_id=${user.health_care_id}&search=${search}`)
                .then((response) => {
                    setLoading(false)
                    setInventory(response.data)
                }).catch(err => {
                    console.log(err.response)
                })
            }

        const timer = setTimeout(() => {
            setLoading(true)
            api.get(`inventorymanagement/searchinventory?health_care_id=${user.health_care_id}&search=${search}`)
                .then((response) => {
                    setLoading(false)
                    setInventory(response.data)
                }).catch(err => {
                    console.log(err.response)
                })
        }, 2000)

        return () => {
            clearTimeout(timer)
        }
    }, [search])
    return (
        <View style={{ width: "100%", alignItems: 'center' }}>
            <Loading loading={loading} />
            <Card style={{ width: "100%" }}>
                <Input onChangeText={(value) => setSearch(value)} value={search} placeholder='Search...' />
            </Card>
            {inventory.length > 0 && inventory.map((item, index) => {
                return (
                    <InventoryCard item={item} key={index} />
                )
            })}
        </View>
    );
}

export default Inventory;