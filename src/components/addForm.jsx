import React, { Component } from 'react';

class AddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-form-input"
          placeholder="please enter your habit"
        />
        <button className="add-form-button">ADD</button>
      </form>
    );
  }
}

export default AddForm;