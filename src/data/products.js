import NewRelease2Better from '../Assets/img/NewRelease2Better.png';
import Creatine from '../Assets/img/Creatine.png';
import AdjustableDBSet from '../Assets/img/AdjustableDBSet.png';
import PreWorkout from '../Assets/img/PreWorkout.png';

export const products = [
    {
      id: 1,
      name: "Premium Whey Protein",
      description: "30 servings, Chocolate",
      price: 49.99,
      oldPrice: 59.99,
      image: NewRelease2Better,
      sale: true,
      reviewCount: 120,
      rating: 4.3
    },
    {
      id: 2,
      name: "Creatine Monohydrate",
      description: "60 servings, Unflavored",
      price: 29.99,
      oldPrice: 34.99,
      image: Creatine,
      sale: true,
      reviewCount: 85,
      rating: 5
    },
    {
      id: 3,
      name: "Adjustable Dumbbell Set",
      description: "5-25kg, Professional Grade",
      price: 199.99,
      image: AdjustableDBSet,
      sale: false,
      reviewCount: 64,
      rating: 4.4
    },
    {
      id: 4,
      name: "Pre-Workout Formula",
      description: "20 servings, Berry Blast",
      price: 39.99,
      oldPrice: 44.99,
      image: PreWorkout,
      sale: true,
      reviewCount: 106,
      rating: 5
    }
];