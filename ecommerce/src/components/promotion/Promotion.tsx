const Promotion = (props: {promoText: string}) => {
    return(
        <p className="font-bold bg-yellowLight text-center px-2 py-1 w-[96px] rounded-2xl">{props.promoText}</p>
    )
}

export default Promotion;