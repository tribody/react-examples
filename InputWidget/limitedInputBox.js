/** author : river he**/


var data = {
	labelText: "酒店地址",
	hinderText: "请填写酒店地址",
	regExp: /^\w{5,8}$/
};

var LimitedInputBox = React.createClass({

	//初始化state
	getInitialState: function() {
		return {
			inputText: ''
		};
	},

	// handleKeyUp: function(inputText) {
	// 	this.setState({
	// 		inputText: this.refs.input.value.trim()
	// 	});
	// },
	//处理输入框变化
	handleChange: function() {
		this.setState({
			inputText: this.refs.input.value.trim()
		});
	},

	//处理删除事件
	handleClear: function() {
		this.delText();
	},

	//删除方法
	delText: function() {
		// console.log(this.refs.input.text);
		this.setState({
			inputText: ''
		});
	},

	//获取用户输入
	getText: function() {
		return this.state.inputText;
	},

	//设置输入框内容
	setText: function(text) {
		this.setState({
			inputText: text.trim()
		});
	},

	//判断输入内容否符合设置的正则表达式
	fitRegExp: function(inputText) {
		// console.log("start fitRegExp");
		if(inputText.match(this.props.data.regExp) != null) {
			// console.log("true");
			return true;
		} else {
			// console.log("false");
			return false;
		}
	},

	render: function() {

		return (
			<div>
			<label >{this.props.data.labelText}</label>
			<input 
				style={this.fitRegExp(this.state.inputText)?({border: '1px solid green'}):({border: '1px solid red'})} 
				placeholder={this.props.data.hinderText} 
				regExp={this.props.data.regExp}
				// onKeyUp={this.handleKeyUp}
				onChange={this.handleChange}
				value={this.state.inputText}
				ref='input'
				></input>
			<img src="eliminate.png" onClick={this.handleClear}></img>
			</div>
		);
	}
});

ReactDOM.render(
	<LimitedInputBox data={data} />,
	document.getElementById('example')
);