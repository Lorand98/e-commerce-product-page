import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import ArticleDetails from './ArticleDetails';

import store from '../../store/index';

describe('Article details component', () => {
  test('increases amount in case the increase button was clicked', () => {
    //Arrange
    render(
      <Provider store={store}>
        <ArticleDetails />
      </Provider>
    );

    //Act
    const amountOld = screen.getByTestId('test-quantity').textContent;
    userEvent.click(screen.getByRole('button', { name: /increase/i }));

    //Assert
    const amountNew = screen.getByTestId('test-quantity').textContent;
    expect(Number(amountNew)).toBeGreaterThan(Number(amountOld));
  });

  test('decreases amount in case the decrease button was clicked', () => {
    //Arrange
    render(
      <Provider store={store}>
        <ArticleDetails />
      </Provider>
    );

    //Act
    //we increase it first so we can decrease it (we can't decrease it the quantity initially as it is 0)
    userEvent.click(screen.getByRole('button', { name: /increase/i }));
    const amountOld = screen.getByTestId('test-quantity').textContent;
    userEvent.click(screen.getByRole('button', { name: /decrease/i }));

    //Assert
    const amountNew = screen.getByTestId('test-quantity').textContent;
    expect(Number(amountNew)).toBeLessThan(Number(amountOld));
  });
});
