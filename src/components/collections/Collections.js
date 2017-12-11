import React, { Component } from 'react';
import $ from 'jquery-easing'
import { Grid, Image } from 'semantic-ui-react';
import './Collections.css';


class Collections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    showModal() {
        this.setState({ showModal: true }, (function () {
            $('.collection__modal').show();
            $('.collection__modal').animate({ top: '0%' }, 1000, "easeInOutCubic", (function () {
            }).bind(this))
        }).bind(this))
    }

    hideModal() {
        $('.collection__modal').animate({ top: '-100%' }, 1000, "easeInOutCubic", (function () {
            $('.collection__modal').hide();
            this.setState({ showModal: false }, (function () {

            }).bind(this))
        }).bind(this))
    }

    render() {
        return (
            <div className="collection">
                <div className="collection-header">
                    <div className="collection-header__title">
                        {this.props.title}
                    </div>
                    <div className="collection-header__show-all-btn" onClick={this.showModal.bind(this)}>
                        См. все >
                    </div>
                </div>
                <div className='collection-items'>
                    {
                        this.props.items.map((item, index) => {
                            return (
                                <div key={index} className='collection-items__app'>
                                    <div className='collection-items__app__image'>
                                        <img src={item.imageLink} />
                                    </div>
                                    <div className='collection-items__app__title'>
                                        {item.name}
                                    </div>
                                    <div className='collection-items__app__category'>
                                        Игры
                                 </div>
                                    <div className='collection-items__app__cost'>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>

                {
                    this.state.showModal
                        ?
                        <div className="collection__modal">
                            <div className="collection__modal__header-close-btn">
                            <span onClick={this.hideModal.bind(this)}>
                                <img src="/images/close_btn.png" />
                            </span>
                            </div>
                            <div className="collection__modal__header">
                                <div className="collection-header__title">
                                    {this.props.title}
                                </div>
                                <div className="collection-header__show-all-btn">
                                   Подборка &nbsp; ˅
                                 </div>
                            </div>
                            <span className="hr-style">
                            <hr  />
                            </span>
                            <div className="collection__modal__content">
                                {
                                    this.props.items.map((item, index) => {
                                        return (
                                            <div key={index} className='collection-items__app'>
                                                <div className='collection-items__app__image'>
                                                    <img src={item.imageLink} />
                                                </div>
                                                <div className='collection-items__app__title'>
                                                    {item.name}
                                                </div>
                                                <div className='collection-items__app__category'>
                                                    {item.category}
                                                </div>
                                                <div className='collection-items__app__cost-download'>
                                                {
                                                    item.cost!==''
                                                    ?
                                                    <button >
                                                        {item.cost}&nbsp;р.
                                                    </button>
                                                    :
                                                    <button>
                                                        <span >Загрузить</span>
                                                        </button>
                                                }
                                                </div>
                                                <div className='collection-items__app__inbuilt-purchases'>
                                                {
                                                    item.inbuiltPurchases
                                                    ?
                                                    'Встроенные покупки'
                                                    :''
                                                }
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>

                        : ''
                }


            </div >
        );
    }
}

export default Collections;
