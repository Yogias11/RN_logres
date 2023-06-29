import { View, Text , StyleSheet} from 'react-native';

const Input = () => {
    return (
        <View style={StyleSheet.container}>
            <Text>Input component</Text>
            <View style={style.input}>
                <Text>Input component</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: "lightCyan",
        height: 55,
        flexDirection: "row",
        paddingHorizontal: 15,
        borderWidth: 0.75,
    }
})

export default Input;