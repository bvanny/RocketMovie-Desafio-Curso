import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 'header' 'content';
`

export const Form = styled.form`
  > div {
    margin: 40px 140px;
    /* padding: 1rem; */

    grid-area: 'header';

    button {
      display: flex;
      align-items: center;

      margin-bottom: 24px;

      color: ${({ theme }) => theme.COLORS.PINK};

      > svg {
        margin-right: 8px;
      }
    }

    h1 {
      font-size: 36px;
      margin-bottom: 40px;
    }
  }

  main {
    grid-area: content;
    /* width: 1137px; */
    height: 57vh;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    overflow-y: auto;
    margin: 0 130px;

    > div:nth-child(1) {
      display: flex;
      width: 100%;
      justify-content: space-between;

      margin-bottom: 40px;
    }

    textarea {
      min-height: 274px;
      padding: 19px 16px;
    }

    > .btns {
      width: 100%;
      display: flex;
      gap: 40px;

      button:nth-child(1) {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }

  .tags {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    border-radius: 10px;

    padding: 16px;
    margin: 24px 0 40px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
  }

  h2 {
    font-size: 20px;
    margin-top: 40px;
  }
`
