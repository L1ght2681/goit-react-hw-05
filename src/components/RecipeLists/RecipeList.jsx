import { RecipeCard } from '../RecipeCard/RecipeCard';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  list-style: none;
  justify-content: center;
`;

export const RecipeList = ({ items }) => {
  return (
    <List>
      {items.map((recipe, index) => (
        <li key={index}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </List>
  );
};
