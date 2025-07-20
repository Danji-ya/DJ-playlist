import { expect, Page } from '@playwright/test';
import { testId, toTestIdSelector } from '@constants/testId';

export class SearchPage {
  constructor(private page: Page) {}

  async setupWithMusic(searchTerm: string) {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');

    const searchLink = this.page.locator('a[href="/search"]');
    await searchLink.click();
    await this.page.waitForLoadState('networkidle');

    const searchInput = this.page.locator(
      toTestIdSelector(testId.search.input),
    );
    await searchInput.fill(searchTerm);
    await searchInput.press('Enter');

    await this.page.waitForSelector(toTestIdSelector(testId.search.result), {
      timeout: 10000,
    });
  }

  async loadFirstMusic() {
    const firstResult = this.page
      .locator(`${toTestIdSelector(testId.search.result)} li`)
      .first();
    const thumbnail = firstResult.locator('button').first();
    await thumbnail.click();

    await this.page.waitForSelector(toTestIdSelector(testId.player.container), {
      timeout: 10000,
    });
    await this.page.waitForTimeout(3000);
  }

  async clickPause() {
    const pauseButton = this.page.locator(
      toTestIdSelector(testId.player.pauseButton),
    );
    await pauseButton.click();
  }

  async verifyMusicIsPlaying() {
    const emptyMessage = this.page.locator('text=No music is playing');
    await expect(emptyMessage).not.toBeVisible({ timeout: 5000 });
  }

  async verifyPauseButtonVisible() {
    const pauseButton = this.page.locator(
      toTestIdSelector(testId.player.pauseButton),
    );
    await expect(pauseButton).toBeVisible({ timeout: 10000 });
  }

  async verifyPlayButtonVisible() {
    const playButton = this.page.locator(
      toTestIdSelector(testId.player.playButton),
    );
    await expect(playButton).toBeVisible({ timeout: 10000 });
  }
}
