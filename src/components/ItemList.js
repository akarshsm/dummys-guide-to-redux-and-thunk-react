import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {
    componentDidMount() {
        console.log(' fetch data in did mount ');
        this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        if (this.props.hasErrored) {
            return <p> Sorry Bro! Jack Sparrow hijacked our data.</p>;
        }

        if (this.props.isLoading) {
            return <p> Pleae wait! Jack Sparrow is in search...</p>;
        }

        return (
            <ul>
                {
                    this.props.items.map((item)=>(
                        <li key={item.id}>
                            {item.label}
                        </li>
                    ))
                }
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispathToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispathToProps)(ItemList);
