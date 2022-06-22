import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/navBar';

const MockedNavbar = () => (
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>
);

describe('Navbar component', () => {
  it('renders succesfully', () => {
    render(<MockedNavbar />);
    const listedItem = screen.getByText('Air Quality World Monitor');
    expect(listedItem).toMatchSnapshot();
  });

  it('change theme', () => {
    render(<MockedNavbar />);
    const listedItem = screen.getByTestId('icon');
    fireEvent.click(listedItem);
    const button = screen.getByRole('button', 'Change Theme:Blue');
    fireEvent.click(button);
    expect(button.innerHTML).toBe('Change Theme:Pink');
  });
});
