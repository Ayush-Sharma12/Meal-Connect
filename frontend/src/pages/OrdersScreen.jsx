import { useState, useEffect } from "react";
import { Search, Package, Clock, MapPin, Phone, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";
import "./OrdersScreen.css";

const OrdersScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadOrders = () => {
      const userOrders = JSON.parse(localStorage.getItem("userOrders") || "[]");
      const sampleOrders = [
        {
          id: "ord_001",
          foodItemName: "Fresh Vegetables",
          donor: "City Bakery",
          status: "pending",
          orderDate: new Date().toISOString(),
          pickupTime: "Today, 2:00 PM",
          pickupLocation: "Downtown Market",
          contactPerson: "John Smith",
          phone: "+91 98765 43210",
          quantity: "5 kg",
          image: "https://wallpapers.com/images/hd/vegetables-pictures-qs8trfk65nvldcyr.jpg",
        },
        {
          id: "ord_002",
          foodItemName: "Cooked Meals",
          donor: "Restaurant Plaza",
          status: "confirmed",
          orderDate: new Date(Date.now() - 86400000).toISOString(),
          pickupTime: "Tomorrow, 6:00 PM",
          pickupLocation: "Food Court, Mall Road",
          contactPerson: "Sarah Johnson",
          phone: "+91 98765 54321",
          quantity: "10 portions",
          image: "https://sherohomefood.in/wp-content/uploads/2024/06/Blog_1.jpg",
        },
      ];

      setOrders([...userOrders, ...sampleOrders]);
    };

    loadOrders();
    window.addEventListener("orderCreated", loadOrders);
    window.addEventListener("orderUpdated", loadOrders);

    return () => {
      window.removeEventListener("orderCreated", loadOrders);
      window.removeEventListener("orderUpdated", loadOrders);
    };
  }, []);

  const filteredOrders = orders.filter((order) =>
    [order.foodItemName, order.donor, order.status]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const getStatusText = (status) => {
    switch (status) {
      case "pending":
        return "Pending";
      case "confirmed":
        return "Confirmed";
      case "completed":
        return "Completed";
      case "cancelled":
        return "Cancelled";
      default:
        return status;
    }
  };

  const handleCallDonor = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h1 className="orders-title">My Orders</h1>
        <div className="search-container">
          <Search className="search-icon" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search orders..."
            className="search-input"
          />
        </div>
      </div>

      <div className="orders-content">
        {filteredOrders.length === 0 ? (
          <div className="no-orders">
            <Package className="no-orders-icon" />
            <h3 className="no-orders-title">No Orders Found</h3>
            <p className="no-orders-subtitle">
              You haven't placed any orders yet.
            </p>
            <button
              onClick={() => navigate("/home")}
              className="browse-button"
            >
              Browse Food Items
            </button>
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <div className="order-info">
                  <h3 className="order-title">{order.foodItemName}</h3>
                  <p className="order-donor">from {order.donor}</p>
                </div>
                <span className={`order-status`}>
                  {getStatusText(order.status)}
                </span>
              </div>

              <div className="order-body">
                <img
                  src={order.image}
                  alt={order.foodItemName}
                  className="order-image"
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/64x64?text=No+Image")
                  }
                />
                <div className="order-details">
                  <div className="detail-item">
                    <Package className="detail-icon" />
                    <span>{order.quantity}</span>
                  </div>
                  <div className="detail-item">
                    <Clock className="detail-icon" />
                    <span>{order.pickupTime}</span>
                  </div>
                  <div className="detail-item">
                    <MapPin className="detail-icon" />
                    <span>{order.pickupLocation}</span>
                  </div>
                </div>
              </div>

              <div className="order-footer">
                <div className="contact-info">
                  <User className="contact-icon" />
                  <span>{order.contactPerson}</span>
                </div>
                <button
                  onClick={() => handleCallDonor(order.phone)}
                  className="call-button"
                >
                  <Phone className="call-icon" />
                  Call
                </button>
              </div>

              <div className="order-date">
                Ordered on{" "}
                {new Date(order.orderDate).toLocaleDateString("en-US", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          ))
        )}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default OrdersScreen;
