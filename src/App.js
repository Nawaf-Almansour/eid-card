import './App.css';
import React from 'react';
import { exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG } from 'react-component-export-image';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Form from './Components/Form';

export class App extends React.Component {
  constructor (props) {
    super(props);
    this.componentRef = React.createRef();
  }

  render () {
    return (
      <>
        <Form />
        <div ref={this.componentRef}>
          <h2>Hello World</h2>
        </div>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={() => exportComponentAsPNG(this.componentRef)}>PNG</Button>
          <Button variant="contained" onClick={() => exportComponentAsPDF(this.componentRef)}>PDF</Button>
          <Button variant="contained" onClick={() => exportComponentAsJPEG(this.componentRef)}>JPEG</Button>
        </Stack>
      </>
    );
  }
}

export default App;
