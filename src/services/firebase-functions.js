import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase-config.js";

// Fetch all desserts
export const fetchAllDesserts = async () => {
  try {
    const dessertsCollection = collection(db, "desserts");
    const snapshot = await getDocs(dessertsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching all desserts:", error);
    return [];
  }
};

// Fetch featured desserts
export const fetchFeaturedDesserts = async () => {
  try {
    const dessertsCollection = collection(db, "desserts");
    const featuredQuery = query(
      dessertsCollection,
      where("favourited", "==", true)
    );
    const snapshot = await getDocs(featuredQuery);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching featured products:", error);
  }
};
