import style from './style.module.css';

export function Pagination({ isNumberPage }) {
    
    return (
        <div className={style.container}>
{
        [1, 2, 3].map((number) => (
            <button
                key={number}
                id={number}
                className={style.button}
                type="button"
                onClick={() => isNumberPage(number)}
            >{number}
            </button>
        ))
    }
        </div>
    )
    
}