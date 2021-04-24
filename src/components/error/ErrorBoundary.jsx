import React from 'react';
import PropTypes from 'prop-types';
import ErrorPage from './ErrorPage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log error messages to an error reporting service here
  }

  clearState = () => {
    this.setState({ error: null, errorInfo: null });
  }
  
  render() {
    if (this.state.error) {
      // Error path
      return (
        <ErrorPage clearState={this.clearState}/>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}

ErrorBoundary.propTypes = {
  children: PropTypes.any
}

export default ErrorBoundary;
