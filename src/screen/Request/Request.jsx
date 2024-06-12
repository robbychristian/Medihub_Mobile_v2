import { Text } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import FormButtons from "../../components/Buttons/FormButtons";
import { Surface } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { api } from "../../../config/api";
import RequestCard from "../../components/Cards/RequestCard";

const Request = () => {
    const navigation = useNavigation()
    const [requests, setRequests] = useState([])
    const {user} = useSelector(state => state.auth)
    useEffect(() => {
      api.get(`medicinerequest/getuserrequest?user_id=${user.id}`)
        .then((response) => {
          console.log(response.data)
          setRequests(response.data)
        }).catch(err => {
          console.log(err.response)
        })
        const unsubscribe = navigation.addListener('focus', () => {
        api.get(`medicinerequest/getuserrequest?user_id=${user.id}`)
          .then((response) => {
            console.log(response.data)
            setRequests(response.data)
          }).catch(err => {
            console.log(err.response)
          })
      })
      return unsubscribe
    }, [navigation])
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: requests.length > 0 ? "" : 'center'
          }}
        >
          {requests.length > 0 ? requests.map((item, index) => {
            return(
              <RequestCard item={item} />
            )
          }) : (
            <Text>Nothing to display here</Text>
          )}
        </View>
      </ScrollView>
      <Surface
        style={{
          paddingVertical: 20,
          paddingHorizontal: 15,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
        elevation={1}
      >
        <FormButtons
          buttonColor={"#009688"}
          text={"ADD REQUEST"}
          textColor={"#fff"}
          onPress={() => navigation.navigate('AddRequests')}
          my={4}
        />
        {/* <FormButtons
          buttonColor={"#fff"}
          text={`CANCEL`}
          textColor={"#009688"}
          my={4}
          borderColor={"#009688"}
          onPress={() => {
            navigation.goBack();
          }}
        /> */}
      </Surface>
    </View>
  );
};

export default Request;
