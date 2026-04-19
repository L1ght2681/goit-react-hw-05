import { Card, Image, Stats } from './RecipeCard.styled';
import { Difficulty } from '../Difficulty/Difficulty';

export const RecipeCard = ({ recipe: { title, difficulty, time, calories, image } }) => {
  return (
    <Card $isHighDifficulty={difficulty === 3}>
      <Image src={image} alt={name} />
      <h3>{title}</h3>
      <Stats>
        <span>⏱ {time} min</span>
        <span>🔥 {calories} kcal</span>
      </Stats>
      <Difficulty level={difficulty} />
    </Card>
  );
};
