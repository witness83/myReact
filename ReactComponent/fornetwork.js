'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Navigator,
    ListView,
    Image
} = React;

var ForNetWork = React.createClass({
    getInitialState: function() {
        var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 != r2});
        return {
            movies:null,
            ds:dataSource,
            loading:false
        };
    },
    
    componentDidMount:function(){
        console.log('componentDidMount ...');
        this.fetchData();
    },

    fetchData:function(){
        fetch('https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json') // http://211.151.0.150:80/buses/bus_lines_page or http://www.baidu.com
            .then((response)=>{console.log(response); return response;})
            .then((response)=>{
                return response.json();
            })
            .then((responseText) => { 
                return responseText;
            })
            .then((responseData) => {
                this.setState({
                    movies: responseData.movies,
                    ds:this.state.ds.cloneWithRows(responseData.movies)
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
            console.log('unload movies');
            return (
                    <View style= {styles.container}>
                    <Text style= {styles.welcome}>Loading...</Text>
                    </View>
            );
        }else{
            console.log('loaded movies');
            return this.renderContentView();
        }
    },

    renderContentView:function(){
        return(
            
                <ListView renderRow={this.renderRow}  dataSource={this.state.ds} style={{paddingTop: 64}}/>

        );
    },

    renderRow:function(rowData){
        return (
                <View style= {styles.listContainer}>
                <Image source = {{'uri':rowData.posters.thumbnail}} style= {{width: 53,height: 81}}/>
                <View style= {styles.rightContainer}>
                <Text style = {styles.title}>
                {rowData.title}
                </Text>

                </View>
                </View>
        );
    },


    _textPressed:function(){
        var value = this.state.loading;
        this.setState({
            movies: [],
            loading: !value
        });

        console.log('this.state.loading is :'+this.state.loading);
    }
    
});


var styles = React.StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    rightContainer:{
        flex:1
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center'
    },
    listContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});


module.exports = ForNetWork;


