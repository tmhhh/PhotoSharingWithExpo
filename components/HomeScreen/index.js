import { View, Text, ScrollView } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";

import BottomSheet from "@gorhom/bottom-sheet";

import Card from "../Card";
import albumPage from "../../assets/data/albumPage";
export default function HomeScreen({ navigation }) {
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

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
          <>
            <Card navigation={navigation} key={e.id} {...e} />
            {index === 1 && (
              <View
                style={{
                  backgroundColor: "#CACACA",
                  width: "100%",
                  height: 2,
                  marginTop: 16,
                }}
              ></View>
            )}
          </>
        ))}
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={{ height: "100%" }}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </ScrollView>
  );
}
