//import liraries
import { useFonts } from "expo-font"


const Fonts = async () => {
  await useFonts({
    Poppins: require("../res/fonts/Poppins-Regular.ttf"),
  });
};

export default Fonts

