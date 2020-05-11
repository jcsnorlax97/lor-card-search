import React, { Component } from "react";
import Form from "./Form";
import Card from "./Card";

class App extends Component {
  state = {
    formName: "",
    formGreeting: "",
    cards: [],
  };

  // do api call to get card information
  componentDidMount() {
    console.log(this.state.cards.length);
    fetch(`/api/cards`)
      .then((response) => response.json())
      .then((jsonObj) => {
        this.setState({
          cards: jsonObj,
        });
      })
      .then(() => {
        console.log(this.state.cards);
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

  handleFormSubmit = (event) => {
    event.preventDefault(); // prevent page auto reload
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.formName)}`)
      .then((response) => response.json())
      .then((jsonObj) => {
        console.log(jsonObj);
        this.setState({
          formGreeting: jsonObj["greeting"],
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <Form
          formName={this.state.formName}
          onFormChange={this.handleFormChange}
          onFormSubmit={this.handleFormSubmit}
        />
        {this.state.formGreeting}
        {this.state.cards.length > 0 &&
          this.state.cards.map((card) => (
            <Card key={card.cardCode} card={card} />
          ))}
      </React.Fragment>
    );
  }
}

export default App;
