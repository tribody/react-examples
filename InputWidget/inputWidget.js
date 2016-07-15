/**author : River He*/

//细分结构
var data = {
	labelText: "酒店地址",
	hinderText: "请填写酒店地址",
	buttonImgSrc: "eliminate.png",
	regExp: /^\w{5,8}$/
};

var Title = React.createClass({
	render: function() {
	  	return (
	    	<label>{this.props.labelText}</label>
	    );
  	}
});

var InputBox = React.createClass({

	handleChange: function(event) {
		this.props.onUserInput(
			this.refs.inputBox.value
		);

		event.preventDefault();
		event.stopPropagation();
	},

	fitRegExp: function(inputText) {
		if(inputText.match(this.props.regExp) != null) {
			// console.log("true");
			return true;
		} else {
			// console.log("false");
			return false;
		}
	},

	render: function() {
	  	return (
		  	<input
		  		style={this.fitRegExp(this.props.inputText)?({border: '1px solid green'}):({border: '1px solid red'})} 
		    	placeholder={this.props.hinderText}
		    	value={this.props.inputText} 
		    	regExp={this.props.regExp}
		    	ref="inputBox"
		    	onChange={this.handleChange}>
		    </input>
	  	);
	}
});

var ClearButton = React.createClass({

	handleClick: function(event) {
		this.props.onClear();
		
		event.stopPropagation();
		event.preventDefault();
	},

	render: function() {
	  	return (
	    	<img 
	    		src={this.props.buttonImgSrc} 
	    		onClick={this.handleClick}
	    	/>
	    );
	}
});

var LimitedInputBox = React.createClass({
	getInitialState: function() {
		return {
		  inputText: ''
		};
	},

	handleUserInput: function(inputText) {
		this.setState({
			inputText: inputText
		});
	},

	handleClear: function() {
		this.delText();
	},
	
	getText: function() {
		return this.state.inputText;
	},

	setText: function(text) {
		this.setState({
			inputText: text
		});
	},

	delText: function() {
		this.setState({
			inputText: ''
		});
	},

	render: function() {
		return (
			<div>
				<Title labelText={this.props.data.labelText} />
				<InputBox 
					hinderText={this.props.data.hinderText}
					inputText={this.state.inputText}
					regExp={this.props.data.regExp}
					onUserInput={this.handleUserInput}
				/>
				<ClearButton 
					buttonImgSrc={this.props.data.buttonImgSrc} 
					onClear={this.handleClear}
				/>
			</div>
		);
	}
});

ReactDOM.render(
	<LimitedInputBox data={data} />,
  document.getElementById('example')
);