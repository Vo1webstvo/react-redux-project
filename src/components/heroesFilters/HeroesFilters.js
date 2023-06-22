import classNames from "classnames";
import { useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";
import { useSelector, useDispatch } from "react-redux";
import {fetchFilters} from '../../actions/index'
import {activeFilterChanged} from "../../reducers/filterSlice";
import Spinner from "../spinner/Spinner";
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
    const {filters, filterLoadingStatus, activeFilter} = useSelector(state => state.filters);
    const {request} = useHttp();
    const dispatch = useDispatch();


    //БЫЛО
    // useEffect(() => {
    //     dispatch(filtersFetching());
    //     request('http://localhost:3001/filters')
    //     .then(data => dispatch(filtersFetched(data)))
    //     .catch(() =>dispatch(filterError()))
    // }, []);

    //СТАЛО!!
    useEffect(() => {
        dispatch(fetchFilters(request));
    }, []);


   

    if(filterLoadingStatus === 'loading') {
        return <Spinner/>
    } else if (filterLoadingStatus === 'error') {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderFilter = (arr) => {
        if(arr.length === 0) {
            return <h5 className="text-center mt-5">Фильтры не найдены</h5>
        }
        return arr.map(({name, label, className}) => {
            const btnClass = classNames('btn', className, {
                'active': name === activeFilter,
            });
            
            return <button 
                        key={name} 
                        id={name} 
                        className={btnClass}
                        onClick={() => dispatch(activeFilterChanged(name))}
                        >{label}</button>
        })
    }

    const elements = renderFilter(filters);

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;