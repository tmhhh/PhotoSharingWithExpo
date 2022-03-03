import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function ListAvatar({ avatars }) {
  console.log({ avatars });
  return (
    <View style={style.listAvatarContainer}>
      <View style={style.imageContainer}>
        {avatars.map((e, index) => (
          <Image
            style={[
              style.image,
              { zIndex: index },
              index !== 0 && { marginLeft: -20 },
            ]}
            key={index}
            source={e.image}
          />
        ))}
      </View>
      <Text style={style.totalAvatar}>{avatars.length} people</Text>
    </View>
  );
}
const style = StyleSheet.create({
  listAvatarContainer: {
    width: "100%",
    paddingHorizontal: 16,
    height: 48,
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#EBEBEB",
  },
  imageContainer: {
    flexDirection: "row",
  },
  image: {
    borderRadius: 40 / 2,
    height: 40,
    width: 40,
    borderWidth: 2,
    borderColor: "white",
  },

  totalAvatar: {
    fontSize: 14,
    fontWeight: "400",
    color: "#C4C4C4",
  },
});
