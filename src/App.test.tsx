
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import state, {addNewPost} from "./redux/state";


test('renders learn react link', () => {
 render(<App appState={state} addNewPost={addNewPost}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

