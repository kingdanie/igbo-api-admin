import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as reactAdmin from 'react-admin';
import App from '../App';

jest.mock('firebase/firestore');
jest.mock('src/shared/DataCollectionAPI');
jest.mock('src/Core/Dashboard/network');

describe('App', () => {
  beforeEach(() => {
    jest.spyOn(reactAdmin, 'usePermissions').mockReturnValue({ role: 'admin' });
  });

  it('render the profile user menu', async () => {
    const { findByLabelText, findByText } = render(<App />);
    userEvent.click(await findByLabelText('Profile'));
    await findByText('Profile');
    await findByText('Contact the team');
    await findByText('Report a bug');
    await findByText('Request a feature');
  });

  it('render the notifications bar', async () => {
    const { findByText, findAllByText } = render(<App />);
    await findAllByText('🔔');
    await findByText('0 new notifications');
    await findByText('No new notifications');
  });
  it('render the Igbo API Editor Platform with admin role', async () => {
    const { queryByText, findByText, findAllByText } = render(<App />);

    await findAllByText('Dashboard');
    await findByText('Words');
    await findByText('Examples');
    await findByText('Nsịbịdị Characters');
    await findByText('Corpora');
    await findByText('Word Suggestions');
    await findByText('Example Suggestions');
    await findByText('Corpus Suggestions');
    await findByText('Platform Notifications');
    await findByText('Constructed Term Polls');
    await findByText('Users');
    await findByText('Data Dump');
    await findByText('Leaderboard');
    await findByText('Igbo Soundbox');
    await findByText('Igbo Definitions');
    expect(await queryByText('Profile')).toBeNull();

    expect(await queryByText('Loading the page, please wait a moment')).toBeNull();
  });
  it('render the Igbo API Editor Platform with merger role', async () => {
    jest.spyOn(reactAdmin, 'usePermissions').mockReturnValue({ role: 'merger' });
    const { queryByText, findByText, findAllByText } = render(<App />);

    await findAllByText('Dashboard');
    await findByText('Words');
    await findByText('Examples');
    await findByText('Nsịbịdị Characters');
    await findByText('Corpora');
    await findByText('Word Suggestions');
    await findByText('Example Suggestions');
    await findByText('Corpus Suggestions');
    await findByText('Platform Notifications');
    await findByText('Constructed Term Polls');
    expect(await queryByText('Users')).toBeNull();
    expect(await queryByText('Data Dump')).toBeNull();
    await findByText('Leaderboard');
    await findByText('Igbo Soundbox');
    await findByText('Igbo Definitions');
    expect(await queryByText('Profile')).toBeNull();

    expect(await queryByText('Loading the page, please wait a moment')).toBeNull();
  });

  it('render the Igbo API Editor Platform with editor role', async () => {
    jest.spyOn(reactAdmin, 'usePermissions').mockReturnValue({ role: 'editor' });
    const { queryByText, findByText, findAllByText } = render(<App />);

    await findAllByText('Dashboard');
    await findByText('Words');
    await findByText('Examples');
    await findByText('Nsịbịdị Characters');
    await findByText('Corpora');
    await findByText('Word Suggestions');
    await findByText('Example Suggestions');
    await findByText('Corpus Suggestions');
    await findByText('Platform Notifications');
    await findByText('Constructed Term Polls');
    expect(await queryByText('Users')).toBeNull();
    expect(await queryByText('Data Dump')).toBeNull();
    await findByText('Leaderboard');
    await findByText('Igbo Soundbox');
    await findByText('Igbo Definitions');
    expect(await queryByText('Profile')).toBeNull();

    expect(await queryByText('Loading the page, please wait a moment')).toBeNull();
  });

  it('render the Igbo API Editor Platform with editor role', async () => {
    jest.spyOn(reactAdmin, 'usePermissions').mockReturnValue({ role: 'transcriber' });
    const { queryByText, findByText, findAllByText } = render(<App />);

    await findAllByText('Dashboard');
    expect(await queryByText('Words')).toBeNull();
    expect(await queryByText('Examples')).toBeNull();
    expect(await queryByText('Nsịbịdị Characters')).toBeNull();
    expect(await queryByText('Corpora')).toBeNull();
    expect(await queryByText('Word Suggestions')).toBeNull();
    expect(await queryByText('Example Suggestions')).toBeNull();
    expect(await queryByText('Corpus Suggestions')).toBeNull();
    expect(await queryByText('Platform Notifications')).toBeNull();
    expect(await queryByText('Constructed Term Polls')).toBeNull();
    expect(await queryByText('Users')).toBeNull();
    expect(await queryByText('Data Dump')).toBeNull();
    await findByText('Leaderboard');
    await findByText('Igbo Soundbox');
    await findByText('Igbo Definitions');
    expect(await queryByText('Profile')).toBeNull();

    expect(await queryByText('Loading the page, please wait a moment')).toBeNull();
  });
  it('render the Igbo API Editor Platform with editor crowdsourcer', async () => {
    jest.spyOn(reactAdmin, 'usePermissions').mockReturnValue({ role: 'crowdsourcer' });
    const { queryByText, findByText, findAllByText } = render(<App />);

    await findAllByText('Dashboard');
    expect(await queryByText('Words')).toBeNull();
    expect(await queryByText('Examples')).toBeNull();
    expect(await queryByText('Nsịbịdị Characters')).toBeNull();
    expect(await queryByText('Corpora')).toBeNull();
    expect(await queryByText('Word Suggestions')).toBeNull();
    expect(await queryByText('Example Suggestions')).toBeNull();
    expect(await queryByText('Corpus Suggestions')).toBeNull();
    expect(await queryByText('Platform Notifications')).toBeNull();
    expect(await queryByText('Constructed Term Polls')).toBeNull();
    expect(await queryByText('Users')).toBeNull();
    expect(await queryByText('Data Dump')).toBeNull();
    await findByText('Leaderboard');
    await findByText('Igbo Soundbox');
    await findByText('Igbo Definitions');
    expect(await queryByText('Profile')).toBeNull();

    expect(await queryByText('Loading the page, please wait a moment')).toBeNull();
  });
});
