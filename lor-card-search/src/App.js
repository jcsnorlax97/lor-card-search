import React, { Component } from "react";
import Form from "./Form";
import Cards from "./Cards";
import "./App.css";

class App extends Component {
  state = {
    formCost: [],
    formPower: [],
    formHealth: [],
    formRegion: [],
    formRarity: [],
    formKeyword: [],
    formText: "",
    cards: [],
  };

  // do api call to get card information
  componentDidMount() {
    console.log(this.state.cards.length);
    fetch(`/api/cards`)
      .then((response) => response.json())
      .then((jsonObj) => {
        this.setState({ cards: jsonObj });
      });
  }

  handleFormChange = (event) => {
    const target = event.target;
    const value = target.value; // value to be stored
    const name = target.name; // key used to accessing state (based on the 'name' attribute in <form><input name="XXX" .../></form>)
    this.setState({
      [name]: value,
    });
  };

  handleFormSelect = (event) => {
    const target = event.target;
    const name = target.name; // key used to accessing state (based on the 'name' attribute in <form><input name="XXX" .../></form>)
    const value = target.value; // new value that is clicked
    let values = [...this.state[name]]; // values that are selected currently in the state
    const isInValues = values.includes(value); // is value in values already?

    // if the value is currently selected, remove it from the list; otherwise, push it to the list
    // console.log("[Before] ", values);
    values = isInValues
      ? values.filter((v) => v !== value)
      : [...values, value];
    // console.log("[After] ", values);

    // update the state
    this.setState({
      [name]: values,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault(); // prevent page auto reload
    console.log(event);
    // fetch(`/api/greeting?name=${encodeURIComponent(this.state.formName)}`)
    //   .then((response) => response.json())
    //   .then((jsonObj) => {
    //     console.log(jsonObj);
    //     this.setState({
    //       formGreeting: jsonObj["greeting"],
    //     });
    //   });
  };

  render() {
    const cards = this.state.cards;
    console.log(cards);
    return (
      <React.Fragment>
        <Form
          formCost={this.state.formCost}
          formPower={this.state.formPower}
          formHealth={this.state.formHealth}
          formRegion={this.state.formRegion}
          formRarity={this.state.formRarity}
          formKeyword={this.state.formKeyword}
          formText={this.state.formText}
          onFormChange={this.handleFormChange}
          onFormSelect={this.handleFormSelect}
          onFormSubmit={this.handleFormSubmit}
        />
        <Cards cards={cards} />
      </React.Fragment>
    );
  }
}

export default App;
