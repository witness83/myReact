'use strict'

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Navigator
} = React;

var ForNetWork = React.createClass({
    
    componentDidMount:function(){
        console.log('componentDidMount ...');
        this.fetchData();
    },

    fetchData:function(){
        fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json') // http://211.151.0.150:80/buses/bus_lines_page or http://www.baidu.com
        //       .then((response)=>{console.log(response) return response;})
            .then((response)=>response.json())
            .then((responseText) => { 
                console.log('responseText is :'+responseText);
                return responseText;
            })
            .then((responseData) => {
                this.setState({
                    movies: responseData.movies,
                });
            })
            // .then((responseData)=>{
            //     console.log('responseData:',responseData);
            //     this.setState({
            //         movies:responseData.movies,
            //     })
            // })
            .done();
    },

    render: function(){
        console.log('My View render triggered');
        //        console.log('content is '+this.state.movies);
        if(!this.state.movies){
            return (
                    <View style= {styles.container}>
                    <Text style= {styles.welcome}>Loading...</Text>
                    </View>
            );
        }else{
            return(
                    <View style={styles.container} >
                    <Text style={styles.welcome} > Hello there, welcome to My View</Text>
                    <Text style={styles.welcome} > Hello there, welcome to My View</Text>
                    <Text style={styles.welcome} onPress={()=>{console.log('pressed');}}> Hello there, welcome to My View</Text>
                    <Text style={styles.welcome} onPress={()=>{console.log('pressed');}}> Hello there, welcome to My View</Text>
                    <Text style={styles.welcome} onPress={()=>{console.log('pressed');}}> Hello there, welcome to My View</Text>
                    <Text style={styles.welcome} onPress={()=>{console.log('pressed');}}> Hello there, welcome to My View</Text>
                    <Text style={styles.welcome} onPress={()=>{console.log('pressed');}}> Hello there, welcome to My View</Text>
                    <Text style={styles.welcome} onPress={()=>{console.log('pressed');}}> Hello there, welcome to My View</Text>
                    </View>
            );
        }
    }
});


var styles = React.StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});


module.exports = ForNetWork;


