import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    header: string;
    body: string;
    bodySecondary: string;
    border: string;
    text: string;
    toggleBorder: string;
    gradient: string;

    /* nav */
    navTextPrimary: string;
    navTextSecondary: string;
    navBtn: string;

    /* player */
    playerBg: string;
    playerMainColor: string;
    playerSubColor: string;
    playerBtnBg: string;
    playerBtn: string;
    playerMainBtn: string;
    playerSoundBtn: string;

    /* card */
    cardBg: string;

    /* searchForm */
    searchBtn: string;

    /* skeleton */
    skeletonBg: string;
    skeletonLoading: string;

    sameColor: string;
    converseColor: string;
  }
}
