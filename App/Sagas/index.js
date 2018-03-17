import { takeLatest, all } from "redux-saga/effects";
import API from "../Services/Api";
import FixtureAPI from "../Services/FixtureApi";
import DebugConfig from "../Config/DebugConfig";

/*-------------- ACTION --------------*/
import { FetchType, FetchFunction } from "../Containers/Fetch/Fetch.Action";
import FetchApi from "../Containers/Fetch/Fetch.Api";

import { ListType, ListFunction } from "../Containers/List/List.Action";
import ListApi from "../Containers/List/List.Api";

/* ------------- Types ------------- */

import { StartupTypes } from "../Redux/StartupRedux";
import { GithubTypes } from "../Redux/GithubRedux";

/* ------------- Sagas ------------- */

import { startup } from "./StartupSagas";
import { getUserAvatar } from "./GithubSagas";

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    // takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    // takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)

    takeLatest(
      FetchType.USER_REQUEST,
      FetchFunction.getUser,
      FetchApi.create()
    ),

    takeLatest(
      FetchType.LOCAL_REQUEST,
      FetchFunction.getDataLocal,
      FetchApi.create()
    ),

    takeLatest(ListType.SITE, ListFunction.getList, ListApi.create())
  ]);
}
