import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 'header' 'content';

  > main {
    grid-area: content;

    padding: 0 16px;

    margin: 40px 130px 56px;

    > div:nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-right: 20px;

      > button {
        display: flex;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

    a {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.PINK};

      svg {
        margin-right: 8px;
      }
    }

    > div:nth-child(2) {
      display: flex;
      align-items: center;

      margin: 24px 0;

      h1 {
        font-weight: 500;
        margin-right: 19px;

        font-size: 36px;

        color: ${({ theme }) => theme.COLORS.TITLE};
      }

      svg {
        width: 20px;
        height: 20px;

        margin-right: 10px;
        margin-top: 12px;
      }
    }

    > div:nth-child(3) {
      display: flex;
      align-items: center;

      > img {
        width: 25px;
        height: 25px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 8px;

        border: ${({ theme }) => theme.COLORS.BORDER};
      }

      > svg {
        margin: 0 8px 0 16px;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

    > div:nth-child(4) {
      margin: 40px 0;
      > span {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      }
    }

    > div:nth-child(5) {
      max-width: 1366px;

      height: 45vh;
      padding: 1rem;

      overflow-y: auto;

      p {
        word-wrap: break-word;
        text-align: justify;
      }
    }
  }
`
