import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

  border: 0;
  border-radius: 16px;

  padding: 32px;

  margin-bottom: 24px;

  > h2 {
    flex: 1;
    font-size: 24px;
    font-weight: 700;
    text-align: left;

    margin: 8px 0 8px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > svg {
    margin-bottom: 15px;
  }

  > span {
    margin-top: 15px;
  }

  > p {
    width: 100%;
    text-align: justify;
    overflow: hidden;

    text-overflow: ellipsis;

    margin-top: 15px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > footer {
    width: 100%;
    display: flex;

    margin-top: 15px;
  }
`
