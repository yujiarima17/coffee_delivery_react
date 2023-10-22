import { CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react'
import { Container, Header } from '../../styles'
import { PaymentOptionsContainer, PaymentOption } from './styles'

export function Payment() {
  return (
    <Container>
      <Header>
        <CurrencyDollar size={22} color="#8047F8" />
        <div className="info">
          <span>Pagamento</span>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </Header>
      <PaymentOptionsContainer>
        <PaymentOption>
          <CreditCard size={16} color="#8047F8"></CreditCard>
          CARTÃO DE CRÉDITO
        </PaymentOption>
        <PaymentOption>
          <Money size={16} color="#8047F8"></Money>
          CARTÃO DE DÉBITO
        </PaymentOption>
        <PaymentOption>
          <Bank size={16} color="#8047F8"></Bank>
          DINHEIRO
        </PaymentOption>
      </PaymentOptionsContainer>
    </Container>
  )
}