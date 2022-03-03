import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailScreen from "./components/Details";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <Text>Albums</Text>,
            headerRight: () => (
              <View
                style={{
                  // padding: 5,
                  backgroundColor: "#007AFF",
                  height: 32,
                  width: 32,
                  borderRadius: 32 / 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "white",
                  }}
                >
                  +
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: "Shared Album" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
