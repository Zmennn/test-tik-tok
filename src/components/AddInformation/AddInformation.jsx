import style from './style.module.css';

export function AddInformation({comments,likes,id}) {
    return (<div
    key={id}
    >
        <div>{comments}</div>
        <div>{likes }</div>
    </div>)
}