import styles from "./styles.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Results from "../../components/Results";
import { toast } from "react-toastify";
import { useState } from "react";

function Home() {
  const [values, setValues] = useState(null);
  const [results, setResults] = useState([]);

  const calculate = () => {

    const firstValue = values.initialValue - values.entryValue;
    let tempValue = firstValue;

    const feesInitial = values.interestRate/100;
    const fractionUp = (1+feesInitial)**values.monthQuantity;
    const fractionLow = ((1+feesInitial)**values.monthQuantity)-1;
    const fraction = (feesInitial*(fractionUp)/(fractionLow));
    const portion = (firstValue*( isNaN(fraction) ? 0 : fraction)).toFixed(2);

    const list = [{
      id: 0,
      fees: 0,
      amortization: 0,
      indebted: firstValue,
      amount: 0,
      portionDate: '-'
    }];

    const actualDate = new Date();
    actualDate.setDate(1);
    let tempPortionDate = actualDate;

    for (var i = 0; i < values.monthQuantity; i++) {
      const fees = (tempValue * feesInitial).toFixed(2);
      let amortization = (portion - fees).toFixed(2);

      if(i == values.monthQuantity - 1) {
        amortization = tempValue;
      }

      const indebted = (tempValue - amortization).toFixed(2);
      const portionDate = new Date(tempPortionDate.setMonth(tempPortionDate.getMonth() + 1));

      list.push({
        fees, amortization, indebted,
        amount: portion,
        portionDate: portionDate.toLocaleDateString(),
        id: i+1
      })
      tempValue = indebted;
      tempPortionDate = portionDate;
    }

    setResults(list);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.monthQuantity > 100) {
      toast('Quantidade de meses não pode ser maior que 100!', {
        type: 'warning'
      })
      return
    }

    if (values.interestRate > 5) {
      toast('Juros não pode ser maior que 5%!', {
        type: 'warning'
      })
      return
    }

    calculate();
  }

  return (
    <div className={styles.App}>
      <form className={ styles.Form } onSubmit={handleSubmit}>
        <Input
          label="Valor"
          required
          onChange={(event) => {
            setValues((prevState) => ({
              ...prevState,
              initialValue: event.target.value,
            }));
          }}
        />
        <Input
          label="Entrada"
          required
          onChange={(event) => {
            setValues((prevState) => ({
              ...prevState,
              entryValue: event.target.value,
            }));
          }}
        />
        <Input
          label="Quantidade de meses"
          required
          onChange={(event) => {
            setValues((prevState) => ({
              ...prevState,
              monthQuantity: event.target.value,
            }));
          }}
        />
        <Input
          label="Taxa de juros mensal"
          required
          onChange={(event) => {
            setValues((prevState) => ({
              ...prevState,
              interestRate: event.target.value,
            }));
          }}
        />

        <Button type="submit">CALCULAR</Button>
      </form>

      {
        results.length > 0 && <Results results={results}/>
      }
    </div>
  );
}

export default Home;
