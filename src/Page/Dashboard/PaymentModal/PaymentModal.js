import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { IoCloseCircle } from 'react-icons/io5'
import Button from '../../../Components/Button/Button'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const stripePromise = loadStripe('pk_test_51M8RDNLKi6AEIY80yxHYLCurBYW1K4s22fHl5kOG8SmTonxBPPVSaYL2b7fXWXGDisMU7wjHEUxTUmmfRhYZCwM5001t4Ehq11');
function PaymentModal({ modal, setModal, product }) {

    const hendleCloseModal = () => {
        setModal(false)
    }
    console.log(product)

    return (
        <div>
            {
                modal && <div className='fixed top-0 left-0 w-full h-full bg-slate-50 bg-opacity-40 z-50'>
                    <div className='bg-gray-300 absolute top-1/2 left-1/2 min-w-[300px] min-h-[400px] -translate-x-1/2 -translate-y-1/2'>
                        <div className='px-3 py-2'>
                            <div className='flex justify-between items-center pb-2'>
                                <p className='text-2xl font-bold'>{'product.name'}</p>
                                <IoCloseCircle onClick={hendleCloseModal} className='text-3xl cursor-pointer ml-10' />
                            </div>
                            <hr />
                            <div className='flex flex-col space-y-3 mt-5'>
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm product={product} />
                                </Elements>
                            </div>
                            <div className='w-32 mt-5'>
                                <Button>Submit</Button>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default PaymentModal