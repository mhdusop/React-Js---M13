import React, { Fragment, Component } from 'react';
import {FaBookmark, FaThumbsUp} from 'react-icons/fa';
import {FiBookmark, FiThumbsUp} from 'react-icons/fi';

class CatalogItem extends Component {
    book;
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.item[0],
            author: this.props.item[1],
            publisher: this.props.item[2],
            year: this.props.item[3],
            jumLike : Math.floor(Math.random()*10+1),
            liked : false,
            bookmark : ""
        };
        this.bookmarkIcon = this.bookmarkIcon.bind(this);
        this.likeIcon = this.likeIcon.bind(this);
    }

    bookmarkIcon() {
        this.setState((state) => {
            return { bookmark : !state.bookmark }
        });
    }

    likeIcon() {
        return this.setState((state) => {
            if(state.liked) return {
                jumLike : state.jumLike - 1, liked : !state.liked
            }
            else return {
                jumLike : state.jumLike + 1, liked : !state.liked
            }
        });
    }

    render() {
        return(
            <Fragment>
                <div className='card text-center book-content'>
                    <div class="card-body">
                        <h2 class="card-title title">{this.state.title}</h2>
                        <p class="card-text author">{this.state.author}</p>
                        <p class="card-text text-muted publisher">{this.state.publisher}<small class="year"> {this.state.year}</small></p>
                    </div>
                    <div className='card-footer text-muted d-flex'>
                        <p className='flex-grow-1 text-start'>
                            {this.state.liked ? <FaThumbsUp onClick={this.likeIcon}/> : <FiThumbsUp onClick={this.likeIcon} />} {this.state.jumLike} Like(s)
                        </p>
                        <p className='text-end'>
                            {this.state.bookmark ? <FaBookmark onClick={this.bookmarkIcon} /> : <FiBookmark onClick={this.bookmarkIcon} />}
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }
} 

export default CatalogItem;