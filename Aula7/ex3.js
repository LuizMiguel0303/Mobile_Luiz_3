import { StyleSheet, Text, View } from 'react-native';
function CartaoProduto({ nome, preco }) {
return (
<View style={styles.cartao}>
<Text style={styles.nome}>{nome}</Text>
<Text style={styles.preco}>
R$ {preco.toFixed(2)}
</Text>
</View>
);
}
export default function App() {
const produtos = [
{ nome: 'Teclado', preco: 120.00 },
{ nome: 'Mouse', preco: 60.00 },
{ nome: 'Monitor', preco: 900.00 }
];
return (
<View style={styles.container}>
<Text style={styles.titulo}>Catálogo de Produtos</Text>
{produtos.map((p) => (
<CartaoProduto
key={p.nome}
nome={p.nome}
preco={p.preco}
/>
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
cartao: {
backgroundColor: '#fff',
padding: 15,
marginVertical: 5,
borderRadius: 8,
},
nome: {
fontSize: 18,
fontWeight: 'bold',
},
preco: {
fontSize: 16,
marginTop: 5,
},
});
