import React, { Component } from 'react';

class TableRow extends Component{
    render(){
      var colList = this.props.data.map( (element) => (
        <th>{element}</th>
      ));
      return (
        <thead>
          <tr>
            {colList}
          </tr>
        </thead>
      );
    }
}

export default TableRow;
