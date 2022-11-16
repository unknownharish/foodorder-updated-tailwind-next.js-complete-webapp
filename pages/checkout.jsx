import styles from '/styles/Checkout.module.css'

import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Checkout_Item_list from '../components/Checkout_item_list'
import axios from 'axios'



import { Elements, } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import Stripe_modal from '../components/Stripe_modal'

let stripeKey = loadStripe('pk_test_51LTSslSEk3EtKCobY7RUgLOMoRwR0BxPcbOXT2Twi21qYi1FK0md0xlMU8fMCz3tFlkMP9SgSE6pzWF0mUzKSbqd00Tbp7vtiP')

export default function Checkout() {

  const [cardPayment, setcardPayment] = useState(false)
  // redux store 
  let user = useSelector(x => x.user)
  let Grandtotal = 0;
  user.products.map(x => {
    Grandtotal += (x.price * x.qty)
  })



  return (
    <div className={styles.container}>

      <div className={styles.left}>
        {
          user.products.length > 0 ? user.products.map((x, idx) => <Checkout_Item_list key={idx} food={x} />) : <h2 style={{ color: 'white' }}>No products in Cart</h2>
        }



      </div>
      <div className={styles.right}>
        <h2 className='text-2xl mt-2'>Grand Total</h2>

        <div className={'flex flex-col items-center justify-center h-48'}>
         
          <div className='flex justify-between w-5/12'>
            <p className='font-bold'> Subtotal</p>
            <p>${Grandtotal}</p>
          </div>

          <div className={'flex justify-between w-5/12'}>
            <p className={'font-bold'}> Discount</p>
            <p> ${'0.0'}</p>
          </div>



          <div className={'flex justify-between w-5/12 mb-5'}>
            <p className={'font-bold'}> Total</p>
            <p>${Grandtotal}</p>
          </div>


          <input className={styles.proceed } type="button" value="Proceed" onClick={() => setcardPayment(true)} />
          {/* disabled={user.products.length > 0 ?false:true} */}

          {

            cardPayment ?

              <>

                <Elements stripe={stripeKey}>
                  <Stripe_modal setcardPayment={setcardPayment} />
                </Elements>

              </>

              : ''
          }


        </div>
      </div>
    </div>
  )
}
