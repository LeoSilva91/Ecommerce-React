import Button from "../button/Button";
import Promotion from "../promotion/Promotion";
import "./Card.scss"

const Card = (props: {promoText: string, title: string, src: string, textButton: string, styleButton: string}) => {
    return(
        <div className="flex gap-4 bg-bgCard card items-center">
            <div className="px-5 flex flex-col gap-2 info">
                <Promotion promoText={props.promoText}/>
                <p className="font-bold text-darkGray text-[32px] w-[172px]">{props.title}</p>
                <Button text={props.textButton} styleButton={props.styleButton}></Button>
            </div>
            <div className="image">
                <img src={props.src} alt="Imagem do card" />
            </div>
        </div>
    )
}

export default Card;