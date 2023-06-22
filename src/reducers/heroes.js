// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
// }

// const heroes = (state = initialState, action) => {
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

// export default heroes;