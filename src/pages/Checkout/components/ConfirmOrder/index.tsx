import { CafesContext } from '../../../../contexts/CafesContext'
import { ShoppingCartItem } from './components/ShoopingCartItem'
import { ShoppingCartBill } from './components/ShoppingCartBill'
import { ConfirmOrderContainer } from './styles'

import { useContext } from 'react'
interface ConfirmOrderProps {
  children: React.ReactNode
}
export function ConfirmOrder({ children }: ConfirmOrderProps) {
  const { cafes } = useContext(CafesContext)
  return (
    <>
      <ConfirmOrderContainer>
        {cafes.map((coffe) => (
          <ShoppingCartItem
            id={coffe.id}
            coffeName={coffe.coffeName}
            key={coffe.id}
            price={coffe.coffePrice}
            orderQuantity={coffe.orderQuantity}
          />
        ))}

        <ShoppingCartBill />
        {children}
      </ConfirmOrderContainer>
    </>
  )
}
