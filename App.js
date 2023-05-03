import * as React from 'react';
import { Button, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

function HomeScreen() {

  const [id, setId] = React.useState('')
  const [nome, setNome] = React.useState('')  

  const navigation = useNavigation()

  const MudarJanela = () => {
      navigation.navigate('Details', {
        Id: id,
        Nome: nome
      })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TextInput
        style={styles.caixa}
        placeholder='Id'
        onChangeText={setId}
      />
      <TextInput
        style={styles.caixa}
        placeholder='Nome'
        onChangeText={setNome}
      />
      <TouchableOpacity
        onPress={MudarJanela}
      >
        <Text style={styles.botao}>
          Mudar de Tela
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({ route, navigation }) {

  const { Id, Nome } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>ID: {Id}</Text>
      <Text>Nome: {Nome}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  caixa: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    margin: 5
  },
  botao: {
    padding: 5,
    backgroundColor: 'grey',
  }
})

export default App;