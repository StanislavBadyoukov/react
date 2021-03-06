import React, { Component } from 'react';
import './App.css';
import Table from '../Table/Table';
import Form from '../Form/Form';
import { connect } from 'react-redux';
import { delete_user } from '../../redux/Actions/index';



class App extends Component {
  state = {
      characters: this.props.data
  };
  handleSubmit = character => {
    this.setState({ characters: [...this.props.data, character] });
  }
  handleSubmit2 = data => {
    this.setState({ characters: this.props.data} );
  }

  render() {
      const { characters } = this.state;
      
      return (
          <div className="container">
              <h1>React Project Sample</h1>
              
              <Form handleSubmit={this.handleSubmit} />
              <br></br>
              
              <Table
                  handleSubmit={this.handleSubmit2}
                  characterData={characters}
                  removeCharacter={this.props.removeCharacter}
              />
          </div>
      );
  }
}


const mapStateToProps = (state) => {
    return {
        data: state.tab_reducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        removeCharacter: (id) => dispatch(delete_user(id))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
