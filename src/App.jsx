import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { RecipeCard } from './components/RecipeCard/RecipeCard';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px;
  justify-content: center;
`;




const recipes = [
  {
    id: 1,
    title: "Smoked salmon burger",
    time: 20,
    servings: 6,
    calories: 210,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    difficulty: 0,
  },
  {
    id: 2,
    title: "Tomatoes With Creamy Feta",
    time: 15,
    servings: 3,
    calories: 600,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    difficulty: 0,
  },
  {
    id: 3,
    title: "Spicy potato salad",
    time: 30,
    servings: 2,
    calories: 320,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    difficulty: 1,
  },
  {
    id: 4,
    title: "Chicken Biryani",
    time: 40,
    servings: 4,
    calories: 700,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    difficulty: 3,
  },
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Container>
    </ThemeProvider>
  );
}
