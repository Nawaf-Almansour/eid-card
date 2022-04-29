import './App.css';
import React from 'react';
import { exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG } from 'react-component-export-image';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormName from './components/Form';
import eid from './assets/image/eid.png'; // Tell webpack this JS file uses this image

export class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { name: [] };
    this.componentRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (evt) => {
    const { firstName: value } = evt;
    const myArray = value.split(' ');
    this.setState({ name: myArray });
  };

  render () {
    const { name } = this.state;
    return (
      <Container fixed className="container">
        <FormName handleChange={this.handleChange} />
        <div className="box">
          <div ref={this.componentRef}>
            <div className="upper-layer">
              {
                name.map((item) => <h2 key={0} className="title">{item}</h2>)
              }
            </div>
            <img src={eid} alt="eid" />
          </div>
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
