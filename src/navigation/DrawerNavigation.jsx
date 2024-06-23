import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import Home from "../screen/Home";
import { useDispatch, useSelector } from "react-redux";
import { Drawer, DrawerItem, IndexPath } from "@ui-kitten/components";
import Request from "../screen/Request/Request";
import AddRequest from "../screen/Request/AddRequest";
import Scanner from "../screen/Request/Scanner";
import Inventory from "../screen/Inventory/Inventory";
import ViewRequest from "../screen/Request/ViewRequest";

const DrawerStack = createDrawerNavigator();

const DrawerContent = ({ navigation, state }) => {
  const {user} = useSelector(state => state.auth)
  const dispatch = useDispatch();
  return (
    <Drawer
      selectedIndex={new IndexPath(state.index)}
      onSelect={(index) => {
        if (user.user_role == 2) {
          if (index != 5) {
            navigation.navigate(state.routeNames[index.row]);
          }
        } else {
          if (index != 4) {
            navigation.navigate(state.routeNames[index.row]);
          }
        }
      }}
      style={{ marginTop: 50 }}
    >
      <DrawerItem title={`Home`} />
      {user.user_role == 2 && (
      <DrawerItem title={`Inventory`} />
      )}
      <DrawerItem title={`Requests`} />
      <DrawerItem title={`Scanner`} />
      <DrawerItem
        title={`Logout`}
        onPress={async () => {
          navigation.navigate("Login");
          await dispatch(logout());
        }}
      />
    </Drawer>
  );
};

const DrawerNavigation = () => {
  const navigation = useNavigation();
  const {user} = useSelector(state => state.auth)
  const route = useRoute();

  return (
    <DrawerStack.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgb(2 132 199)",
        },
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <DrawerStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "DASHBOARD", headerTitleAlign: "center" }}
      />
      {user.user_role == 2 && (
        <DrawerStack.Screen
          name="Inventory"
          component={Inventory}
          options={{ headerTitle: "INVENTORY", headerTitleAlign: "center" }}
        />
      )}
      <DrawerStack.Screen
        name="Requests"
        component={Request}
        options={{ headerTitle: "REQUESTS", headerTitleAlign: "center" }}
      />
        <DrawerStack.Screen
          name="Scanner"
          component={Scanner}
          options={{ headerTitle: "SCANNER", headerTitleAlign: "center" }}
        />
      <DrawerStack.Screen
        name="AddRequests"
        component={AddRequest}
        options={{ headerTitle: "ADD REQUESTS", headerTitleAlign: "center" }}
      />
      <DrawerStack.Screen
        name="ViewRequest"
        component={ViewRequest}
        options={{ headerTitle: "VIEW REQUEST", headerTitleAlign: "center" }}
      />
      {/* <DrawerStack.Screen
        name="Services"
        component={Services}
        options={{ headerTitle: "SERVICES", headerTitleAlign: "center" }}
      />
      <DrawerStack.Screen
        name="Announcement"
        component={Announcement}
        options={{ headerTitle: "ANNOUNCEMENTS", headerTitleAlign: "center" }}
      />
      <DrawerStack.Screen
        name="Records"
        component={Records}
        options={{ headerTitle: "RECORDS", headerTitleAlign: "center" }}
      />
      <DrawerStack.Screen
        name="Tanod"
        component={Tanod}
        options={{
          headerTitle: "TANOD DEPLOYMENT",
          headerTitleAlign: "center",
        }}
      />
      <DrawerStack.Screen
        name="DocumentSubmission"
        component={DocumentSubmission}
        options={{
          headerTitle: "DOC. SUBMISSION",
          headerTitleAlign: "center",
        }}
      />
      <DrawerStack.Screen
        name="BlotterReport"
        component={BlotterReports}
        options={{
          headerTitle: "BLOTTER REPORT",
          headerTitleAlign: "center",
        }}
      />
      <DrawerStack.Screen
        name="Reservations"
        component={Reservations}
        options={{
          headerTitle: "RESERVATIONS",
          headerTitleAlign: "center",
        }}
      />
      <DrawerStack.Screen
        name="Clinic"
        component={Clinic}
        options={{
          headerTitle: "CLINIC",
          headerTitleAlign: "center",
        }}
      />
      <DrawerStack.Screen
        name="Transactions"
        component={Transaction}
        options={{
          headerTitle: "TRANSACTIONS",
          headerTitleAlign: "center",
        }}
      />
      <DrawerStack.Screen
        name="BarangayRecords"
        component={BarangayRecords}
        options={{
          headerTitle: "BRGY. RECORDS",
          headerTitleAlign: "center",
        }}
      />
      <DrawerStack.Screen
        name="IncidentReports"
        component={IncidentReports}
        options={{
          headerTitle: "INCIDENT REPORTS",
          headerTitleAlign: "center",
        }}
      />
      <DrawerStack.Screen
        name="TransactionRecords"
        component={TransactionRecords}
        options={{
          headerTitle: "TRANSACTION REC.",
          headerTitleAlign: "center",
        }}
      />
      <DrawerStack.Screen
        name="BarangayNews"
        component={BarangayNews}
        options={{ headerTitle: "BARANGAY NEWS", headerTitleAlign: "center" }}
      /> */}
    </DrawerStack.Navigator>
  );
};

export default DrawerNavigation;
