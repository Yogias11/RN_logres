import { View, Text, SafeAreaView, ScrollView, StyleSheet}  from 'react-native';

import Input from './components/Input';

const RegisterScreen = () => {
    return (
        <SafeAreaView style={style.container}>
            <ScrollView contentContainerStyle={style.scrollContainer}>
                <Input />
            </ScrollView>
        </SafeAreaView>
    );
  }

const style = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    scrollContainer: {
        paddingTop: 30,
    }
})
export default RegisterScreen;