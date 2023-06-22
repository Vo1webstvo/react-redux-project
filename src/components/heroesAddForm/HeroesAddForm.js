import {useState} from "react";
import { newHero} from "../../reducers/heroSlice";
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useHttp } from "../../hooks/http.hook";

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const dispatch = useDispatch();
    const {request} = useHttp();
    const {filters, filterLoadingStatus} = useSelector(state => state.filters)


    const [nameHero, setname] = useState('');
    const [descr, setDescr] = useState('');
    const [elem, setElem] = useState('fire');

    const onName = (e) => {
        const value = e.target.value;
        setname(value)
    }

    const onDescr = (e) => {
        const value = e.target.value;
        setDescr(value);
    }

    const onElement = (e) => {
        const value = e.target.value;
        setElem(value)
    }
    const addToFormNewHeroes = (e) => {
        e.preventDefault();
        const newHeroes = {
            id: uuidv4(),
            name: nameHero,
            description: descr,
            element: elem,
        };

        request('http://localhost:3001/heroes', 'POST', JSON.stringify(newHeroes))
        .then(dispatch(newHero(newHeroes)))
        .catch(err => console.log(err))
        setname('');
        setDescr('');
        setElem('');
        // dispatch(newHero(newHeroes)) // будет добавляться до обновления браузера, потом слетит
    }

    const renderFiltres = (filtres, status) => {
        if(status === 'loading') {
            return <option>Загрузка элементов</option>
        } else if (status === "error") {
            return <option>Ошибка</option>  
        }

        if(filtres && filtres.length > 0) {
            return filtres.map(({name, label}) => {
                if(name === 'all') return;

                return <option key={name} value={name}>{label}</option>
            })
        }
    }

    return (
        <form onSubmit={addToFormNewHeroes} className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name"
                    value={nameHero}
                    onChange={onName}
                    placeholder="Как меня зовут?"/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text"
                    value={descr}
                    onChange={onDescr}
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={elem}
                onChange={onElement}>
                    {renderFiltres(filters, filterLoadingStatus)}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;