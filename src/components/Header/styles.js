import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 116px;

  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER};

  display: flex;
  justify-content: space-between;

  padding: 24px 150px;

  header a,
  h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 16px;
    line-height: 24px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 14px;
      font-weight: 700;
      line-height: 18px;

      text-decoration: none;
    }
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY};
    margin-left: 115px;
  }

  strong {
    font-size: 14px;
    margin-left: 18px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
