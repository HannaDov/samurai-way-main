

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import store from "./redux/store";


test('renders learn react link', () => {
 render(<App  dispatch={store.dispatch} store={store} /*appState={store._state} addNewPost={store.addNewPost} addNewMessage={store.addNewPost} updateNewMessageText={store.updateNewPostText} updateNewPostText={store.updateNewPostText}*//>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


