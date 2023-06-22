import {useHttp} from '../../hooks/http.hook';
import {useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {createSelector} from "reselect";

// import {fetchHeroes} from '../../actions';
import {fetchHeroes} from "../../reducers/heroSlice";
import {heroDelete} from "../../reducers/heroSlice";
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
    const filteredSelector = createSelector(        //функция для мемоизации
        (state) => state.filters.activeFilter,
        (state) => state.heroes.heroes,
        (filter, heroes) => {
            if(filter === 'all') {
                return heroes;
            } else {
                return heroes.filter(item => item.element === filter)
            }
        }
    )

    const filteredHeroes = useSelector(filteredSelector);
    const heroesLoadingStatus = useSelector(state => state.heroes.heroesLoadingStatus);
    const dispatch = useDispatch();
    const {request} = useHttp();


    //было
    // useEffect(() => {
    //     dispatch(heroesFetching());
    //     request("http://localhost:3001/heroes")
    //         .then(data => dispatch(heroesFetched(data)))
    //         .catch(() => dispatch(heroesFetchingError()))
    //
    //     // eslint-disable-next-line
    // }, []);

    //стало!!!
    useEffect(() => {
        dispatch(fetchHeroes());
    }, []);

    const onDelete = useCallback((id) => {
        request(`http://localhost:3001/heroes/${id}`, "DELETE")
            .then(dispatch(heroDelete(id)))
            .catch(err => console.log(err));
        // dispatch(heroDelete(id))
        // eslint-disable-next-line
    },[request]);

    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }




    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(({id, ...props}) => {
            return <HeroesListItem
                key={id} {...props}
                onDelete={() => onDelete(id)}

            />
        })
    }

    const elements = renderHeroesList(filteredHeroes);  // чтоб фильтры работали, нжно одавать ОТФИЛЬТРОВАНННЫЙ МАССИВ а НЕ ЧИСТЫЙ!!!!1
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;