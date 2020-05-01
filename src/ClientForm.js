import React, {Component} from "react";

class ClientForm extends Component {
    state = {
        newClient: ''
    };

    handleChange = (event) => {
        this.setState({newClient: event.currentTarget.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const firstname = this.state.newClient;
        const lastname = this.state.newClient;

        const id = new Date().getTime();
        const client = {id, firstname, lastname};

        this.props.onAddClient(client);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.newClient}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Ajouter un client"
                />
                <button>Confirmer</button>
            </form>
        );
    }
}

export default ClientForm;