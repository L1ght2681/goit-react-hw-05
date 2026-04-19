import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  width: 280px;
  border: 1px solid #eee;
  
  /* Визуальное выделение сложного рецепта (п. 4 задания) */
  ${({ $isHighDifficulty, theme }) => $isHighDifficulty && `
    border: 2px solid ${theme.colors.hard};
    box-shadow: 0 4px 15px rgba(244, 67, 54, 0.2);
    transform: scale(1.02);
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const Stats = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;
