import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from "../spinner";

const Record = ({selectedItem, field, label}) => {
  return (

    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{selectedItem[field]}</span>
    </li>
  )
};

export { Record };

export default class ItemDetails extends Component {

  constructor() {
    super();
    this.state = {
      selectedItem: null,
      image: null,
      loading: false
    }
    this.swapi = new SwapiService();
  }

  componentDidMount() {
    this.updateItem();
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.selectedItemId === this.props.selectedItemId) {
      return;
    }

    this.setState((selectedItem, image) => {
      return {
        selectedItem,
        image,
        loading: true
      }
    })

    this.updateItem();
  }

  updateItem = () => {

    const { selectedItemId,
            getData,
            getImage } = this.props;

    if (!selectedItemId) {
      return;
    }

    getData(selectedItemId)
      .then((selectedItem) => {
        this.setState({
          selectedItem,
          image: getImage(selectedItem),
          loading: false
        })
      });
  }

  render() {
    
    const { field } = this.props;

    const { selectedItem, image, loading } = this.state;

    const ItemContent = ({ selectedItem, image }) => {
      const { name } = selectedItem;

      return (
        <React.Fragment>
          <img className="item-image"
            src={image}
            alt={name} />

          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {
                React.Children.map(this.props.children, (child) => {
                  return React.cloneElement(child, { selectedItem });
                })
              }
            </ul>
          </div>
        </React.Fragment>
      );
    };


    const loadingContent = loading ? <Spinner /> : null;
    const itemContent = selectedItem && !loading ? <ItemContent selectedItem={selectedItem} image={image}/> : null;
    const selectItemContent = !(selectedItem || loading) ? <span>Select a {field} from list.</span> : null;

    return (
      <div className="item-details card">
        {loadingContent}
        {itemContent}
        {selectItemContent}
      </div>
    )
  }
}
