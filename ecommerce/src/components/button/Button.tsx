const Button = (props: {text: string, styleButton: string}) => {
    return(
        <button className={props.styleButton}>
            {props.text}
        </button>
    )
}

export default Button;