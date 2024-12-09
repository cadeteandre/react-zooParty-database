import { Animal } from "../../data/data";
import './AnimalCard.css';

interface IAnimal {
    animal: Animal
}

const AnimalCard: React.FC<IAnimal> = (props) => {
    return (  
        <article className="animal__card">
            <div className="animal__data">
                <div className="animal__img">{props.animal.emoji}</div>
                <h2>{props.animal.name}</h2>
                <h4>{props.animal.species}</h4>
                <h4>{props.animal.habitat}</h4>
                <h4>{props.animal.diet}</h4>
                <h4>{props.animal.lifespan}</h4>
            </div>
            <div className="animal__funfacts">
                <ul>
                {props.animal.funFacts.map((funFact, index) => (
                    <li key={index}>{funFact}</li>
                ))}
                </ul>
            </div>
        </article>
    );
}

export default AnimalCard;