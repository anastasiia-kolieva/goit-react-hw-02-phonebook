import { Component } from 'react';
import s from '../ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = event => {
    //   обновить стейт по вычисляемому значению name у инпутов name="..." ->(event.target.name)
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form}>
        <label className={s.label}>
          Name{' '}
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          ></input>
        </label>
        <label className={s.label}>
          Number{' '}
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
