import { FlatList, Text, Image, View } from "react-native";
import backgroundImages from "../../assets/data/backgroundImages";
const BackGroundImage = ({ background }) => {
  return (
    <Image
      style={{ height: 112, width: 112, resizeMode: "cover", marginBottom: 5 }}
      source={background}
    />
  );
};
const ListImages = () => {
  return (
    <>
      <Text style={{ textAlign: "center", marginTop: 32 }}>Photos</Text>
      <FlatList
        data={backgroundImages}
        keyExtractor={(item, index) => index}
        // horizontal
        style={{ marginTop: 5 }}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        numColumns={3}
        scrollEnabled={true}
        renderItem={(e) => {
          console.log({ e });
          return (
            <Image
              style={{
                height: 112,
                width: 112,
                resizeMode: "cover",
                marginBottom: 5,
              }}
              source={e.item.background}
            />
          );
        }}
      />
      {/* <View
        style={{
          marginTop: 5,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {backgroundImages.map((e) => (
          <BackGroundImage {...e} />
        ))}
      </View> */}
    </>
  );
};

export default ListImages;
