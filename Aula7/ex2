import { StyleSheet, Text, View } from 'react-native';
export default function App() {
const produtos = [
{ nome: 'Teclado', preco: 120.00 },
{ nome: 'Mouse', preco: 60.00 },
{ nome: 'Monitor', preco: 900.00 }
];
return (
<View style={styles.container}>
<Text style={styles.titulo}>Catálogo de Produtos</Text>
{produtos.map((produto) => (
<Text key={produto.nome} style={styles.item}>
{produto.nome} - R${produto.preco.toFixed(2)}
</Text>
))}
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
paddingTop: 50,
paddingHorizontal: 20,
},
titulo: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
},
item: {
fontSize: 18,
marginVertical: 5,
},
});
