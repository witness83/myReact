'use strict';

var React = require('react-native');

var {
    Animation,
    AppRegistry,
    StyleSheet,
    Text,
    View
} = React;

var Animated = require('Animated');

var styles = React.StyleSheet.create({
    test: {
        width: 400,
        height: 400,
        backgroundColor: 'blue',
        opacity: 0
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    animate:{
        width: 200,
        height: 200,
        backgroundColor: 'blue',
        opacity: 1
    }
});


//var WithAnimation = React.createClass({
class WithAnimation extends React.Component{
    constructor(props){
        super(props);
        var value = new Animated.Value(0);
        value.addListener(()=>{
            console.log('call animate...');
        });
        this.state = {
            fadeAnim: value
        };
        
    }

    render (){
        console.log('in simple with text view  ...');
        return(
                <View style={styles.container}>
                <FadeInView ref={(reference)=>{console.log('fade in view ref method called....:'+reference);this.fadeinView = reference;
                                               console.log('this fade in view is :'+this.fadeinView);
                                              }} style={styles.animate} />
                <Text onPress={this._onPress.bind(this)}>click me !!!</Text>
                </View>
        );
    }


    //需要this._onPress.bind(this)才能获取到refs
    _onPress (){
        var animatingView = this.fadeinView;
        
        console.log('pressed ...'+animatingView);
        console.log('animatingView state fadeAnim is :'+animatingView.state.fadeAnim);
        if(!animatingView){return;};
        animatingView._fading();
        
        // Animated.timing(
        //     animatingView.state.fadeAnim,
        //     {toValue:1}
        // ).start();

        // Animated.timing(          // Uses easing functions
        //     this.state.fadeAnim,    // The value to drive
        //     {toValue: 1}           // Configuration
        // ).start();                // Don't forget start!
        // Animated.spring(
        //     this.state.fadeAnim,
        //     {
        //         toValue: 0,        // Target
        //         duration: 1    // Configuration
        //     }
        // ).start();
    }
    
};

class FadeInView extends React.Component {
    constructor(props) {
        super(props);
        this.isHidden = 0;
        var fadeAnim = new Animated.Value(this.isHidden); // init opacity 0
        fadeAnim.addListener(()=>{
            
            // var value = this.isHidden==0?1:0;
            // this.isHidden = value;
            console.log('call listener... finished value is :'+this.state.fadeAnim);
        });
        this.state = {
            fadeAnim: fadeAnim
        };

    }
    componentDidMount() {
        this._fading();
        // Animated.timing(          // Uses easing functions
        //     this.state.fadeAnim,    // The value to drive
        //     {toValue: 1,duration:2000}           // Configuration
        // ).start();                // Don't forget start!
    }
    render() {
        console.log('render fade in view ...');
        return (
                <Animated.View 
            style={{opacity: this.state.fadeAnim}}> 
                <Text>jjjj</Text>
            </Animated.View>
        );
    }

    _fading(){

        var value = this.isHidden==0?1:0;
        
        Animated.timing(          // Uses easing functions
            this.state.fadeAnim,    // The value to drive
            {toValue: value,duration:200}           // Configuration
        ).start();                // Don't forget start!
        this.isHidden = value;
    }
}


module.exports = WithAnimation;
React.AppRegistry.registerComponent('WithAnimation', () => WithAnimation);


