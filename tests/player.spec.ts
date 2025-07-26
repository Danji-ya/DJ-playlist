import { test } from '@playwright/test';
import { SearchPage } from './pages/SearchPage';

test.describe('미디어 플레이어 기능 테스트', () => {
  let searchPage: SearchPage;

  test.beforeEach(async ({ page }) => {
    searchPage = new SearchPage(page);
  });

  test('음악 재생 시 일시정지 버튼이 표시되어야 함', async () => {
    await searchPage.setupWithMusic('BTS');
    await searchPage.loadFirstMusic();

    await searchPage.verifyPauseButtonVisible();
  });

  test('일시정지 후 재생 버튼이 표시되어야 함', async () => {
    await searchPage.setupWithMusic('BTS');
    await searchPage.loadFirstMusic();

    await searchPage.clickPause();

    await searchPage.verifyPlayButtonVisible();
  });
});
