import React, { Component } from 'react';
import $ from 'jquery'
import { Grid, Image } from 'semantic-ui-react';
import './CollectionBanners.css';


class CollectionBanners extends Component {
    constructor(props) {
        super(props);
        var state = {};
    }

    render() {
        return (
            <div className="collection-banners">
                <div className="collection-banners-header">
                    <div className="collection-banners-header__title">
                    {this.props.title}
                    </div>
                </div>
                <div className='collection-banners-items'>
                    {
                        this.props.items.map((item, index) => {
                            return (
                                <div key={index} className='collection-banners-items__banner'>
                                   <img src={item.imageLink} />
                                </div>
                            );
                        })
                    }
                </div>
            </div >
        );
    }
}

export default CollectionBanners;
