import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CustomTextInput from "../../components/Inputs/CustomTextInput";
import { useForm } from "react-hook-form";
import { CustomSelect } from "../../components/Inputs/CustomSelect";
import { api } from "../../../config/api";
import { useNavigation } from "@react-navigation/native";

const AddRequest = () => {
  const navigation = useNavigation();
  const [selectedHealthCare, setSelectedHealthCare] = useState('')
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [healthCares, setHealthCares] = useState([]);

  const onSubmit = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    api
      .get("healthcarecenter/getallhealthcares")
      .then((response) => {
        // const hc = response.data
        // let temp = []
        // hc.map((item) => {
        //     console.log(item)
        // })c
        console.log(response.data)
        // setHealthCares(temp)
      })
      .catch((err) => {
        console.log(err.response);
      });
    const unsubscribe = navigation.addListener("focus", () => {
      api
        .get("healthcarecenter/getallhealthcares")
        .then((response) => {
          setHealthCares(response.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* <CustomSelect 
            label={`Health Care`}
            placeholder={`Health Care`}
            // options={healthCares}
            my={5}
            setValue={setSelectedHealthCare}
                /> */}
      </ScrollView>
    </View>
  );
};

export default AddRequest;
