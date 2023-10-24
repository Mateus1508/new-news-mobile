import { Text, View } from "react-native";

const Home = () => {
    return ( 
        <View style={{
            backgroundColor: '#000000',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        }}>
            <Text style={{
                color: "#f9f"
            }}>Hello World</Text>
        </View>
     );
}
 
export default Home;