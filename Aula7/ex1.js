import { StyleSheet, Text, View } from 'react-native';
export default function App() {
return (
<View style={styles.container}>
<Text style={styles.nome}>Luiz Miguel</Text>
<Text>Idade: 17 anos</Text>
<Text>Cidade: Cascavel</Text>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
alignItems: 'center',
justifyContent: 'center',
},
nome: {
color: 'blue',
fontSize: 24,
fontWeight: 'bold',
},
});