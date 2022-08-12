import style from "./input.module.scss";

const Input = (props) => {
  return (
    <div>
      <label htmlFor="" className={style.label}>
        {props.label}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={style.input}
      />
    </div>
  );
};
export default Input;
