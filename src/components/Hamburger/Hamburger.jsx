import style from './Hamburger.module.css';

export function Hamburger(props) {
    return (
        <div className={style.Main} onClick={props.onClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}