import { Button, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { View, ScrollView, TouchableOpacity, Image } from "react-native";
import CustomTextInput from "../../components/Inputs/CustomTextInput";
import * as DocumentPicker from "expo-document-picker";
import { Toast } from "toastify-react-native";
import { registerUser } from "../../store/auth/User";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [page, setPage] = useState(1);
  const [fileUpload, setFileUpload] = useState(null)
  const [displayFileUpload, setDisplayFileUpload] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitPage1 = (data) => {
    console.log(data);
    // formdata.append("first_name", data.first_name);
    // formdata.append("last_name", data.last_name);
    // formdata.append("email", data.email);
    // formdata.append("username", data.username);
    // formdata.append("password", data.password);
    // formdata.append("password_confirmation", data.password_confirmation);
    setPage(2)
  };
  const onSubmitPage2 = (data) => {
    console.log(data);
    // formdata.append("contact_no", data.contact_no);
    // formdata.append("address", data.address);
    // formdata.append("barangay", data.barangay);
    // formdata.append("gender", data.gender);
    // formdata.append("qcitizen_id", data.qcitizen_id);
    setPage(3)
  };

  const onSubmitPage3 = async (data) => {
    console.log(fileUpload)
    const formdata = new FormData()
    const newFile = {
      uri: fileUpload.uri,
      type: "multipart/form-data",
      name: fileUpload.name,
    };
    formdata.append('first_name', data.first_name)
    formdata.append('last_name', data.last_name)
    formdata.append('email', data.email)
    formdata.append('username', data.username)
    formdata.append('password', data.password)
    formdata.append('password_confirmation', data.password_confirmation)
    formdata.append('contact_number', data.contact_no)
    formdata.append('address', data.address)
    formdata.append('barangay', data.barangay)
    formdata.append('gender', data.gender)
    formdata.append('birthday', data.birthday)
    formdata.append('qcitizen_id', data.qcitizen_id)
    formdata.append('uploaded_id', newFile)

    try {
      const response = await dispatch(registerUser(formdata))
      if (response.type == "auth/register/fulfilled") {
        Toast.success("Account has been registered!")
        navigation.navigate('Login')
      } else {
        Toast.error("There was an error registering your account")
      }
    } catch(err) {
      console.log(err)
      Toast.error("There was an error registering your account")
    }
  };

  // const buttonAction = () => {
  //   if (page == 1) {

  //     handleSubmit(onSubmitPage1);
  //     setPage(2)
  //   } else if (page == 2) {
  //     handleSubmit(onSubmitPage2);
  //     setPage(3)
  //   } else if (page == 3) {
  //     if (fileUpload == null) {
  //       Toast.error("Please upload your ID")
  //     }
  //   }
  // };

  const uploadFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    setFileUpload(result.assets[0])
    setDisplayFileUpload(result.assets[0].uri)
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <View style={{ width: "90%" }}>
            <Text category="h4">Register Your Account!</Text>
            <Text category="p2" appearance="hint">
              By creating your account, you agree to the terms and condition of
              our application!
            </Text>
            {page == 1 ? (
              <>
              <View style={{ marginVertical: 20 }}>
                <CustomTextInput
                  control={control}
                  errors={errors}
                  label={`First name`}
                  name={"first_name"}
                  rules={{ required: true }}
                  message={`First name is required!`}
                  my={5}
                />
                <CustomTextInput
                  control={control}
                  errors={errors}
                  label={`Last name`}
                  name={"last_name"}
                  rules={{ required: true }}
                  message={`Last name is required!`}
                  my={5}
                />
                <CustomTextInput
                  control={control}
                  errors={errors}
                  label={`Email`}
                  name={"email"}
                  rules={{ required: true }}
                  message={`Email is required!`}
                  my={5}
                />
                <CustomTextInput
                  control={control}
                  errors={errors}
                  label={`Username`}
                  name={"username"}
                  rules={{ required: true }}
                  message={`Username is required!`}
                  my={5}
                />
                <CustomTextInput
                  control={control}
                  errors={errors}
                  label={`Password`}
                  name={"password"}
                  rules={{ required: true }}
                  message={`Password is required!`}
                  secureTextEntry
                  my={5}
                />
                <CustomTextInput
                  control={control}
                  errors={errors}
                  label={`Confirm Password`}
                  name={"password_confirmation"}
                  rules={{ required: true }}
                  message={`Confirm Password is required!`}
                  secureTextEntry
                  my={5}
                />
              </View>
              <View style={{ marginVertical: 20 }}>
                <CustomTextInput
                  control={control}
                  errors={errors}
                  label={`Contact Number`}
                  name={"contact_no"}
                  rules={{ required: true }}
                  message={`Contact number is required!`}
                  my={5}
                />
                <CustomTextInput
                  control={control}
                  errors={errors}
                  label={`Address`}
                  name={"address"}
                  rules={{ required: true }}
                  message={`Address is required!`}
                  my={5}
                />
                <CustomTextInput
                  control={control}
                  errors={errors}
                  label={`Barangay`}
                  name={"barangay"}
                  rules={{ required: true }}
                  message={`Barangay is required!`}
                  my={5}
                />
                <CustomTextInput
                  control={control}
                  errors={errors}
                  label={`Gender`}
                  name={"gender"}
                  rules={{ required: true }}
                  message={`Gender is required!`}
                  my={5}
                />
                <CustomTextInput
                  control={control}
                  errors={errors}
                  label={`Birthday`}
                  name={"birthday"}
                  rules={{ required: true }}
                  message={`Birthday is required!`}
                  my={5}
                />
                <CustomTextInput
                  control={control}
                  errors={errors}
                  label={`QCitizen ID`}
                  name={"qcitizen_id"}
                  rules={{ required: true }}
                  message={`QCitizen ID is required!`}
                  my={5}
                />
              </View>
              </>
            ) : (
              <View style={{ marginVertical: 20 }}>
                <TouchableOpacity
                  style={{
                    height: "80%",
                    borderWidth: 1,
                    borderColor: "#ddd",
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: "center"
                  }}
                  onPress={uploadFile}
                >
                  {displayFileUpload !== null ? (
                    <Image source={{ uri: displayFileUpload }} style={{ height: '100%', width: '100%' }} />
                  ) : (
                    <Text appearance="hint">
                      Upload your image here
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            )}
              
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              {page != 1 ? (
                <Button onPress={() => setPage(page - 1)} status="danger">
                  Back
                </Button>
              ) : (
                <View></View>
              )}
              {page == 1 ? (
                <Button onPress={onSubmitPage1}>
                Next
              </Button>
              ) : (
                <Button onPress={handleSubmit(onSubmitPage3)}>
                Register
              </Button>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
