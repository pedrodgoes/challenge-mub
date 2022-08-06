import { render, screen } from "@testing-library/react";
import Input from '.';

describe('<Input />', () => {
  it('should render input on the text "Valor" ', () => {
    render(<Input label='Valor'/>);

    const linkElement = screen.getByText(/valor/i);
    expect(linkElement).toBeInTheDocument()
  });

  it('should render input on the text "Entrada" ', () => {
    render(<Input label='Entrada'/>);

    const linkElement = screen.getByText(/entrada/i);
    expect(linkElement).toBeInTheDocument()
  });

  it('should render input on the text "Quantidade de meses" ', () => {
    render(<Input label='Quantidade de meses'/>);

    const linkElement = screen.getByText(/quantidade de meses/i);
    expect(linkElement).toBeInTheDocument()
  });

  it('should render input on the text "Taxa de juros mensal" ', () => {
    render(<Input label='Taxa de juros mensal'/>);

    const linkElement = screen.getByText(/taxa de juros mensal/i);
    expect(linkElement).toBeInTheDocument()
  });
})
