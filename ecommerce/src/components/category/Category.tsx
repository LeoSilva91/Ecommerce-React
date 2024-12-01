const Category = (props: {src: string, text: string}) => {
    return(
        <div className="flex flex-col gap-2 items-center">
            <div className="rounded-full bg-white w-[104px] h-[104px] flex items-center justify-center">
                <img src={props.src} alt="imagem da categoria" />
            </div>
            <p className="text-darkGrey2 font-bold ">{props.text}</p>
        </div>
    )
}

export default Category;