import { Text, View, ScrollView } from "react-native";
import ListAvatar from "./ListAvatar";
import ListImages from "./ListImages";
import SharedCard from "./SharedCard";
function Detail({ route, navigation }) {
  const { title, user, background, avatars, id } = route.params;
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <SharedCard {...route.params} />
      <ListAvatar avatars={avatars} />
      <ListImages />
    </View>
  );
}

export default Detail;
