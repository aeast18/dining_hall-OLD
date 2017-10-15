import React, { Component } from 'react';

//import TableHead from './TableHead.jsx';
import TableRow from './TableRow.jsx';

class SheetTable extends Component{
    render(){
      var rows = this.props.data.map( (element, id) => (
        <TableRow key={id} data={element} />
      ));
      return (
        <table className="table">
          <tbody>
            {rows}
          </tbody>
        </table>
      );
    }
}

export default SheetTable;
