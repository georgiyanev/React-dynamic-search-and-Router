import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      searchString: '',
      items: [],
    }
    this.handleChange = this.handleChange.bind(this);
  }

  snowItems(items){
    this.setState({items: items});
  }

  componentDidMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=SEARCH")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            error: null,
            isLoaded: true,
            items: result.items,
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }

      )

      this.refs.search.focus();
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value,
    });
  }

  render() {
    let _items = this.state.items;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _items = _items.filter(function(book) {
        return book.volumeInfo.title.toLowerCase().match(search);
      });
    }

    return (
      <div>
        <section>
          <div>
            <h3>
              Find A Book or go to a:
              <Link to = {{
                pathname: '/'
              }} className="fas fa-search"> Homepage list</Link>
            </h3>
          </div>
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search here.."
            onChange={this.handleChange}
            value={this.state.searchString}
            ref="search"
            className="searchField"
            />
          <div>
            <ul>
              {_items.map(item => {
                return(
                  <li key={item.volumeInfo.title}>
                    <Link to = {{
                        pathname: `/BookInformation/${item.volumeInfo.title.replace(/ /g, "-")}`,
                        query: {
                          title: item.volumeInfo.title,
                          description: item.volumeInfo.description,
                          publisher: item.volumeInfo.publisher,
                          authors: item.volumeInfo.authors,
                          image: item.volumeInfo.imageLinks.smallThumbnail
                        },
                      }}>
                      <div>
                        {item.volumeInfo.title}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

export default BooksList;
