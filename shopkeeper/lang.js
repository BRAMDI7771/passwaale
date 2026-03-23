var languages = {
  en: {
    shopHeader: 'Rajesh Kirana',
    shopSubHeader: "Today's Orders",
    ordersTitle: 'Orders',
    catalogTitle: 'My Catalog',
    catalogSubHeader: 'Mark items available/unavailable',
    broadcastTitle: 'Broadcast',
    broadcastSubHeader: 'Send message to your customers',
    khataTitle: 'Khata',
    khataSubHeader: 'Paid and Pending orders',
    newMessage: 'New Message',
    messagePlaceholder: 'Type here... e.g: Fresh paneer available today!',
    sendBtn: 'Send to All',
    pastMessages: 'Past Messages',
    sent: 'Sent',
    paid: 'Paid',
    pending: 'Pending',
    markReady: 'Mark as Ready',
    outOfStock: 'Mark Out of Stock',
    markAvailable: 'Mark Available',
    todayOrders: "Today's Orders",
    appName: 'PassWaale',
    nearbyShops: 'Shops Near You',
    location: 'Aashiana, Lucknow',
    open: 'Open',
    closed: 'Closed',
    availableItems: 'Available Items',
    addBtn: '+ Add',
    added: '✓ Added',
    orderNow: 'Order Now →',
    deliveryType: 'Delivery Type',
    homeDelivery: 'Home Delivery',
    deliveryTime: 'In 20-30 mins',
    pickup: 'Pickup',
    pickupSub: 'Collect from shop',
    yourAddress: 'Your Address',
    addressPlaceholder: 'Enter your address...',
    orderSummary: 'Order Summary',
    total: 'Total',
    placeOrder: 'Place Order',
  },

  hi: {
    shopHeader: 'राजेश किराना',
    shopSubHeader: 'आज के ऑर्डर',
    ordersTitle: 'ऑर्डर',
    catalogTitle: 'मेरा कैटलॉग',
    catalogSubHeader: 'आइटम उपलब्ध/अनुपलब्ध करो',
    broadcastTitle: 'ब्रॉडकास्ट',
    broadcastSubHeader: 'अपने ग्राहकों को संदेश भेजो',
    khataTitle: 'खाता',
    khataSubHeader: 'पेड और पेंडिंग ऑर्डर',
    newMessage: 'नया संदेश',
    messagePlaceholder: 'यहाँ लिखो... जैसे: आज ताज़ा पनीर आया है!',
    sendBtn: 'सबको भेजो',
    pastMessages: 'पिछले संदेश',
    sent: 'भेजा',
    paid: 'पेड',
    pending: 'पेंडिंग',
    markReady: 'रेडी करो',
    outOfStock: 'स्टॉक खत्म करो',
    markAvailable: 'उपलब्ध करो',
    todayOrders: 'आज के ऑर्डर',
    appName: 'पासवाले',
    nearbyShops: 'पास की दुकानें',
    location: 'आशियाना, लखनऊ',
    open: 'खुला',
    closed: 'बंद',
    availableItems: 'उपलब्ध आइटम',
    addBtn: '+ जोड़ो',
    added: '✓ जोड़ा',
    orderNow: 'ऑर्डर करो →',
    deliveryType: 'डिलीवरी टाइप',
    homeDelivery: 'होम डिलीवरी',
    deliveryTime: '20-30 मिनट में',
    pickup: 'पिकअप',
    pickupSub: 'दुकान से ले आओ',
    yourAddress: 'आपका पता',
    addressPlaceholder: 'अपना पता लिखो...',
    orderSummary: 'ऑर्डर सारांश',
    total: 'कुल',
    placeOrder: 'ऑर्डर दो',
  }
};

var currentLang = 'en';

function setLang(lang) {
  currentLang = lang;

  // Active button update karo
  document.getElementById('btn-en').classList.remove('active');
  document.getElementById('btn-hi').classList.remove('active');
  document.getElementById('btn-' + lang).classList.add('active');

  // Saare data-en/data-hi elements update karo
  var els = document.querySelectorAll('[data-en]');
  els.forEach(function(el) {
    if (lang === 'hi') {
      el.textContent = el.getAttribute('data-hi');
    } else {
      el.textContent = el.getAttribute('data-en');
    }
  });
}