var React = require("react");
var ReactDOM = require("react-dom");

// 後で作るApp.jsxをここで呼び込んでおく
var App = require("./components/App.jsx");

// ReactDOMのrenderメソッドでレンダリング
ReactDOM.render(
    <App/>,
    document.getElementById("react")
)