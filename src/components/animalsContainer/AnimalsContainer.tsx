import animals from '../../data/data';
import AnimalCard from '../animalCard/AnimalCard';
import './AnimalsContainer.css';
const AnimalsContainer = () => {
    return (  
        <section className="animals__container">
            {animals.map((animal, index) => (
                <AnimalCard key={index} animal={animal}/>
            ))}
        </section>
    );
}

export default AnimalsContainer;