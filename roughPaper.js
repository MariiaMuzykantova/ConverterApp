import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, StatusBar, Picker } from 'react-native';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: '', currency: '', amount: null, rates: [] };
    }

    componentDidMount() {
        const url = 'http://api.fixer.io/latest';

        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ rates: Object.keys(responseJson.rates) });
            })
            .catch((error) => {
                Alert.alert(error);
            });
    }

    getRates = () => {

        const url = 'http://api.fixer.io/latest?base=' + this.state.currency + '&symbols=' + 'EUR';

        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    //amount: amount * responseData.currency
                    //amount: data * responseData.currency
                    rates: responseData.rates
                })
            })

            .catch((error) => {
                Alert.alert(error);
            });

    }


    // listSeparator = () => {

    //     return (

    //         <View
    //             style={{
    //                 height: 1,
    //                 width: "80%",
    //                 backgroundColor: "#CED0CE",
    //                 marginLeft: "10%"
    //             }}
    //         />
    //     );
    // };

    render() {
        const pickerItems = this.state.rates.map((item, index) => <Picker.Item key={index} label={item} value={item} />);
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 182, height: 166 }}
                    source={{ uri: 'https://thumbs.dreamstime.com/b/bag-money-euro-2699395.jpg' }}
                />
                {/* <StatusBar hidden={true} /> */}

                {/* <FlatList 
style={{marginLeft : "5%", height:100}}
keyExtractor={item => item.index} 
renderItem={({item}) => 

<Text style={{fontSize: 18, marginTop: 200}}> {(parseFloat(item.value) * parseFloat(this.state.amount)).toFixed(2)} {item.currency}</Text> 

} data={this.state.data} 
ItemSeparatorComponent={this.listSeparator} />  */}

                <Text>
                    {/* {this.state.amount} * 10 */} *10
                    
                </Text>
                <FlatList
                data = {this.state.rates}
                />
                <TextInput style={{ fontSize: 28, width: 160, height: 70 }} placeholder='Your amount'
                    onChangeText={(amount) => this.setState({ amount })} />

                <Picker
                    style={{ width: 140, height: 200 }}
                    selectedValue={this.state.currency}
                    onValueChange={(value) => this.setState({ currency: value })}>
                    {pickerItems}
                </Picker>

                <Button style={{ fontSize: 18, marginTop: 300 }} title="Convert" onPress={this.getRates} />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },

});

// import React from 'react';
// import { StyleSheet, Text, TextInput, View, Button, Image, Alert, StatusBar, Picker, FlatList } from 'react-native';

// export default class App extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { data: '', currency: '', amount: null, rates: [] };
//     }

//     componentDidMount() {
//         const url = 'http://api.fixer.io/latest';

//         fetch(url)
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 this.setState({ rates: Object.keys(responseJson.rates) });
//             })
//             .catch((error) => {
//                 Alert.alert(error);
//             });
//     }

//     getRates = () => {

//         const url = 'http://api.fixer.io/latest?base=' + this.state.currency + '&symbols=' + 'EUR';

//         fetch(url)
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 this.setState({
//                     //amount: amount * responseData.currency
//                     //amount: data * responseData.currency
//                     //rates: responseData.rates
//                     rates: responseJson
//                 })
//             })

//             .catch((error) => {
//                 Alert.alert(error);
//             });

//     }


//     // listSeparator = () => {

//     //     return (

//     //         <View
//     //             style={{
//     //                 height: 1,
//     //                 width: "80%",
//     //                 backgroundColor: "#CED0CE",
//     //                 marginLeft: "10%"
//     //             }}
//     //         />
//     //     );
//     // };

//     render() {
//         //const pickerItems = this.state.rates.map((item, index) => <Picker.Item key={index} label={item} value={item} />);
//         return (
//             <View style={styles.container}>
//                 <Image
//                     style={{ width: 182, height: 166 }}
//                     source={{ uri: 'https://thumbs.dreamstime.com/b/bag-money-euro-2699395.jpg' }}
//                 />
//                 {/* <StatusBar hidden={true} /> */}

//                 <FlatList 
// style={{marginLeft : "5%", height:100}}
// keyExtractor={item => item.index} 
// renderItem={({item}) => 

// <Text style={{fontSize: 18, marginTop: 200}}> {(parseFloat(item.value) * parseFloat(this.state.amount)).toFixed(2)} {item.currency}</Text> 

// } data={this.state.data} 
// ItemSeparatorComponent={this.listSeparator} /> 

//                 <Text>
//                     {this.state.amount} * 10 *10
                    
//                 </Text>
//                 {/* <FlatList
//                 data = {this.state.rates}
//                 /> */}
//                 <TextInput style={{ fontSize: 28, width: 160, height: 70 }} placeholder='Your amount'
//                     onChangeText={(amount) => this.setState({ amount })} />

//                 <Picker
//                     style={{ width: 140, height: 200 }}
//                     selectedValue={this.state.currency}
//                     onValueChange={(value) => this.setState({ currency: value })}>
//                     {/* {pickerItems} */}
//                     {this.state.rates.map((item, index) => {
//                         return <Picker.Item  lable={item} value={item.rates} key={index}/>
//                     })}
//                 </Picker>

//                 <Button style={{ fontSize: 18, marginTop: 300 }} title="Convert" onPress={this.getRates} />
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',

//     },

// });