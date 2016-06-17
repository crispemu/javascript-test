var QuadraticCalculator = React.createClass({
  getInitialState: function() {
    return {
      a: 0,
      b: 0,
	  c: 'sum'
    };
  },

  /**
   * This function will be re-bound in render multiple times. Each .bind() will
   * create a new function that calls this with the appropriate key as well as
   * the event. The key is the key in the state object that the value should be
   * mapped from.
   */
  handleInputChange: function(key, event) {
    var partialState = {};
	if (key == 'c')
		partialState[key] = event.target.value;
	else
		partialState[key] = parseFloat(event.target.value);
	
    this.setState(partialState);
  },

  render: function() {
    var a = this.state.a;
    var b = this.state.b;
	var c = this.state.c;
	var result = a + b;
	if (c == "sub")
		 result = a - b;
	if (c == "multi")
	 result = a * b;
 
    return (
      <div>
        <h4>Operation:</h4>
        <p>
          <label>
            a: <input type="number" value={a} onChange={this.handleInputChange.bind(null, 'a')} />
          </label>
          <br />
		  <label>
            a: <select type="number" value={a} onChange={this.handleInputChange.bind(null, 'c')}>
				  <option value="sum">Sum</option>
				  <option value="sub">Sub</option>
				  <option value="multi">Multi</option>
			</select>
          </label>
		  <br />
          <label>
            b: <input type="number" value={b} onChange={this.handleInputChange.bind(null, 'b')} />
          </label>
          <br />
          <br />
          Result: <strong>{result}</strong>
        </p>
      </div>
    );
  }
});

ReactDOM.render(
  <QuadraticCalculator />,
  document.getElementById('container')
);
