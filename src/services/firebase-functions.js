import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  getDoc,
  doc,
} from "firebase/firestore";
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

// Fetch a single dessert by ID
export const fetchDessertById = async (id) => {
  try {
    const docRef = doc(db, "desserts", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.error("No such dessert found!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching dessert:", error);
    return null;
  }
};

// Update the stock quantity on Firestore
export const updateQuantity = async (
  dessertId,
  variantName,
  quantityPurchased
) => {
  try {
    const docRef = doc(db, "desserts", dessertId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.error("No such dessert found!");
      return false;
    }

    const dessert = docSnap.data();

    // Updating the stock for the current variant
    const updatedVariants = dessert.variants.map((variant) => {
      if (variant.name === variantName) {
        return {
          ...variant,
          quantity: Math.max(variant.quantity - quantityPurchased, 0),
        };
      }
      return variant;
    });

    // Write updated stock back to Firestore
    await updateDoc(docRef, { variant: updatedVariants });

    return true;
  } catch (error) {
    console.error("Error updating stock:", error);
    return false;
  }
};
