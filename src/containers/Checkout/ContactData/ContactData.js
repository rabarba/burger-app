import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Ugur Can Kap',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    count: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false
                })
                
                this.props.history.push('/');
            })
            .catch(error => this.setState({ loading: false }));
    }

    render() {

        let form = (
            <form>
                <input className="Input" type="text" name="name" placeholder="Your Name" />
                <input className="Input" type="email" name="name" placeholder="Your Mail" />
                <input className="Input" type="text" name="street" placeholder="Street" />
                <input className="Input" type="text" name="postalcode" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>);

        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                { form}
            </div>
        )
    }
}

export default ContactData;