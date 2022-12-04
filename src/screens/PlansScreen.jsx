import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import db from '../../firebase';
import { selectUser } from '../features/userSlice';
import { loadStripe } from '@stripe/stripe-js';

// Need Extension firebase ( Run Payments with Stripe ) for payments method

function PlansScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    db.collection('customers')
      .doc(user.uid)
      .collection('subscription')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          setSubscription({
            role: subscription.data().role,
            current_priod_end: subscription.data().current_priod_seconds,
            current_priod_start:
              subscription.data().current_priod_start.seconds,
          });
        });
      });
  }, [user.uid]);

  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection('prices').get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  console.log(products);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection('customers')
      .doc(user.uid.collection(''))
      .collection('checkout_sessions')
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(''); // stripe key
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="mb-3">
      {subscription && (
        <p>
          Renewal date:{' '}
          {new Date(
            subscription?.current_priod_end * 1000,
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        // add some logic to check it the user's subscribetion is active...

        const isCurrentPackage = productData.name
          ?.toLowerCase()
          .includes(subscription?.role);

        return (
          <div
            key={productId}
            className={`${
              isCurrentPackage && 'bg-stone-600'
            }   flex justify-between p-5 opacity-80 hover:opacity-100`}
          >
            <div>
              <h5> {productData.name}</h5>
              <h6> {productData.description}</h6>
            </div>

            <button
              className="py-[10px] px-5 text-white bg-red-600 font-semibold cursor-pointer"
              onClick={loadCheckout(
                () => isCurrentPackage && productData?.price?.priceId,
              )}
            >
              {isCurrentPackage ? 'Current Package' : 'Subscribe'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
