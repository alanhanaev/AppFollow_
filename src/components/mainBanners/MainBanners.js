import React, { Component } from 'react';
import $ from 'jquery'
import { Grid, Image } from 'semantic-ui-react';
import './MainBanners.css';


class MainBanners extends Component {
    constructor(props) {
        super(props);
        var state = {};
    }

    render() {
        return (
            <div className="main-banners">
                <div className='main-banners-items'>
                    {
                        this.props.items.map((item, index) => {
                            return (
                                <div key={index} className='main-banners-items__banner'>
                                   <img src={item.bannerLink} />
                                </div>
                            );
                        })
                    }
                </div>
            </div >
        );
    }
}

export default MainBanners;
