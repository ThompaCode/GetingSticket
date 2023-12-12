import React from 'react';
import { StyleSheet, FlatList, Text, View, Button, SafeAreaView, Alert } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const [selectedDrink, setSelectedDrink] = React.useState("");
  const [selectedVolume, setSelectedVolume] = React.useState("");
  const [selectedPercentage, setSelectedPercentage] = React.useState("");
  const [drinkVolume, setDrinkVolume] = React.useState("");
  const [drinkPercentage, setDrinkPercentage] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);
  const drinks = [
    {key:'1', value:'Vodka',},
    {key:'2', value:'Tequila'},
    {key:'3', value:'Rum'},
    {key:'4', value:'Whiskey',},
    {key:'5', value:'Bourbon'},
    {key:'6', value:'Gin'},
    {key:'7', value:'Cognac'},
    {key:'8', value:'Champagne'},
    {key:'9', value:'White Wine'},
    {key:'10', value:'Red wine'},
    {key:'11', value:'Cider'},
    {key:'12', value:'Beer'},
    {key:'13', value:'Alcohol Free'},
  ]
  const volume = [
    {key:1, value:1},
    {key:2, value:2},
    {key:3, value:3},
    {key:4, value:4},
    {key:5, value:5},
    {key:6, value:6},
    {key:7, value:7},
    {key:8, value:8},
    {key:9, value:9},
    {key:10, value:10},
  ]
  const percentage = [
    {key:1, value:0,},
    {key:2, value:5},
    {key:3, value:10},
    {key:4, value:15,},
    {key:5, value:20},
    {key:6, value:25},
    {key:7, value:30},
    {key:8, value:35},
    {key:9, value:40},
    {key:10, value:45},
    {key:11, value:50},
    {key:12, value:55},
    {key:13, value:60},
  ]
  // Function to update drink volume and percentage
  const updateDrink = (volume,percentage) => {
    tempVolume = Number(drinkVolume) + volume;
    tempPercentage = ((percentage)*volume+Number(drinkPercentage))/(drinkVolume+volume);
    tempPercentage= Number(Math.round(parseFloat(tempPercentage + 'e' + 1)) + 'e-' + 1)
    
    setDrinkVolume(tempVolume);
    setDrinkPercentage(tempPercentage);
  };

  const resetData = () => {
    setDrinkVolume("");
    setDrinkPercentage("");
    setIngredients([])
    setSelectedDrink("");
    setSelectedVolume("");
    setSelectedPercentage("");
  
  }
  
  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.drink} {item.percentage+"%"} - {item.volume+" cl"}  </Text>
    </View>
  );
  
  const addIngredient = () => {
    if (selectedDrink !== "" && selectedVolume !== "" && selectedPercentage !== "") {
      const newIngredient = {
        drink: drinks[selectedDrink-1].value,
        volume: volume[selectedVolume-1].value,
        percentage: percentage[selectedPercentage-1].value,
      };
      updateDrink((newIngredient.volume),(newIngredient.percentage));
      setIngredients([...ingredients, newIngredient]);
      setSelectedDrink("");
      setSelectedVolume("");
      setSelectedPercentage("");
    } else {
      Alert.alert('Error', 'Please select both drink and volume.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Getingsticket</Text>
      <View style={styles.selectList}>
        <Text style={styles.drinkText}>{"Drink Type"}</Text>
        <SelectList setSelected={setSelectedDrink} data={drinks} 
        />
        <Text style={styles.drinkText}>{"Drink Percentage"}</Text>
        <SelectList setSelected={setSelectedPercentage} data={percentage}
         />
        <Text style={styles.drinkText}>{"Drink Volume in cl"}</Text>
        <SelectList setSelected={setSelectedVolume} data={volume}
         />
        <View style={styles.centerbutton}>
          <Button
            title="Add to sticket?"
            disabled={selectedDrink === "" || selectedVolume === "" || selectedPercentage === ""}
            onPress={addIngredient}
          />
        </View>
        <Text style={styles.drinkText}>{"Drink Volume:"}{drinkVolume}{" cl"}</Text>
        <Text style={styles.drinkText}>{"Drink Percentage:"}{drinkPercentage}{" %"}</Text>
        <Text style={styles.listTitle}>Ingredients</Text>
      </View>
      <View>
        {/* Display added ingredients */}
        <FlatList
          style={styles.flatList}
          data={ingredients}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={()=> <View style={styles.itemSeparator} />}
        />
      </View>
      <View style={styles.centerbutton}>
          <Button
            title="Reset"
            onPress={ingredients => resetData()}
          />
        </View>
      <Separator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Your styles...
  container: {
    flex: 1,
    backgroundColor: '#FFEF00',
  },
  drinkText: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 50,
    fontSize: 50,
  },
  listTitle: {
    textAlign: 'center',
    fontSize: 35,
    marginVertical: 10
  },
  centerbutton: {
    justifyContent: 'center',
    width: '60%',
    marginHorizontal: 75,
    marginVertical: 10,
  },
  selectList: {
    marginHorizontal: 50,
    justifyContent: 'space-between',
    placeholder: "Select an option...",
  },
  flatList: {
    borderWidth: 0.3,
    height: 200,
    marginHorizontal: 50,
    
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#FFEF00',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  itemSeparator: {
    width: '100%',
    position: "relative",
    flexGrow: 1,
  },
});
