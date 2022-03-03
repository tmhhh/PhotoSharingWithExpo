import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
function Card({ title, user, background, avatars, id, navigation }) {
  return (
    <TouchableOpacity
      style={style.cardContainer}
      onPress={() =>
        navigation.navigate("Detail", {
          title,
          user,
          background,
          avatars,
          id,
        })
      }
    >
      <ImageBackground source={background} style={style.imageBackground}>
        <View style={style.titleContainer}>
          <Text style={style.mainTitle}>{title}</Text>
          <Text style={style.subTitle}>Created by {user}</Text>
        </View>
        <View style={style.avatarContainer}>
          {avatars.map(({ image }, index) => (
            <Image
              key={index}
              style={[
                style.userImage,
                { zIndex: index },
                index !== avatars.length && { marginLeft: -24 },
              ]}
              source={image}
            />
          ))}
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  cardContainer: {
    height: 82,
    marginTop: 16,
    width: "100%",
    overflow: "hidden",
    borderRadius: 10,
  },
  imageBackground: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    // paddingHorizontal: 10,

    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleContainer: {
    marginLeft: 16,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
  },
  subTitle: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "400",
    color: "#999",
  },
  avatarContainer: {
    flexDirection: "row",
    marginRight: 16,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderWidth: 1,
    borderColor: "white",
  },
});
export default Card;
