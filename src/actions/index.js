import {heroesFetching, heroesFetchingError, heroesFetched} from "../reducers/heroSlice";
import {filtersFetched, filterError, filtersFetching} from "../reducers/filterSlice";
//
// export const fetchHeroes = (request) => (dispatch) => {
//     dispatch(heroesFetching());
//     request("http://localhost:3001/heroes")
//         .then(data => dispatch(heroesFetched(data)))
//         .catch(() => dispatch(heroesFetchingError()))
// }

export const fetchFilters = (request) => (dispatch) => {
    dispatch(filtersFetching());
    request("http://localhost:3001/filters")
        .then(data => dispatch(filtersFetched(data)))
        .catch(() => dispatch(filterError()))
}

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING'
//     }
// }
//
// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }
//
// export const heroesFetchingError = () => {
//     return {
//         type: 'HEROES_FETCHING_ERROR'
//     }
// }




// export const filtersFetching = () => {
//     return {
//         type: 'FILTERS_FETCHING'
//     }
// }
//
// export const filtersFetched = (filter) => {
//     return {
//         type: 'FILTERS_FETCHED',
//         payload: filter,
//     }
// }

// export const filterError = () => {
//     return {
//         type: 'FILTERS_ERROR'
//     }
// }
//
// export const activeFilterChanged = (filter) => {
//     return {
//         type: 'ACTIVE_FILTER_CHANGED',
//         payload: filter
//     }
// }








// export const heroDelete = (id) => {
//     return {
//         type: 'HERO_DELETE',
//         payload: id
//     }
// }
//
// export const newHero = (arr) => {
//     return {
//         type: 'NEW_HERO',
//         payload: arr
//     }
// }