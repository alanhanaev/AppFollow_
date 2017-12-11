import React, { Component } from 'react';
import $ from 'jquery';
import { Grid, Image } from 'semantic-ui-react';
import './TopApps.css';


class TopApps extends Component {
    constructor(props) {
        super(props);
        var state = {};
    }

    render() {
        return (
            <div>
                <div className="top-paid-apps">
                    <div className="top-paid-apps__title">
                        {this.props.titlePaid} 
                    </div>
                    <ol className="top-paid-apps__items">
                        {this.props.itemsPaid.slice(0, 10).map((item, index) => {
                            return (
                                index === 0
                                    ?
                                    <li key={index} className="top-paid-apps__items-image padding-left-10">
                                        <div className="top-paid-apps__items__item-image__wrap__image">
                                            <img src={item.imageLink} />
                                        </div>

                                        <div className="top-paid-apps__items__item-image__wrap__description">
                                            <div className="top-paid-apps__items__item-image__name">
                                                {item.name}
                                            </div>
                                            <div className="top-paid-apps__items__item-image__category">
                                                {item.category}
                                            </div>
                                        </div>
                                        <div style={{clear: 'both'}}></div>
                                    </li>
                                    :
                                    <li key={index} className="top-paid-apps__items__item padding-left-10">
                                        <div className="top-paid-apps__items__item__name">
                                            {item.name}
                                        </div>
                                        <div className="top-paid-apps__items__item__category">
                                            {item.category}
                                        </div>
                                    </li>
                            );
                        })}
                    </ol>
                </div>

                <div className="top-free-apps">
                    <div className="top-free-apps__title">
                        {this.props.titleFree}
                    </div>
                    <div className="top-free-apps__items">
                    <ol className="top-paid-apps__items">
                        {this.props.itemsFree.slice(0, 10).map((item, index) => {
                            return (
                                index === 0
                                    ?
                                    <li key={index} className="top-paid-apps__items-image padding-left-10">
                                        <div className="top-paid-apps__items__item-image__wrap__image">
                                            <img src={item.imageLink} />
                                        </div>

                                        <div className="top-paid-apps__items__item-image__wrap__description">
                                            <div className="top-paid-apps__items__item-image__name">
                                                {item.name}
                                            </div>
                                            <div className="top-paid-apps__items__item-image__category">
                                                {item.category}
                                            </div>
                                        </div>
                                        <div style={{clear: 'both'}}></div>
                                    </li>
                                    :
                                    <li key={index} className="top-paid-apps__items__item padding-left-10">
                                        <div className="top-paid-apps__items__item__name">
                                            {item.name}
                                        </div>
                                        <div className="top-paid-apps__items__item__category">
                                            {item.category}
                                        </div>
                                    </li>
                            );
                        })}
                    </ol>
                    </div>
                </div>
            </div >
        );
    }
}

export default TopApps;