'use strict';

var React = require('react-native');
var {
    Text,
    View,
    TouchableHighlight,
    ListView,
    AlertIOS,
    Image,
    NavigatorIOS,
} = React;

var styles = React.StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 80
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    testcenter:{
        flexDirection:'column',height:40,top:20,
        textAlign:'center',
        backgroundColor:'#ff8800',
        fontSize:16,
    },

    listStyles:{
        flexDirection:'column',height:30,top:50,
        backgroundColor:'yellow',
    },
    cellStyle:{
        height:44,
    },
    cellViewStyle:{
        flexDirection:'row',
    },
    touch:{
        backgroundColor: '#00ffff',
    },
    
});

var simpleTest = React.StyleSheet.create({

})

var  SimleView = React.createClass({

    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2});
        var json = [
            {'name':'row 1','title':'lala','url':''},
            {'name':'row 2','title':'bb','url':''},
            {'name':'this is new row','title':'cc','url':''}];
        // var data = [
        //     {author: "Pete Hunt", text: "This is one comment"},
        //     {author: "Jordan Walke", text: "This is *another* comment"}
        // ];
        return {

            dataSource : ds.cloneWithRows(json),
        };
    },
    render() {
        return(
                <View style={styles.container}>
                <Text style={styles.testcenter} >This is a simple application.{this.state.title}</Text>
                <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            renderFooter={()=><Text>this is a table footer</Text>}
                />
                </View>
        )
    },
    _renderRow:function(rowData){
        return (
                <TouchableHighlight style={styles.touch} onPress={() => this._pressRow(rowData)} underlayColor='#ff8800'>
                <View style={styles.cellViewStyle}>
                <Text style={styles.cellStyle}>
                rowData,title:{rowData.name},{rowData.title}</Text>
                
                <Image source={require('./Images/icon-mine.png')}/>
                
            </View>
                </TouchableHighlight>
               );
    },

    _pressRow:function(rowData){
        return AlertIOS.alert(
            rowData.title,
            'lala',
        )
    }
});

var TextSimple = React.createClass({
    render:function(){
        console.log('in simple with text view  ...');
        return(
                <View style={styles.container} >
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                </View>
        )
    }
})

var MyView = React.createClass({
  render: function(){
    console.log('My View render triggered');
    return (
        <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello there, welcome to My View
        </Text>
      </View>
    );
  }
});


var  SimpleWithNavi = React.createClass({
    render:function(){
        console.log('in simple with navi ...');
        return(
                <NavigatorIOS
            style={styles.container}
            initialRoute={{
                component: MyView,
                title: 'My NavigatorIOS test',
                passProps: { myProp: 'foo' },
            }}
                />
        )
    }
})
    



React.AppRegistry.registerComponent('SimpleApp', () => SimpleWithNavi);



var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    Text,
    View
} = React;

var naviApp = React.createClass({
    render: function(){
        return (
                <NavigatorIOS
            initialRoute={{
                component:TextSimple,
                title:'aaa'
            }}
                />
        );
    }

    
});
 var navigation = React.createClass ({
  render: function() {
    return (
            <NavigatorIOS
        style = {styles.container}
        initialRoute={{
            component: TextSimple,
            title: 'My NavigatorIOS test',
            passProps: { myProp: 'foo' }
        }}/>
    );
  }
});

var TextSimple = React.createClass({
    render:function(){
        console.log('in simple with text view  ...');
        return(
                <View >
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                <Text>this is lalal</Text>
                </View>
        );
    }
});

var styles = React.StyleSheet.create({
    container: {
        flex: 1
    }
});


AppRegistry.registerComponent('SimpleApp', () => navigation);
