import { render, screen } from "@testing-library/react";
import Button from '.';

describe('<Button />', () => {
  it('should render the button with the text "CALCULAR" ', () => {
    render(<Button children='CALCULAR'/>);

    const button = screen.getByRole('button', {name: /calcular/i});
    expect(button).toBeInTheDocument();
  });
})
