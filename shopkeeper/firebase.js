// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, doc, updateDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

// Tumhara Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA5OQ5zBU030goP4gtavznht73oBe-1fUo",
  authDomain: "passwaale.firebaseapp.com",
  projectId: "passwaale",
  storageBucket: "passwaale.firebasestorage.app",
  messagingSenderId: "897642791782",
  appId: "1:897642791782:web:0a1eda1d5998ea1e5d3ea7",
  measurementId: "G-D8B4HY20F0"
};

// Firebase initialize karo
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Orders save karne ka function
export async function saveOrder(orderData) {
  try {
    await addDoc(collection(db, "orders"), orderData);
    console.log("Order saved!");
  } catch (e) {
    console.error("Error:", e);
  }
}

// Orders fetch karne ka function
export async function getOrders(callback) {
  onSnapshot(collection(db, "orders"), (snapshot) => {
    var orders = [];
    snapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() });
    });
    callback(orders);
  });
}


// Order status update karne ka function
export async function updateOrderStatus(orderId, newStatus) {
  try {
    const orderRef = doc(db, "orders", orderId);
    await updateDoc(orderRef, { status: newStatus });
    console.log("Status updated!");
  } catch (e) {
    console.error("Error:", e);
  }
}