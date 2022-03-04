import { Button, Pressable, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import DetailScreen from "./components/Details";
import { useRef } from "react";
const Stack = createNativeStackNavigator();

export default function App() {
  const sheetRef = useRef(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: () => <Text>Albums</Text>,
            headerRight: () => (
              <Pressable
                onPress={() => sheetRef.current.snapTo(0)}
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
              </Pressable>
            ),
          }}
        >
          {(e) => <HomeScreen {...e} sheetRef={sheetRef} />}
        </Stack.Screen>
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: "Shared Album" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
