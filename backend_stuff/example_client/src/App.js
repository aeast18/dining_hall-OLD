import React, { Component } from 'react';

import sheets from './Sheets.js';
import SheetTable from './Table.jsx';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sheet: []
    };
  }

  componentDidMount() {
    sheets((json) => {
      this.setState({ sheet : json });
    });
  }

  render() {
    return (
      <div>
        { this.state.sheet.length > 0 && <SheetTable data={this.state.sheet} />}
      </div>
    );
  }
}

export default App;
