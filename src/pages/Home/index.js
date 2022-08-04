import './styles.css'
import Input from '../../components/Input';
import Button from '../../components/Button';

function Home() {
  return (
    <div className='App'>
      <div className='Form'>

        <Input label='Valor'/>
        <Input label='Entrada'/>
        <Input label='Quantidade de meses'/>
        <Input label='Taxa de juros mensal'/>

        <Button>CALCULAR</Button>
      </div>
    </div>
  );
}

export default Home;
