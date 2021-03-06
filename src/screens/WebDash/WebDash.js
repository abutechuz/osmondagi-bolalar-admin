import React from 'react'
import { Route, Switch } from 'react-router-dom'
import WebNav from '../../components/WebNav/WebNav'

import WebDashIntro from '../../components/WebDashIntro/WebDashIntro'
import Team from '../../components/Team/Team.js'
import Categories from '../../components/Categories/Categotires'
import Products from '../../components/Products/Products'
import WebOffers from '../../components/WebOffers/WebOffers.js'
import Stores from '../../components/Stores/Stores.js'
import Orders from '../../components/Orders/Orders.js'
import './WebDash.scss'

function WebDash() {
    return (
        <section className='webdash-wrapper stats'>
            <div className='webdash-content'>
                <Switch>
                    <Route path='/webdash' component={Orders} exact />
                    <Route
                        path='/webdash/videos'
                        component={WebDashIntro}
                        exact
                    />
                    <Route path='/webdash/team' component={Team} exact />
                    <Route
                        path='/webdash/categories'
                        component={Categories}
                        exact
                    />
                    <Route
                        path='/webdash/products'
                        component={Products}
                        exact
                    />
                    <Route path='/webdash/weboffers' component={WebOffers} exact />
                    <Route path='/webdash/stores' component={Stores} exact />
                </Switch>
            </div>

            <WebNav />
        </section>
    )
}

export default WebDash
