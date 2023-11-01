import style from "../css/yourStyle.module.css";

export function MyBlcok() {
  return (
    <div>
      <h1 className={`${style.error} ${style.special} ${style.coffee}`}>
        Lorem ipsum dolor sit amet.
      </h1>
      <h1 className={[style.error, style.special, style.coffee].join(" ")}>
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
  );
}
