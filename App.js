import React from 'react';
import { StyleSheet, FlatList, Text, View, Button, SafeAreaView, Alert } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const [selectedDrink, setSelectedDrink] = React.useState("VK");
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
  const drinks2 = [
      {key:'VK', value:'Vodka',},
      {key:'TQ', value:'Tequila'},
      {key:'RM', value:'Rum'},
      {key:'WS', value:'Whiskey',},
      {key:'BB', value:'Bourbon'},
      {key:'GN', value:'Gin'},
      {key:'CG', value:'Cognac'},
      {key:'CP', value:'Champagne'},
      {key:'WW', value:'White Wine'},
      {key:'RW', value:'Red wine'},
      {key:'CR', value:'Cider'},
      {key:'BR', value:'Beer'},
      {key:'AF', value:'Alcohol Free'},
    ]
  const percentage2 = {
    'VK':[
      {key:1, value:10},
      {key:2, value:15},
      {key:3, value:20},
      {key:4, value:25,},
      {key:5, value:30},
      {key:6, value:35},
      {key:7, value:40},
      {key:8, value:45},
      {key:9, value:50},
      {key:10, value:55},
      {key:11, value:60},
    ],
    'TQ':[
      {key:1, value:10},
      {key:2, value:15},
      {key:3, value:20},
      {key:4, value:25,},
      {key:5, value:30},
      {key:6, value:35},
      {key:7, value:40},
      {key:8, value:45},
      {key:9, value:50},
      {key:10, value:55},
      {key:11, value:60},
    ],
    'RM':[
      {key:1, value:10},
      {key:2, value:15},
      {key:3, value:20},
      {key:4, value:25,},
      {key:5, value:30},
      {key:6, value:35},
      {key:7, value:40},
      {key:8, value:45},
      {key:9, value:50},
      {key:10, value:55},
      {key:11, value:60},
    ],
    'WS':[
      {key:1, value:10},
      {key:2, value:15},
      {key:3, value:20},
      {key:4, value:25,},
      {key:5, value:30},
      {key:6, value:35},
      {key:7, value:40},
      {key:8, value:45},
      {key:9, value:50},
      {key:10, value:55},
      {key:11, value:60},
    ],
    'BB':[
      {key:1, value:10},
      {key:2, value:15},
      {key:3, value:20},
      {key:4, value:25,},
      {key:5, value:30},
      {key:6, value:35},
      {key:7, value:40},
      {key:8, value:45},
      {key:9, value:50},
      {key:10, value:55},
      {key:11, value:60},
    ],
    'GN':[
      {key:1, value:10},
      {key:2, value:15},
      {key:3, value:20},
      {key:4, value:25,},
      {key:5, value:30},
      {key:6, value:35},
      {key:7, value:40},
      {key:8, value:45},
      {key:9, value:50},
      {key:10, value:55},
      {key:11, value:60},
    ],
    'CG':[
      {key:1, value:10},
      {key:2, value:15},
      {key:3, value:20},
      {key:4, value:25,},
      {key:5, value:30},
      {key:6, value:35},
      {key:7, value:40},
      {key:8, value:45},
      {key:9, value:50},
      {key:10, value:55},
      {key:11, value:60},
    ],
    'CP':[
      {key:1, value:3.5},
      {key:2, value:4},
      {key:3, value:4.5},
      {key:4, value:5,},
      {key:5, value:5.5},
      {key:6, value:6},
      {key:7, value:6.5},
      {key:8, value:7},
      {key:9, value:7.5},
      {key:10, value:8},
      {key:11, value:8.5},
      {key:12, value:9},
      {key:13, value:9.5},
      {key:14, value:10},
      {key:15, value:10.5},
      {key:16, value:11},
      {key:17, value:11.5},
      {key:18, value:12},
      {key:19, value:12.5},
      {key:20, value:13},
      {key:21, value:13.5},
      {key:22, value:14},
      {key:23, value:14.5},
      {key:24, value:15},
      {key:25, value:15.5},
      {key:26, value:16},
      {key:27, value:16.5},
      {key:28, value:17},
      {key:29, value:17.5},
      {key:30, value:18},
      {key:31, value:18.5},
      {key:32, value:19},
      {key:33, value:19.5},
      {key:34, value:20},
    ],
    'WW':[
      {key:1, value:3.5},
      {key:2, value:4},
      {key:3, value:4.5},
      {key:4, value:5,},
      {key:5, value:5.5},
      {key:6, value:6},
      {key:7, value:6.5},
      {key:8, value:7},
      {key:9, value:7.5},
      {key:10, value:8},
      {key:11, value:8.5},
      {key:12, value:9},
      {key:13, value:9.5},
      {key:14, value:10},
      {key:15, value:10.5},
      {key:16, value:11},
      {key:17, value:11.5},
      {key:18, value:12},
      {key:19, value:12.5},
      {key:20, value:13},
      {key:21, value:13.5},
      {key:22, value:14},
      {key:23, value:14.5},
      {key:24, value:15},
      {key:25, value:15.5},
      {key:26, value:16},
      {key:27, value:16.5},
      {key:28, value:17},
      {key:29, value:17.5},
      {key:30, value:18},
      {key:31, value:18.5},
      {key:32, value:19},
      {key:33, value:19.5},
      {key:34, value:20},
    ],
    'RW':[
      {key:1, value:3.5},
      {key:2, value:4},
      {key:3, value:4.5},
      {key:4, value:5,},
      {key:5, value:5.5},
      {key:6, value:6},
      {key:7, value:6.5},
      {key:8, value:7},
      {key:9, value:7.5},
      {key:10, value:8},
      {key:11, value:8.5},
      {key:12, value:9},
      {key:13, value:9.5},
      {key:14, value:10},
      {key:15, value:10.5},
      {key:16, value:11},
      {key:17, value:11.5},
      {key:18, value:12},
      {key:19, value:12.5},
      {key:20, value:13},
      {key:21, value:13.5},
      {key:22, value:14},
      {key:23, value:14.5},
      {key:24, value:15},
      {key:25, value:15.5},
      {key:26, value:16},
      {key:27, value:16.5},
      {key:28, value:17},
      {key:29, value:17.5},
      {key:30, value:18},
      {key:31, value:18.5},
      {key:32, value:19},
      {key:33, value:19.5},
      {key:34, value:20},
    ],
    'CR':[
      {key:1, value:3.5},
      {key:2, value:4},
      {key:3, value:4.5},
      {key:4, value:5,},
      {key:5, value:5.5},
      {key:6, value:6},
      {key:7, value:6.5},
      {key:8, value:7},
      {key:9, value:7.5},
      {key:10, value:8},
      {key:11, value:8.5},
      {key:12, value:9},
      {key:13, value:9.5},
      {key:14, value:10},
      {key:15, value:10.5},
      {key:16, value:11},
      {key:17, value:11.5},
      {key:18, value:12},
      {key:19, value:12.5},
      {key:20, value:13},
      {key:21, value:13.5},
      {key:22, value:14},
      {key:23, value:14.5},
      {key:24, value:15},
      {key:25, value:15.5},
      {key:26, value:16},
      {key:27, value:16.5},
      {key:28, value:17},
      {key:29, value:17.5},
    ],
    'BR':[
      {key:1, value:3.5},
      {key:2, value:4},
      {key:3, value:4.5},
      {key:4, value:5,},
      {key:5, value:5.5},
      {key:6, value:6},
      {key:7, value:6.5},
      {key:8, value:7},
      {key:9, value:7.5},
      {key:10, value:8},
      {key:11, value:8.5},
      {key:12, value:9},
      {key:13, value:9.5},
      {key:14, value:10},
      {key:15, value:10.5},
      {key:16, value:11},
      {key:17, value:11.5},
      {key:18, value:12},
      {key:19, value:12.5},
      {key:20, value:13},
      {key:21, value:13.5},
      {key:22, value:14},
      {key:23, value:14.5},
      {key:24, value:15},
      {key:25, value:15.5},
      {key:26, value:16},
      {key:27, value:16.5},
      {key:28, value:17},
      {key:29, value:17.5},

    ],
    'AF':[
      {key:1, value:0},
    ],
  }

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
        drink: drinks2[selectedDrink-1].value,
        volume: volume[selectedVolume-1].value,
        percentage: percentage2[selectedPercentage-1].value,
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
        <SelectList 
        setSelected={setSelectedDrink} 
        data={drinks2} 
        defaultOption={{key:"VK", value:"Vodka"}}
        />
        <Text style={styles.drinkText}>{"Drink Percentage"}</Text>
        <SelectList 
        setSelected={setSelectedPercentage} 
        data={percentage2[selectedDrink]}
        defaultOption={percentage2[selectedDrink][0]}
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
