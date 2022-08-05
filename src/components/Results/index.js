import { formatCurrency } from '../../utils/formatCurrency'
import styles from './styles.module.css'

const Results = ({ results }) => {
  return (
    <div className={styles.ResultWrapper}>
      <h2>RESULTADOS</h2>
      <div className={styles.Amount}>
        Prestação: {formatCurrency(results[1]?.amount)}
      </div>
      <div style={{overflowX: 'auto'}}>
        <table>
          <thead>
            <tr>
              <th>Número da parcela</th>
              <th>Data de pagamento</th>
              <th>Valor</th>
              <th>Juros</th>
              <th>Amortização</th>
              <th>Saldo Devedor</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.portionDate}</td>
                <td>{formatCurrency(item.amount)}</td>
                <td>{formatCurrency(item.fees)}</td>
                <td>{formatCurrency(item.amortization)}</td>
                <td>{formatCurrency(item.indebted)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Results;
