import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 15px;
`;

export const Badge = styled.span`
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 600;
  border: 1px solid #ddd;
  
  background-color: ${({ $active, $level, theme }) => {
    if (!$active) return theme.colors.white;
    if ($level === 0) return theme.colors.easy;
    if ($level === 1) return theme.colors.medium;
    if ($level === 3) return theme.colors.hard;
    return theme.colors.white;
  }};

  color: ${({ $active, theme }) => ($active ? theme.colors.white : theme.colors.text)};
`;
