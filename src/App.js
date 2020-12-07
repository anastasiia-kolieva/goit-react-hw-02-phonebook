import { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
// import Filter from './components/Filter/Filter'
import ContactList from './components/ContactList/ContactList';

const stylesForWrapper = {
  width: '500px',
  margin: '0 auto',
  paddingTop: '30px',
};

const stylesForTitles = {
  textAlign: 'center',
};

class App extends Component {
  state = {
    contacts: [
      // для проверки!!
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // изменить стостояние от предыдущего
  deleteContact = contactId => {
    this.setState(prevState => ({
      // беру все предыдущие контакты.Для каждого из них проверяю
      // по id(сравниваю с id контакта, который нужно удалить)
      // отфильтровывыю только те, id которых не равен id, контакта который нужно удалить
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div style={{ ...stylesForWrapper }}>
        <h1 style={{ ...stylesForTitles }}>Phonebook</h1>
        <ContactForm />

        <h2 style={{ ...stylesForTitles }}>Contacts</h2>
        {/* <Filter /> */}
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
