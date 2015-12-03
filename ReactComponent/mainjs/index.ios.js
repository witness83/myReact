'use strict';

var React = require('react-native');

//var MineView = require('./mine.ios');
//var TextSimple = require('./mine.ios');
var MyView = require('./mine.ios');
// var MineView = require('./subdir/subdir');
// var TextSimple = require('./subdir/subdir');
var ForNetWork = require('./fornetwork');

var AwesomeProject = require('./example');


var {
    Text,
    View,
    TouchableHighlight,
    ListView,
    AlertIOS,
    Image,
    NavigatorIOS,
    Navigator
} = React;

var styles = React.StyleSheet.create({
    container: {
        flex: 1
//        backgroundColor: 'gray'
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
        margin: 10
    },

    testcenter:{
        flexDirection:'column',height:40,top:20,
        textAlign:'center',
        backgroundColor:'#ff8800',
        fontSize:16
    },

    listStyles:{
        flexDirection:'column',height:30,top:50,
        backgroundColor:'yellow'
    },
    cellStyle:{
        height:44
    },
    cellViewStyle:{
        flexDirection:'row'
    },
    touch:{
        backgroundColor: '#00ffff'
    }
    
});

var simpleTest = React.StyleSheet.create({

});

var  SimleView = React.createClass({
    
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2});
        var json = [
            {'name':'row 1','title':'lala','uri':'http://imgsrc.baidu.com/forum/w%3D580/sign=7fc5b239b9a1cd1105b672288912c8b0/51b0f603738da977be0bd022b351f8198618e3b7.jpg'},
            {'name':'row 2','title':'bb','uri':'http://img2.3lian.com/2014/f5/158/d/86.jpg'},
            {'name':'this is new row','title':'cc','uri':'http://img2.3lian.com/2014/f5/158/d/87.jpg'}];
        return {
            dataSource : ds.cloneWithRows(json)
        };
    },
    
    render() {
        console.log('render Simple View ... and .setRefView is :'+this.props.refMethod);

        this.props.refMethod(this);
        //        this.props.navigator.setRefView(this);
        
        
        return(
                <View style={styles.container}>
                <ListView dataSource={this.state.dataSource} renderRow={this._renderRow} renderFooter={this._renderFooter}/>
                </View>
        );
    },

    _rightButtonClicked :function(){
        console.log('this.props.navigator.push is '+navigator.push);
        console.log('in simpleView rightClicked');
        
        this.props.navigator.push({
            name: 'MineView ',
            title: ',,,',
            //            component: ForNetWork
            component:AwesomeProject
        });
        
    },
    
    _renderFooter:function(){
        return (
            <Text>this is a table footer</Text>
        );
    },
    
    _renderRow:function(rowData,sectionId,rowId){
        var url = rowData.uri;
        console.log('url is : '+url);
        return (
                <TouchableHighlight style={styles.touch} onPress={() => this._pressRow(rowData)} underlayColor='#ff8800'>
                <View style={styles.cellViewStyle}>
                <Text style={styles.cellStyle}>
                {rowId},title:{rowData.name},{rowData.title}</Text>
                <Image source= {{'uri':url}} style={{width: 40, height: 40}}/>
                <Image source={require('./Images/icon-mine.png')} style={{width: 20, height: 20}}/>
                </View>
                </TouchableHighlight>
               );
    },

    _pressRow:function(rowData){
        var title = rowData.title;
        console.log('row clicked ... '+title);
        console.log('this.props.navigator is :'+this.props.navigator);
        
        this.props.navigator.push({
            name:'MyView',
            component:MyView,
            title: 'MyView title'
        });
        
        // this.props.navigator.push();
        
        // return AlertIOS.alert(
        //     rowData.title,
        //     'lala');
    }
});


var SimpleApp = React.createClass({
    render:function(){
        console.log('in simple with navi ...');
        return(
                <NavigatorIOS
            style={styles.container}
            ref="nav"
            initialRoute={{
                component: SimleView,
                title: 'My NavigatorIOS test',
                rightButtonTitle:'More',
                onRightButtonPress:this._rightButtonClicked,
                renderScene:this._renderScene,
                configureScene:this._configureScene,
                passProps: {
                    refView:this.refView,
                    refMethod:this.setRefView
                }
            }}
                />
        );
    },

    setRefView:function(refViewRef){
        this.refView = refViewRef;
    },

    // refViewMethod:function(refViewRef){
    //     this.refView = refViewRef;
    // },

    _configureScene:function(){
        console.log('in configure scene');
        
        return Navigator.SceneConfigs.FloatFromRight;
    },

    _renderScene:function(route, navigator){
        
        // console.log('route is ;'+route+';navigator is :'+navigator);
        
        // if (route.component) {
        //     return React.createElement(route.component, { navigator });
        // };
        // return nil;
    },
    
    _rightButtonClicked :function(){
        console.log('rightButtonClicked!!!');
        console.log('this.props.navigator.push is '+this.refs.nav.push);
        
        // this.refs.nav.push({
        //     name:'righ push',
        //     title:'right push',
        //     component:MyView,
        //     passProps:{
        //         lala:'pass prps is lala is this'
        //     }
        // });
        
        if(this.refView){
            this.refView._rightButtonClicked();         
        }

        // navigator.push({
        //     name: 'MineView ',
        //     component: MineView
        // });
        
    }
    
    
});

React.AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
