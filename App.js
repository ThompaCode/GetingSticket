import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Button,
  SafeAreaView,
  Alert,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const [selectedDrink, setSelectedDrink] = React.useState("VK");
  const [selectedVolume, setSelectedVolume] = React.useState("");
  const [selectedPercentage, setSelectedPercentage] = React.useState("");
  const [drinkVolume, setDrinkVolume] = React.useState("");
  const [drinkPercentage, setDrinkPercentage] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);

  const drinks = [
    { key: "VK", value: "Vodka" },
    { key: "TQ", value: "Tequila" },
    { key: "RM", value: "Rum" },
    { key: "WS", value: "Whiskey" },
    { key: "GN", value: "Gin" },
    { key: "CG", value: "Cognac" },
    { key: "SP", value: "Sparkling Wine" },
    { key: "WN", value: "Wine" },
    { key: "CR", value: "Cider" },
    { key: "BR", value: "Beer" },
    { key: "AF", value: "Alcohol Free" },
    { key: "OT", value: "Other" },
  ];
  const percentage = {
    VK: [
      { key: 1, value: 10 },
      { key: 2, value: 15 },
      { key: 3, value: 20 },
      { key: 4, value: 25 },
      { key: 5, value: 30 },
      { key: 6, value: 35 },
      { key: 7, value: 40 },
      { key: 8, value: 45 },
      { key: 9, value: 50 },
      { key: 10, value: 55 },
      { key: 11, value: 60 },
    ],
    TQ: [
      { key: 1, value: 10 },
      { key: 2, value: 15 },
      { key: 3, value: 20 },
      { key: 4, value: 25 },
      { key: 5, value: 30 },
      { key: 6, value: 35 },
      { key: 7, value: 40 },
      { key: 8, value: 45 },
      { key: 9, value: 50 },
      { key: 10, value: 55 },
      { key: 11, value: 60 },
    ],
    RM: [
      { key: 1, value: 10 },
      { key: 2, value: 15 },
      { key: 3, value: 20 },
      { key: 4, value: 25 },
      { key: 5, value: 30 },
      { key: 6, value: 35 },
      { key: 7, value: 40 },
      { key: 8, value: 45 },
      { key: 9, value: 50 },
      { key: 10, value: 55 },
      { key: 11, value: 60 },
    ],
    WS: [
      { key: 1, value: 10 },
      { key: 2, value: 15 },
      { key: 3, value: 20 },
      { key: 4, value: 25 },
      { key: 5, value: 30 },
      { key: 6, value: 35 },
      { key: 7, value: 40 },
      { key: 8, value: 45 },
      { key: 9, value: 50 },
      { key: 10, value: 55 },
      { key: 11, value: 60 },
    ],
    GN: [
      { key: 1, value: 10 },
      { key: 2, value: 15 },
      { key: 3, value: 20 },
      { key: 4, value: 25 },
      { key: 5, value: 30 },
      { key: 6, value: 35 },
      { key: 7, value: 40 },
      { key: 8, value: 45 },
      { key: 9, value: 50 },
      { key: 10, value: 55 },
      { key: 11, value: 60 },
    ],
    CG: [
      { key: 1, value: 10 },
      { key: 2, value: 15 },
      { key: 3, value: 20 },
      { key: 4, value: 25 },
      { key: 5, value: 30 },
      { key: 6, value: 35 },
      { key: 7, value: 40 },
      { key: 8, value: 45 },
      { key: 9, value: 50 },
      { key: 10, value: 55 },
      { key: 11, value: 60 },
    ],
    SP: [
      { key: 1, value: 3.5 },
      { key: 2, value: 4 },
      { key: 3, value: 4.5 },
      { key: 4, value: 5 },
      { key: 5, value: 5.5 },
      { key: 6, value: 6 },
      { key: 7, value: 6.5 },
      { key: 8, value: 7 },
      { key: 9, value: 7.5 },
      { key: 10, value: 8 },
      { key: 11, value: 8.5 },
      { key: 12, value: 9 },
      { key: 13, value: 9.5 },
      { key: 14, value: 10 },
      { key: 15, value: 10.5 },
      { key: 16, value: 11 },
      { key: 17, value: 11.5 },
      { key: 18, value: 12 },
      { key: 19, value: 12.5 },
      { key: 20, value: 13 },
      { key: 21, value: 13.5 },
      { key: 22, value: 14 },
      { key: 23, value: 14.5 },
      { key: 24, value: 15 },
      { key: 25, value: 15.5 },
      { key: 26, value: 16 },
      { key: 27, value: 16.5 },
      { key: 28, value: 17 },
      { key: 29, value: 17.5 },
      { key: 30, value: 18 },
      { key: 31, value: 18.5 },
      { key: 32, value: 19 },
      { key: 33, value: 19.5 },
      { key: 34, value: 20 },
    ],
    WN: [
      { key: 1, value: 3.5 },
      { key: 2, value: 4 },
      { key: 3, value: 4.5 },
      { key: 4, value: 5 },
      { key: 5, value: 5.5 },
      { key: 6, value: 6 },
      { key: 7, value: 6.5 },
      { key: 8, value: 7 },
      { key: 9, value: 7.5 },
      { key: 10, value: 8 },
      { key: 11, value: 8.5 },
      { key: 12, value: 9 },
      { key: 13, value: 9.5 },
      { key: 14, value: 10 },
      { key: 15, value: 10.5 },
      { key: 16, value: 11 },
      { key: 17, value: 11.5 },
      { key: 18, value: 12 },
      { key: 19, value: 12.5 },
      { key: 20, value: 13 },
      { key: 21, value: 13.5 },
      { key: 22, value: 14 },
      { key: 23, value: 14.5 },
      { key: 24, value: 15 },
      { key: 25, value: 15.5 },
      { key: 26, value: 16 },
      { key: 27, value: 16.5 },
      { key: 28, value: 17 },
      { key: 29, value: 17.5 },
      { key: 30, value: 18 },
      { key: 31, value: 18.5 },
      { key: 32, value: 19 },
      { key: 33, value: 19.5 },
      { key: 34, value: 20 },
    ],
    CR: [
      { key: 1, value: 3.5 },
      { key: 2, value: 4 },
      { key: 3, value: 4.5 },
      { key: 4, value: 5 },
      { key: 5, value: 5.5 },
      { key: 6, value: 6 },
      { key: 7, value: 6.5 },
      { key: 8, value: 7 },
      { key: 9, value: 7.5 },
      { key: 10, value: 8 },
      { key: 11, value: 8.5 },
      { key: 12, value: 9 },
      { key: 13, value: 9.5 },
      { key: 14, value: 10 },
      { key: 15, value: 10.5 },
      { key: 16, value: 11 },
      { key: 17, value: 11.5 },
      { key: 18, value: 12 },
      { key: 19, value: 12.5 },
      { key: 20, value: 13 },
      { key: 21, value: 13.5 },
      { key: 22, value: 14 },
      { key: 23, value: 14.5 },
      { key: 24, value: 15 },
      { key: 25, value: 15.5 },
      { key: 26, value: 16 },
      { key: 27, value: 16.5 },
      { key: 28, value: 17 },
      { key: 29, value: 17.5 },
    ],
    BR: [
      { key: 1, value: 3.5 },
      { key: 2, value: 4 },
      { key: 3, value: 4.5 },
      { key: 4, value: 5 },
      { key: 5, value: 5.5 },
      { key: 6, value: 6 },
      { key: 7, value: 6.5 },
      { key: 8, value: 7 },
      { key: 9, value: 7.5 },
      { key: 10, value: 8 },
      { key: 11, value: 8.5 },
      { key: 12, value: 9 },
      { key: 13, value: 9.5 },
      { key: 14, value: 10 },
      { key: 15, value: 10.5 },
      { key: 16, value: 11 },
      { key: 17, value: 11.5 },
      { key: 18, value: 12 },
      { key: 19, value: 12.5 },
      { key: 20, value: 13 },
      { key: 21, value: 13.5 },
      { key: 22, value: 14 },
      { key: 23, value: 14.5 },
      { key: 24, value: 15 },
      { key: 25, value: 15.5 },
      { key: 26, value: 16 },
      { key: 27, value: 16.5 },
      { key: 28, value: 17 },
      { key: 29, value: 17.5 },
    ],
    AF: [
      { key: 1, value: "0" },
      { key: 2, value: 0.5 },
    ],
    OT: [
      { key: 1, value: 0.5 },
      { key: 2, value: 1 },
      { key: 3, value: 1.5 },
      { key: 4, value: 2 },
      { key: 5, value: 2.5 },
      { key: 6, value: 3 },
      { key: 7, value: 3.5 },
      { key: 8, value: 4 },
      { key: 9, value: 4.5 },
      { key: 10, value: 5 },
      { key: 11, value: 5.5 },
      { key: 12, value: 6 },
      { key: 13, value: 6.5 },
      { key: 14, value: 7 },
      { key: 15, value: 7.5 },
      { key: 16, value: 8 },
      { key: 17, value: 8.5 },
      { key: 18, value: 9 },
      { key: 19, value: 9.5 },
      { key: 20, value: 10 },
      { key: 21, value: 10.5 },
      { key: 22, value: 11 },
      { key: 23, value: 11.5 },
      { key: 24, value: 12 },
      { key: 25, value: 12.5 },
      { key: 26, value: 13 },
      { key: 27, value: 13.5 },
      { key: 28, value: 14 },
      { key: 29, value: 14.5 },
      { key: 30, value: 15 },
      { key: 31, value: 15.5 },
      { key: 32, value: 16 },
      { key: 33, value: 16.5 },
      { key: 34, value: 17 },
      { key: 35, value: 17.5 },
      { key: 36, value: 18 },
      { key: 37, value: 18.5 },
      { key: 38, value: 19 },
      { key: 39, value: 19.5 },
      { key: 40, value: 20 },
      { key: 41, value: 20.5 },
      { key: 42, value: 21 },
      { key: 43, value: 21.5 },
      { key: 44, value: 22 },
      { key: 45, value: 22.5 },
      { key: 46, value: 23 },
      { key: 47, value: 23.5 },
      { key: 48, value: 24 },
      { key: 49, value: 24.5 },
      { key: 50, value: 25 },
      { key: 51, value: 25.5 },
      { key: 52, value: 26 },
      { key: 53, value: 26.5 },
      { key: 54, value: 27 },
      { key: 55, value: 27.5 },
      { key: 56, value: 28 },
      { key: 57, value: 28.5 },
      { key: 58, value: 29 },
      { key: 59, value: 29.5 },
      { key: 60, value: 30 },
      { key: 61, value: 30.5 },
      { key: 62, value: 31 },
      { key: 63, value: 31.5 },
      { key: 64, value: 32 },
      { key: 65, value: 32.5 },
      { key: 66, value: 33 },
      { key: 67, value: 33.5 },
      { key: 68, value: 34 },
      { key: 69, value: 34.5 },
      { key: 70, value: 35 },
      { key: 71, value: 35.5 },
      { key: 72, value: 36 },
      { key: 73, value: 36.5 },
      { key: 74, value: 37 },
      { key: 75, value: 37.5 },
      { key: 76, value: 38 },
      { key: 77, value: 38.5 },
      { key: 78, value: 39 },
      { key: 79, value: 39.5 },
      { key: 80, value: 40 },
      { key: 81, value: 40.5 },
      { key: 82, value: 41 },
      { key: 83, value: 41.5 },
      { key: 84, value: 42 },
      { key: 85, value: 42.5 },
      { key: 86, value: 43 },
      { key: 87, value: 43.5 },
      { key: 88, value: 44 },
      { key: 89, value: 44.5 },
      { key: 90, value: 45 },
      { key: 91, value: 45.5 },
      { key: 92, value: 46 },
      { key: 93, value: 46.5 },
      { key: 94, value: 47 },
      { key: 95, value: 47.5 },
      { key: 96, value: 48 },
      { key: 97, value: 48.5 },
      { key: 98, value: 49 },
      { key: 99, value: 49.5 },
      { key: 100, value: 50 },
      { key: 101, value: 50.5 },
      { key: 102, value: 51 },
      { key: 103, value: 51.5 },
      { key: 104, value: 52 },
      { key: 105, value: 52.5 },
      { key: 106, value: 53 },
      { key: 107, value: 53.5 },
      { key: 108, value: 54 },
      { key: 109, value: 54.5 },
      { key: 110, value: 55 },
      { key: 111, value: 55.5 },
      { key: 112, value: 56 },
      { key: 113, value: 56.5 },
      { key: 114, value: 57 },
      { key: 115, value: 57.5 },
      { key: 116, value: 58 },
      { key: 117, value: 58.5 },
      { key: 118, value: 59 },
      { key: 119, value: 59.5 },
      { key: 120, value: 60 },
      { key: 121, value: 60.5 },
      { key: 122, value: 61 },
      { key: 123, value: 61.5 },
      { key: 124, value: 62 },
      { key: 125, value: 62.5 },
      { key: 126, value: 63 },
      { key: 127, value: 63.5 },
      { key: 128, value: 64 },
      { key: 129, value: 64.5 },
      { key: 130, value: 65 },
      { key: 131, value: 65.5 },
      { key: 132, value: 66 },
      { key: 133, value: 66.5 },
      { key: 134, value: 67 },
      { key: 135, value: 67.5 },
      { key: 136, value: 68 },
      { key: 137, value: 68.5 },
      { key: 138, value: 69 },
    ],
  };
  const volume = [
    { key: 1, value: 1 },
    { key: 2, value: 2 },
    { key: 3, value: 3 },
    { key: 4, value: 4 },
    { key: 5, value: 5 },
    { key: 6, value: 6 },
    { key: 7, value: 7 },
    { key: 8, value: 8 },
    { key: 9, value: 9 },
    { key: 10, value: 10 },
  ];
  // Function to update drink volume and percentage
  const updateDrink = (volume, percentage) => {
    
    newVolume = Number(drinkVolume) + volume;
    if (Number(drinkVolume) == 0) {
      
      setDrinkVolume(volume);  
      setDrinkPercentage(Number(percentage));
    }
    if (Number(drinkVolume) != 0) {
      tempPercentage =
        (((Number(drinkPercentage) / 100) * Number(drinkVolume) +
          (Number(percentage) / 100) * volume) /
          newVolume) *
        100;
      setDrinkVolume(volume + Number(drinkVolume));
      tempPercentage = tempPercentage.toFixed(2);
      setDrinkPercentage(tempPercentage);
    }
  };

  const resetData = () => {
    setDrinkVolume("");
    setDrinkPercentage("");
    setIngredients([]);
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>
        {item.drink} {item.percentage + "%"} - {item.volume + " cl"}{" "}
      </Text>
    </View>
  );

  const addIngredient = () => {
    //console.log((drinks.find((drink) => drink.key === selectedDrink).value));
    //console.log((volume[selectedVolume - 1].value));
    //console.log((percentage[selectedDrink][selectedPercentage - 1].value));
    if (
      selectedDrink !== "" && selectedVolume !== "" && selectedPercentage !== ""
    ) {
      const newIngredient = {
        drink: drinks.find((drink) => drink.key === selectedDrink).value,
        volume: volume[selectedVolume - 1].value,
        percentage: percentage[selectedDrink][selectedPercentage - 1].value, //Done
      };
      //console.log(newIngredient);
      updateDrink(newIngredient.volume, newIngredient.percentage);
      setIngredients([...ingredients, newIngredient]);
    } else {
      Alert.alert("Error", "Please select both drink and volume.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Getingsticket</Text>
      <View style={styles.selectList}>
        <Text style={styles.drinkText}>{"Drink Type"}</Text>
        <SelectList
          search={false}
          setSelected={setSelectedDrink}
          data={drinks}
          defaultOption={{key: "VK", value: "Vodka"}}
        />
        <Text style={styles.drinkText}>{"Drink Percentage"}</Text>
        <SelectList
          search={false}
          setSelected={setSelectedPercentage}
          data={percentage[selectedDrink]}
          defaultOption={percentage[selectedDrink][1]}
        />
        <Text style={styles.drinkText}>{"Drink Volume in cl"}</Text>
        <SelectList
          search={false}
          setSelected={setSelectedVolume}
          data={volume}
        />
        <View style={styles.centerbutton}>
          <Button
            title="Add to sticket?"
            disabled={
              selectedDrink === "" ||selectedVolume === "" || selectedPercentage === ""
            }
            onPress={addIngredient}
          />
        </View>
        <Text style={styles.drinkText}>
          {"Drink Volume:"}
          {drinkVolume}
          {" cl"}
        </Text>
        <Text style={styles.drinkText}>
          {"Drink Percentage:"}
          {drinkPercentage}
          {" %"}
        </Text>
        <Text style={styles.listTitle}>Ingredients</Text>
      </View>
      <View>
        {/* Display added ingredients */}
        <FlatList
          style={styles.flatList}
          data={ingredients}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        />
      </View>
      <View style={styles.centerbutton}>
        <Button title="Reset" onPress={(ingredients) => resetData()} />
      </View>
      <Separator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Your styles...
  container: {
    flex: 1,
    backgroundColor: "#FFEF00",
  },
  drinkText: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    textAlign: "center",
    marginVertical: 10,
    marginTop: 50,
    fontSize: 50,
  },
  listTitle: {
    textAlign: "center",
    fontSize: 35,
    marginVertical: 10,
  },
  centerbutton: {
    justifyContent: "center",
    width: "60%",
    marginHorizontal: 75,
    marginVertical: 10,
  },
  selectList: {
    marginHorizontal: 50,
    justifyContent: "space-between",
    placeholder: "Select an option...",
  },
  flatList: {
    borderWidth: 0.3,
    height: 200,
    marginHorizontal: 50,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#FFEF00",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  itemSeparator: {
    width: "100%",
    position: "relative",
    flexGrow: 1,
  },
});
