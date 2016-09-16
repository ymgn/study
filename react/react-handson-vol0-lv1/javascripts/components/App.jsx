var React = require("react");
var Block = require("./Block.jsx");
var Coin = require("./Coin.jsx");

var App = React.createClass({

    getInitialState : function(){
        return {
            coinClass : "img coin"
        }
    },

    render: function(){
        return(
            <div>
            <Coin coinClass={this.state.coinClass} />
            <Block classChange={this._classChange} />
            </div>
        )
    },

    _classChange: function(){

        var self = this;
        this.setState({ coinClass: "coin img animating" });

        setTimeout(function(){
            self.setState({ coinClass: "coin img" });
        }, 400);

    }

})

module.exports = App;

/*
https://github.com/Lebe-Inc/react-handson-vol0
Coinはクラス名を変えられるようにするために、引数でクラス名を受け取る用になっている
Blockは呼び出す時にclassChangeでこの場で作った関数を渡すとクリックで実行してくれるようになっている
*/