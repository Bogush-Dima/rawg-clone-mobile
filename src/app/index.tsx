import { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const AppWrapper: FC = () => {
  return (
    <View style={styles.common}>
      <Text style={styles.text}>Example</Text>
    </View>
  )
}