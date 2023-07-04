import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "Lorem ipsum dolor sit amet.",
      imgSrc: "https://www.pngitem.com/pimgs/m/55-550604_john-doe-hd-png-download.png",
      profession: "Developer"
    },
    show: false,
    intervalId: null,
    mountedTime: null
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, mountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Mounted Time: {mountedTime ? mountedTime.toLocaleString() : "N/A"}</p>
      </div>
    );
  }
}

export default App;
