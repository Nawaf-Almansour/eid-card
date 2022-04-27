import './App.css';
import React from 'react';
import { exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG } from 'react-component-export-image';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormName from './components/Form';
import eid from './assets/image/eid.jpg'; // Tell webpack this JS file uses this image

export class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { name: '' };
    this.componentRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (evt) => {
    const { firstName: value } = evt;
    this.setState({ name: value });
  };

  render () {
    const { name } = this.state;
    return (
      <Container fixed className="container">
        <FormName handleChange={this.handleChange} />
        <div ref={this.componentRef}>
          <img src={eid} alt="eid" />
          <h2 className="upper-layer title">{name}</h2>
        </div>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={() => exportComponentAsPNG(this.componentRef)}>PNG</Button>
          <Button variant="contained" onClick={() => exportComponentAsPDF(this.componentRef)}>PDF</Button>
          <Button variant="contained" onClick={() => exportComponentAsJPEG(this.componentRef)}>JPEG</Button>
        </Stack>
      </Container>
    );
  }
}

export default App;
