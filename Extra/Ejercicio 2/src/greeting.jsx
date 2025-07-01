import { Component } from 'react';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ name: 'Alfonsina' });
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return <p>Hola {this.state.name}</p>;
  }
}

export default Greeting;

