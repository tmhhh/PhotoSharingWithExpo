import { View, Text, ScrollView, Button, Pressable } from "react-native";
import React, { useRef } from "react";

import BottomSheet from "reanimated-bottom-sheet";

import Card from "../Card";
import albumPage from "../../assets/data/albumPage";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function HomeScreen({ navigation, sheetRef }) {
  const renderContent = () => (
    <View
      style={{
        height: 300,
        paddingHorizontal: 16,
        justifyContent: "center",
        backgroundColor: "#CACACA",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          backgroundColor: "white",
          fontSize: 18,
          fontWeight: "700",
          borderRadius: 10,
          overflow: "hidden",
          paddingVertical: 26,
        }}
      >
        Create a new gallery
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          paddingVertical: 16,
          marginTop: 5,
          borderRadius: 10,
          overflow: "hidden",
          position: "relative",
          zIndex: 10,
        }}
        onPress={() => {
          console.log("2");
          sheetRef.current.snapTo(0);
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "400",
          }}
        >
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <ScrollView>
      <View
        style={{
          paddingHorizontal: 15,
          flex: 1,
          alignItems: "center",
        }}
      >
        {albumPage.map((e, index) => (
          <Card navigation={navigation} key={e.id} {...e} />
        ))}
      </View>
      <BottomSheet
        initialSnap={1}
        ref={sheetRef}
        snapPoints={[400, 0]}
        borderRadius={10}
        // renderHeader={() => <Text>header</Text>}
        renderContent={renderContent}
        enabledGestureInteraction={false}
      />
    </ScrollView>
  );
}
