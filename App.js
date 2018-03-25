import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    FlatList,
    Image,
    Alert,
    StatusBar,
    Picker
} from 'react-native';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            currency: '',
            amout: null,
            rates: []
        };
    }

    componentDidMount() {
        const url = 'http://api.fixer.io/latest';

        fetch(url).then((response) => response.json()).then((responseJson) => {
            this.setState({ rates: Object.keys(responseJson.rates) });
        })
        .catch((error) => {
            Alert.alert(error);
        });
    }

    getRates = () => {

        const url = 'http://api.fixer.io/latest?base=' + this.state.currency + '&symbols=EUR';

        fetch(url).then((response) => response.json()).then((responseJson) => {
            this.setState({input: responseJson.rates.EUR})
                .catch((error) => {
                    Alert.alert(error);
                });
        });
    }

    render() {
        const pickerItems = this.state.rates.map((item, index) => <Picker.Item key={index} label={item} value={item}/>);
        result = "0.00" 
        if (this.state.amount != null ){
            result = (parseFloat((this.state.input) * (this.state.amount))).toFixed(2);
        }
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Image style={{ width: 182, height: 166 }}
                    source={{ uri: 'https://thumbs.dreamstime.com/b/bag-money-euro-2699395.jpg'}}/>
                <Text style={{fontSize: 18}}>{result} &euro; </Text>
                <View style={styles.input}>
                <TextInput style={{ fontSize: 17, width: 60}}
                    onChangeText={(amount) => this.setState({amount})}/>

                <Picker style={{ width: 140, height: 40}}
                    selectedValue={this.state.currency}
                    onValueChange={(value) => this.setState({currency: value})}>
                    {pickerItems}
                </Picker>
                </View>
                <Button style={{ fontSize: 18, marginTop: 300}}
                    title="Convert"
                    onPress={this.getRates}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        flexDirection: 'row'
    }
});