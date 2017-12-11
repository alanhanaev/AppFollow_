import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import newAndInterestingIphone from './newAndInterestingIphone';
import favoritesOfLastWeeksIphone from './favoritesOfLastWeeksIphone';
import loversOfClassicsIphone from './loversOfClassicsIphone';
import topFreeAppsIphone from './topFreeAppsIphone';
import topPaidAppsIphone from './topPaidAppsIphone';
import youMightLikeItIphone from './youMightLikeItIphone';
import appBannersIphone from './appBannersIphone';
import collectionBannersIphone from './collectionBannersIphone';

import newAndInterestingIpad from './newAndInterestingIpad';
import favoritesOfLastWeeksIpad from './favoritesOfLastWeeksIpad';
import loversOfClassicsIpad from './loversOfClassicsIpad';
import topFreeAppsIpad from './topFreeAppsIpad';
import topPaidAppsIpad from './topPaidAppsIpad';
import youMightLikeItIpad from './youMightLikeItIpad';
import appBannersIpad from './appBannersIpad';
import collectionBannersIpad from './collectionBannersIpad';


export default combineReducers({
    routing: routerReducer,
    newAndInterestingIphone,
    favoritesOfLastWeeksIphone,
    loversOfClassicsIphone,
    topFreeAppsIphone,
    topPaidAppsIphone,
    youMightLikeItIphone,
    newAndInterestingIpad,
    favoritesOfLastWeeksIpad,
    loversOfClassicsIpad,
    topFreeAppsIpad,
    topPaidAppsIpad,
    youMightLikeItIpad,
    appBannersIphone,
    collectionBannersIphone,
    appBannersIpad,
    collectionBannersIpad
})