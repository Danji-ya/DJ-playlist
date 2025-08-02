import { expect, Page } from '@playwright/test';

export class SearchPage {
  constructor(private page: Page) {}

  async setupWithMusic(searchTerm: string) {
    await this.page.goto('/');

    await this.page.getByRole('link', { name: 'Search' }).click();

    const searchInput = this.page.getByRole('textbox', {
      name: 'Search for songs, albums, and artists',
    });
    await searchInput.fill(searchTerm);
    await searchInput.press('Enter');

    await expect(
      this.page.getByRole('button', { name: 'music play' }).first(),
    ).toBeVisible();
  }

  async loadFirstMusic() {
    const firstPlayButton = this.page
      .getByRole('button', { name: 'music play' })
      .first();
    await firstPlayButton.click();

    await expect(
      this.page.getByRole('article').filter({ hasText: 'Player' }),
    ).toBeVisible();

    await expect(this.page.getByText('No music is playing')).not.toBeVisible();
  }

  async clickPause() {
    const playerContainer = this.page
      .getByRole('article')
      .filter({ hasText: 'Player' });
    await playerContainer
      .getByRole('button', { name: 'pause', exact: true })
      .click();
  }

  async clickPlay() {
    const playerContainer = this.page
      .getByRole('article')
      .filter({ hasText: 'Player' });
    await playerContainer
      .getByRole('button', { name: 'play', exact: true })
      .click();
  }

  async verifyMusicIsPlaying() {
    await expect(this.page.getByText('No music is playing')).not.toBeVisible();
  }

  async verifyPauseButtonVisible() {
    const playerContainer = this.page
      .getByRole('article')
      .filter({ hasText: 'Player' });
    await expect(
      playerContainer.getByRole('button', { name: 'pause', exact: true }),
    ).toBeVisible();
  }

  async verifyPlayButtonVisible() {
    const playerContainer = this.page
      .getByRole('article')
      .filter({ hasText: 'Player' });
    await expect(
      playerContainer.getByRole('button', { name: 'play', exact: true }),
    ).toBeVisible();
  }
}
