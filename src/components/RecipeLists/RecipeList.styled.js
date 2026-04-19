import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  width: 260px;
  display: flex;
  flex-direction: column;
  
 
  border: ${props => props.isHard ? '2px solid #ff4d4d' : '1px solid #eee'};
`;

export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 12px;
  text-align: center;
`;

export const Title = styled.h3`
  margin: 0 0 12px 0;
  font-size: 16px;
  text-transform: capitalize;
`;

export const InfoList = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f0f0f0;
  padding-top: 12px;
  margin-bottom: 12px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #666;

  svg { color: #888; }
`;
