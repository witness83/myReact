'use strict';

var React = require('react-native');

var {
    Text,
    View
} = React;

var styles = React.StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});


var ForLiftCycle = React.createClass({

    getDefaultProps:function(){
        console.log('in getDefaultProps');
    },
    getInitialState:function(){
        console.log("in getInitialStates");
        return (
            {
                s1:''
            }
        );
    },
    componentWillMount:function(){
        console.log('in componentWillMounts');

    },
    componentDidMount:function(){
        console.log('in componentDidMounts');

    },
    componentWillReceiveProps:function(){
        console.log('in componentWillReceivePropss');

    },
    // shouldComponentUpdate:function(){
    //     console.log('in shouldComponentUpdates');
    //     super.shouldComponentUpdate();
    // },
    componentWillUpdate:function(){
        console.log('in componentWillUpdate');

    },
    componentDidUpdate:function(){
        console.log('in componentDidUpdates');

    },
    componentWillUnmount:function(){
        console.log('in componentWillUnmounts');

    },
    
    render:function(){
        console.log('in simple with text view  ...');
        return(
                <View style={styles.container}>
                <Text onPress={this._onPress}>init React Viewsddddd</Text>
                <Text>value is :{this.state.s1}</Text>
                </View>
        );
    },

    _onPress:function(){
        console.log('this state is :'+this.state.s1);
        this.setState({
            s1:this.state.s1+'abc'
        });

    }
    
});


module.exports = ForLiftCycle;
React.AppRegistry.registerComponent('ForLiftCycle', () => ForLiftCycle);
