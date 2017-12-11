import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Grid, Image } from 'semantic-ui-react';
import Collections from '../../components/collections/Collections';
import CollectionBanners from '../../components/collectionBanners/CollectionBanners';
import MainBanners from '../../components/mainBanners/MainBanners';
import TopApps from '../../components/topApps/TopApps';
import $ from 'jquery';
import './AppStoreCnt.css';


class AppStoreCnt extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      device: 'iphone'
    };
    this.loadCollections();
  }

  setIphoneDevice() {
  this.setState({device:'iphone'});
  }

  setIpadDevice() {
    this.setState({device:'ipad'});
  }

  loadCollections() {
    this.loadNewAndInteresting();
    this.loadLoversOfClassics();
    this.loadYouMightLikeIt();
    this.loadFavoritesOfLastWeeks();
    this.loadTopFreeApps();
    this.loadTopPaidApps();
    this.loadAppBanners();
    this.loadCollectionBanners();
  }

  loadNewAndInteresting() {
    $.ajax({
      method: "GET",
      url: "/api/getAppsFromCollection_iphone_id1.json",
      success: (data, status, xhr) => {
        if (xhr.status === 200) {
          this.props.replaceNewAndInterestingIphone(data);
        }
      }
    });
    $.ajax({
      method: "GET",
      url: "/api/getAppsFromCollection_ipad_id1.json",
      success: (data, status, xhr) => {
        if (xhr.status === 200) {
          this.props.replaceNewAndInterestingIpad(data);
        }
      }
    });
  }

  loadLoversOfClassics() {
    $.ajax({
      method: "GET",
      url: "/api/getAppsFromCollection_iphone_id2.json",
      success: (data, status, xhr) => {
        if (xhr.status === 200) {
          this.props.replaceLoversOfClassicsIphone(data);
        }
      }
    });
    $.ajax({
      method: "GET",
      url: "/api/getAppsFromCollection_ipad_id2.json",
      success: (data, status, xhr) => {
        if (xhr.status === 200) {
          this.props.replaceLoversOfClassicsIpad(data);
        }
      }
    });
  }

  loadYouMightLikeIt() {
    $.ajax({
      method: "GET",
      url: "/api/getAppsFromCollection_iphone_id3.json",
      success: (data, status, xhr) => {
        if (xhr.status === 200) {
          this.props.replaceYouMightLikeItIphone(data);
        }
      }
    });
    $.ajax({
      method: "GET",
      url: "/api/getAppsFromCollection_ipad_id3.json",
      success: (data, status, xhr) => {
        if (xhr.status === 200) {
          this.props.replaceYouMightLikeItIpad(data);
        }
      }
    });
  }

  loadFavoritesOfLastWeeks() {
    $.ajax({
      method: "GET",
      url: "/api/getAppsFromCollection_iphone_id4.json",
      success: (data, status, xhr) => {
        if (xhr.status === 200) {
          this.props.replaceFavoritesOfLastWeeksIphone(data);
        }
      }
    });
    $.ajax({
      method: "GET",
      url: "/api/getAppsFromCollection_ipad_id4.json",
      success: (data, status, xhr) => {
        if (xhr.status === 200) {
          this.props.replaceFavoritesOfLastWeeksIpad(data);
        }
      }
    });
  }

  loadTopFreeApps() {
    $.ajax({
      method: "GET",
      url: "/api/getAppsFromCollection_iphone_id5.json",
      success: (data, status, xhr) => {
        if (xhr.status === 200) {
          this.props.replaceTopFreeAppsIphone(data);
        }
      }
    });
    $.ajax({
      method: "GET",
      url: "/api/getAppsFromCollection_ipad_id5.json",
      success: (data, status, xhr) => {
        if (xhr.status === 200) {
          this.props.replaceTopFreeAppsIpad(data);
        }
      }
    });
  }

  loadTopPaidApps() {
    $.ajax({
      method: "GET",
      url: "/api/getAppsFromCollection_iphone_id6.json",
      success: (data, status, xhr) => {
        if (xhr.status === 200) {
          this.props.replaceTopPaidAppsIphone(data);
        }
      }
    });
    $.ajax({
      method: "GET",
      url: "/api/getAppsFromCollection_ipad_id6.json",
      success: (data, status, xhr) => {
        if (xhr.status === 200) {
          this.props.replaceTopPaidAppsIpad(data);
        }
      }
    });
  }

  loadAppBanners() {
    $.ajax({
      method: "GET",
      url: "/api/getAppBanners_iphone.json",
      success: (data, status, xhr) => {
        if (xhr.status === 200) {
          this.props.replaceAppBannersIphone(data);
        }
      }
    });
    $.ajax({
      method: "GET",
      url: "/api/getAppBanners_ipad.json",
      success: (data, status, xhr) => {
        if (xhr.status === 200) {
          this.props.replaceAppBannersIpad(data);
        }
      }
    });
  }

  loadCollectionBanners() {
    $.ajax({
      method: "GET",
      url: "/api/getCollectionBanners_iphone.json",
      success: (data, status, xhr) => {
        if (xhr.status === 200) {
          this.props.replaceCollectionBannersIphone(data);
        }
      }
    });
    $.ajax({
      method: "GET",
      url: "/api/getCollectionBanners_ipad.json",
      success: (data, status, xhr) => {
        if (xhr.status === 200) {
          this.props.replaceCollectionBannersIpad(data);
        }
      }
    });
  }

  render() {
    return (
      <Grid >
        <Grid.Row>
          <Grid.Column width={16}>
            <div className="header-toogle-button">
              <Button.Group>
                {
                  this.state.device === 'iphone'
                    ?
                    <Button onClick={this.setIphoneDevice.bind(this)} positive>IPhone</Button>
                    :
                    <Button  onClick={this.setIphoneDevice.bind(this)} >IPhone</Button>
                }

                <Button.Or text='or' />
                {
                  this.state.device === 'ipad'
                    ?
                    <Button  onClick={this.setIpadDevice.bind(this)} positive>IPad</Button>
                    :
                    <Button  onClick={this.setIpadDevice.bind(this)} >IPad</Button>
                }

              </Button.Group>
            </div>
            <MainBanners items={this.state.device === 'iphone' ? this.props.appBannersIphone : this.props.appBannersIpad}></MainBanners>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={13}>
            <Grid.Row>
              <Grid.Column >
                <Collections title={'Новое и интересное'} items={this.state.device === 'iphone' ? this.props.newAndInterestingIphone : this.props.newAndInterestingIpad}></Collections>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column >
                <Collections title={'Любителям классики'} items={this.state.device === 'iphone' ? this.props.loversOfClassicsIphone : this.props.loversOfClassicsIpad}></Collections>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column >
                <Collections title={'Вам может понравиться'} items={this.state.device === 'iphone' ? this.props.youMightLikeItIphone : this.props.youMightLikeItIpad}></Collections>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column >
                <CollectionBanners title={'Популярные коллекции'} items={this.state.device === 'iphone' ? this.props.collectionBannersIphone : this.props.collectionBannersIpad}></CollectionBanners>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column >
                <Collections title={'Фавориты прошлых недель'} items={this.state.device === 'iphone' ? this.props.favoritesOfLastWeeksIphone : this.props.favoritesOfLastWeeksIpad}></Collections>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={3}>
            <TopApps
              titlePaid={'Топ платных приложений'} itemsPaid={this.state.device === 'iphone' ? this.props.topPaidAppsIphone : this.props.topPaidAppsIpad}
              titleFree={'Топ бесплатных приложений'} itemsFree={this.state.device === 'iphone' ? this.props.topFreeAppsIphone : this.props.topFreeAppsIpad}
            >
            </TopApps>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(
  state => ({
    newAndInterestingIphone: state.newAndInterestingIphone,
    newAndInterestingIpad: state.newAndInterestingIpad,
    favoritesOfLastWeeksIphone: state.favoritesOfLastWeeksIphone,
    favoritesOfLastWeeksIpad: state.favoritesOfLastWeeksIpad,
    loversOfClassicsIphone: state.loversOfClassicsIphone,
    loversOfClassicsIpad: state.loversOfClassicsIpad,
    topFreeAppsIphone: state.topFreeAppsIphone,
    topFreeAppsIpad: state.topFreeAppsIpad,
    topPaidAppsIphone: state.topPaidAppsIphone,
    topPaidAppsIpad: state.topPaidAppsIpad,
    youMightLikeItIphone: state.youMightLikeItIphone,
    youMightLikeItIpad: state.youMightLikeItIpad,
    appBannersIphone: state.appBannersIphone,
    appBannersIpad: state.appBannersIpad,
    collectionBannersIphone: state.collectionBannersIphone,
    collectionBannersIpad: state.collectionBannersIpad
  }),
  dispatch => ({
    replaceNewAndInterestingIphone: list => {
      dispatch({ type: 'REPLACE_NEW_AND_INTERESTING_IPHONE', payload: list })
    },
    replaceNewAndInterestingIpad: list => {
      dispatch({ type: 'REPLACE_NEW_AND_INTERESTING_IPAD', payload: list })
    },
    replaceFavoritesOfLastWeeksIphone: list => {
      dispatch({ type: 'REPLACE_FAVORITES_OF_LAST_WEEKS_IPHONE', payload: list })
    },
    replaceFavoritesOfLastWeeksIpad: list => {
      dispatch({ type: 'REPLACE_FAVORITES_OF_LAST_WEEKS_IPAD', payload: list })
    },
    replaceLoversOfClassicsIphone: list => {
      dispatch({ type: 'REPLACE_LOVERS_OF_CLASSICS_IPHONE', payload: list })
    },
    replaceLoversOfClassicsIpad: list => {
      dispatch({ type: 'REPLACE_LOVERS_OF_CLASSICS_IPAD', payload: list })
    },
    replaceTopFreeAppsIphone: list => {
      dispatch({ type: 'REPLACE_TOP_FREE_APPS_IPHONE', payload: list })
    },
    replaceTopFreeAppsIpad: list => {
      dispatch({ type: 'REPLACE_TOP_FREE_APPS_IPAD', payload: list })
    },
    replaceTopPaidAppsIphone: list => {
      dispatch({ type: 'REPLACE_TOP_PAID_APPS_IPHONE', payload: list })
    },
    replaceTopPaidAppsIpad: list => {
      dispatch({ type: 'REPLACE_TOP_PAID_APPS_IPAD', payload: list })
    },
    replaceYouMightLikeItIphone: list => {
      dispatch({ type: 'REPLACE_YOU_MIGHT_LIKE_IT_IPHONE', payload: list })
    },
    replaceYouMightLikeItIpad: list => {
      dispatch({ type: 'REPLACE_YOU_MIGHT_LIKE_IT_IPAD', payload: list })
    },
    replaceAppBannersIphone: list => {
      dispatch({ type: 'REPLACE_APP_BANNERS_IPHONE', payload: list })
    },
    replaceAppBannersIpad: list => {
      dispatch({ type: 'REPLACE_APP_BANNERS_IPAD', payload: list })
    },
    replaceCollectionBannersIphone: list => {
      dispatch({ type: 'REPLACE_COLLECTION_BANNERS_IPHONE', payload: list })
    },
    replaceCollectionBannersIpad: list => {
      dispatch({ type: 'REPLACE_COLLECTION_BANNERS_IPAD', payload: list })
    }
  })
)(AppStoreCnt);