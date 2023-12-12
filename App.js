import React from 'react';
import { StyleSheet, FlatList, Text, View, Button, SafeAreaView, Alert } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const [selectedDrink, setSelectedDrink] = React.useState("");
  const [selectedVolume, setSelectedVolume] = React.useState("");
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
    {key:'1', value:'1 cl',},
    {key:'2', value:'2 cl'},
    {key:'3', value:'3 cl'},
    {key:'4', value:'4 cl',},
    {key:'5', value:'5 cl'},
    {key:'6', value:'6 cl'},
    {key:'7', value:'7 cl'},
    {key:'8', value:'8 cl'},
    {key:'9', value:'9 cl'},
    {key:'10', value:'10 cl'},
  ]

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.drink} - {item.volume}</Text>
    </View>
  );

  const addIngredient = () => {
    if (selectedDrink !== "" && selectedVolume !== "") {
      const newIngredient = {
        drink: drinks[selectedDrink - 1].value,
        volume: volume[selectedVolume - 1].value,
      };
      setIngredients([...ingredients, newIngredient]);
      setSelectedDrink("");
      setSelectedVolume("");
    } else {
      Alert.alert('Error', 'Please select both drink and volume.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Getingsticket</Text>
      <Separator />
      <View style={styles.selectList}>
        <SelectList setSelected={setSelectedDrink} data={drinks} />
        <Separator />
        <SelectList setSelected={setSelectedVolume} data={volume} />
        <View style={styles.centerbutton}>
          {/* Add button to add ingredient */}
          <Button
            title="Lägg till i sticket?"
            color="#f194ff"
            disabled={selectedDrink === "" || selectedVolume === ""}
            onPress={addIngredient}
          />
        </View>
        <Text style={styles.listTitle}>Ingredients:</Text>
      </View>
      <View>
        <Separator />
        {/* Display added ingredients */}
        <FlatList
          style={styles.flatList}
          data={ingredients}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={Separator}
          
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Your styles...
  container: {
    backgroundColor: '#FFEF00',
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 50,
  },
  listTitle: {
    //textAlign: 'center',
    fontSize: 50,
  },
  centerbutton: {
    //justifyContent: 'center',
    marginHorizontal: 75,
    marginVertical: 20,
  },
  selectList: {
    
    marginHorizontal: 50,
    justifyContent: 'space-between',
    placeholder: "Select an option..."
  },
  flatList: {
    //flex: 1,
    height: 250,
    marginHorizontal: 50,
    paddingBottom: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#FFEF00',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
