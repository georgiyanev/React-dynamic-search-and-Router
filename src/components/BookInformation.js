import React, { Component } from 'react';


class BookInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const value = this.props.location.query;

    return (
      <div style={bookInfo}>
        {value ?
          <div>
            <h3>{value.title}</h3>
            <img src={value.image} alt={value.image}/>
            <div>
              <h5>Description:</h5>
              <p>{value.description}</p>
            </div>
            <div>
              <span>Publisher: {value.publisher}</span>
            </div>
            <div>
              <span>Author: {value.authors}</span>
            </div>
          </div>
        : <p>Select a book from list..</p>
        }
      </div>
    )
  }
}

const bookInfo = {
  background: '#e8e8e8',
  border: '1px solid black',
  margin: '20px',
  padding: '20px'
}

export default BookInformation;
