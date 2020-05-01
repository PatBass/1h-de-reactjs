import React from 'react';
import logo from './logo.svg';
import './App.css';
import Client from "./Client";
import ClientForm from "./ClientForm";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends React.Component {
  state = {
    clients: [
      {id: 1, lastname: "Le Marchand", firstname: "Alain"},
      {id: 2, lastname: "Couturier", firstname: "Michel"},
      {id: 3, lastname: "Dupont", firstname: "Bruno"},
      {id: 4, lastname: "Deschamps", firstname: "Daniel"},
    ]

  };

  handleDelete = id => {
      const clients = [...this.state.clients];//this.state.clients.slice();
      const index = clients.findIndex((client) => client.id === id);
      clients.splice(index, 1);
      this.setState({clients: clients});
  };

  addClient = client => {
      const clients = [...this.state.clients];//.slice();
      clients.push(client);
      this.setState({clients: clients});
  }

  render() {
    const title = <h1>Liste des clients</h1>;
    return (
        <div>
            {title}
                <ul>
                    {this.state.clients.map(client => (

                        <Client details={client} onDelete = {this.handleDelete} />

                    ))}
                </ul>
                <ClientForm onAddClient={this.addClient} />
        </div>
    );
  }
}

export default App;
