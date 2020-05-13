import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.onFormSubmit}>
        <label>
          Enter your name:
          <input
            name="formName"
            type="text"
            value={this.props.formName}
            onChange={this.props.onFormChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
