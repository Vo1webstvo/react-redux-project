// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
//     filters: [],
//     filterLoadingStatus: 'idle',
//     activeFilter: 'all',        //наши кнопки все, огонь, вода и т.д. изначально включено на все - all
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload, //записали в heroes наш массив с обьектами персонажей
//                 heroesLoadingStatus: 'idle',
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'FILTERS_FETCHING':
//             return {
//                 ...state,
//                 filterLoadingStatus: 'loading'
//             }
//         case 'FILTERS_FETCHED':
//             return {
//                 ...state,
//                 filters: action.payload,
//                 filterLoadingStatus: 'idle'
//         }
//         case 'FILTERS_ERROR':
//             return {
//                 ...state,
//                 filterLoadingStatus: 'error'
//             }
//         case 'ACTIVE_FILTER_CHANGED':
//             return {
//                 ...state,
//                 activeFilter: action.payload,           // сюда придет при клике на кнопку ее элемент name
//             }
//         case 'HERO_DELETE':
//             return {
//                 ...state,
//                 heroes: state.heroes.filter(item => item.id !== action.payload)
//             }
//         case 'NEW_HERO':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload]
//             }

//         default: return state
//     }
// }

// export default reducer;