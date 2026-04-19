import { Wrapper, Badge } from './Difficulty.styled';

export const Difficulty = ({ level }) => {
  return (
    <Wrapper>
      <b>Difficulty</b>
      <Badge $level={0} $active={level === 0}>Easy</Badge>
      <Badge $level={1} $active={level === 1}>Medium</Badge>
      <Badge $level={3} $active={level === 3}>Hard</Badge>
    </Wrapper>
  );
};
