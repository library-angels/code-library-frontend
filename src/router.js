import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './routes';
import { TopPage } from './components/Navigation';
import {
    Dashboard,
    Account,
    Category,
    Logout,
    Login,
    SearchPage,
} from './pages';
import AuthRoute from './components/AuthRoute';
import { useLoginSelector } from './hooks/login';
import { UseUserDetails } from './hooks/user';
import {
    useSearchSelector,
    useSearchDispatch,
    useSearchSelectedOptionDispatch,
    useSearchPubFilterDispatch,
} from './hooks/search';

import { useDashboardHeightDispatch } from './hooks/books';

export default function Router() {
    const {
        selectedOptions,
        submitSelectedOption,
        toggleObjects,
    } = useSearchSelectedOptionDispatch();

    const { changePageHeight, pageHeight } = useDashboardHeightDispatch();
    const { accessToken } = useLoginSelector();
    const { picture } = UseUserDetails();
    const { setInput } = useSearchDispatch();

    const { updatePublisherFilter } = useSearchPubFilterDispatch();
    const {
        publisherInputTerm,
        searchDetails,
        selectedFilterOptions,
        submitedFilterOption,
    } = useSearchSelector();
    const filterPublisherInput = e => {
        e.preventDefault();
        const searchedTerm = e.target.value;
        updatePublisherFilter(searchedTerm);
    };

    const filteredOptions = (value, option) => {
        selectedOptions(value, option);
    };

    const filterModalBackground = value => {
        if (value) {
            const HTMLheight = document.getElementsByTagName('html')[0]
                .scrollHeight;
            changePageHeight(`${HTMLheight}px`);
        } else {
            changePageHeight('0px');
        }
    };
    useEffect(() => {
        filterModalBackground(false);
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <BrowserRouter>
                {accessToken ? (
                    <TopPage
                        src={picture}
                        onSearchInput={setInput}
                        searchDetails={searchDetails}
                        filteredOptions={filteredOptions}
                        filterPublisherInput={filterPublisherInput}
                        selectedFilterOptions={selectedFilterOptions}
                        filterModalBackground={filterModalBackground}
                        publisherInputTerm={publisherInputTerm}
                        pageHeight={pageHeight}
                        submitSelectedOption={submitSelectedOption}
                        submitedFilterOption={submitedFilterOption}
                        toggleObjects={toggleObjects}
                    />
                ) : null}
                <Switch>
                    <AuthRoute exact path={Routes.Dashboard}>
                        <Dashboard />
                    </AuthRoute>
                    <AuthRoute exact path={Routes.Account}>
                        <Account />
                    </AuthRoute>
                    <AuthRoute path={Routes.Category}>
                        <Category />
                    </AuthRoute>
                    <AuthRoute exact path={Routes.SearchPage}>
                        <SearchPage />
                    </AuthRoute>
                    <AuthRoute path={Routes.Logout}>
                        <Logout />
                    </AuthRoute>
                    <Route path={Routes.Login}>
                        <Login />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}
