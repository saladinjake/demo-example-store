import OrdersManager from '../../../components/Orders';
import styled from 'styled-components';
import { Header } from '../../../components/Nav';
export default function OrdersPage() {
  return (
    <>
    <Header/>
    
    <OrdersManager>
      {({ orders, dispatch }) => (
        <Container>
            <CartSection>
          <Title>🧾 Your Orders</Title>

          {orders.length === 0 ? (
            <p>No orders placed yet.</p>
          ) : (
            <ul>
              {orders.map((order) => (
                <li
                  key={order.id}
                 
                >
                  <div>
                    <p>Order #{order.id}</p>
                    <p>
                      {order.items.length} item{order.items.length > 1 ? 's' : ''}
                    </p>
                    <p>Status: <strong>{order.status}</strong></p>
                    <p>Total: ${order.total.toFixed(2)}</p>
                    <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                  </div>

                  <div>
                    {order.status !== 'cancelled' && order.status !== 'delivered' && (
                      <>
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_STATUS',
                              payload: { id: order.id, status: 'cancelled' },
                            })
                          }
                          
                        >
                          Cancel Order
                        </button>
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_STATUS',
                              payload: { id: order.id, status: 'shipped' },
                            })
                          }
                        
                        >
                          Mark as Shipped
                        </button>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}

          <button
            
            onClick={() =>
              dispatch({
                type: 'ADD_ORDER',
                payload: {
                  id: Math.random().toString(36).slice(2, 9),
                  items: [{ id: 'p1', name: 'Sample Product', quantity: 1, price: 20 }],
                  status: 'pending',
                  total: 20,
                  date: new Date().toISOString(),
                },
              })
            }
          >
            Add Dummy Order
          </button>
          </CartSection>
        </Container>
      )}
    </OrdersManager>
  </>
  )
}




// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  max-width: 100%;
  margin: auto;
      box-shadow: -50px 50px 25px rgba(0, 0, 0, .08);
`;

const CartSection = styled.div`
  width: 70%;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const SelectAll = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;