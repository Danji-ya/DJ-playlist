import { expect, Page } from '@playwright/test';

export class SearchPage {
  constructor(private page: Page) {}

  async setupWithMusic(searchTerm: string) {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');

    const searchLink = this.page.locator('a[href="/search"]');
    await searchLink.click();
    await this.page.waitForLoadState('networkidle');

    const searchInput = this.page.locator('[data-testid="search-input"]');
    await searchInput.fill(searchTerm);
    await searchInput.press('Enter');

    await this.page.waitForSelector('[data-testid="search-result"]', {
      timeout: 10000,
    });
  }

  async loadFirstMusic() {
    const firstResult = this.page
      .locator('[data-testid="search-result"] li')
      .first();
    const thumbnail = firstResult.locator('button').first();
    await thumbnail.click();

    await this.page.waitForSelector('[data-testid="player"]', {
      timeout: 10000,
    });
    await this.page.waitForTimeout(3000);
  }

  async clickPause() {
    const pauseButton = this.page.locator('[data-testid="pause-button"]');
    await pauseButton.click();
  }

  async verifyMusicIsPlaying() {
    const emptyMessage = this.page.locator('text=No music is playing');
    await expect(emptyMessage).not.toBeVisible({ timeout: 5000 });
  }

  async verifyPauseButtonVisible() {
    const pauseButton = this.page.locator('[data-testid="pause-button"]');
    await expect(pauseButton).toBeVisible({ timeout: 10000 });
  }

  async verifyPlayButtonVisible() {
    const playButton = this.page.locator('[data-testid="play-button"]');
    await expect(playButton).toBeVisible({ timeout: 10000 });
  }
}
