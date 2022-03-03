import { View, Text, ImageBackground, StyleSheet } from "react-native";

export default function SharedCard({ title, user, background, avatars, id }) {
  return (
    <ImageBackground style={style.ImageBackground} source={background}>
      <View style={style.container}>
        <View style={style.titleContainer}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.subTitle}>Created by {user}</Text>
        </View>
        <Text style={[style.subTitle, { marginBottom: 16 }]}>102 photos</Text>
      </View>
    </ImageBackground>
  );
}
const style = StyleSheet.create({
  ImageBackground: {
    height: 123,
    borderRadius: 10,
    overflow: "hidden",
    resizeMode: "cover",
    width: "100%",
    marginTop: 16,
  },
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  titleContainer: { marginBottom: 16 },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#ffff",
    marginTop: 5,
  },
});
