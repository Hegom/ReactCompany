import React from 'react';
import { Media } from 'react-md';

class LazyImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false
    };
  }

  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      this.setState({
        loaded: true
      });
    };
    img.onerror = () => {
      this.setState({
        error: true
      });
    };
    img.src = this.props.src;
  }

  render() {
    if (this.state.error) {
      return <Media aspectRatio="1-1" className="fixedImg">
        <img
          style={this.props.style}
          //src={this.props.unloadedSrc}
          // alt={this.props.alt} 
          alt="Can't load this image..."/>
      </Media>
    } else if (!this.state.loaded) {
      return <Media aspectRatio="1-1" className="fixedImg">
        <img
          className="App-logo"
          style={this.props.style}
          src={this.props.unloadedSrc}
          alt={this.props.alt} />
      </Media>
    }
    return <Media aspectRatio="1-1" className="fixedImg"> <img
      style={this.props.style}
      src={this.props.src}
      alt={this.props.alt} />
    </Media>
  }
}

export default LazyImage;