import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { reasons } from './data';
import { useAuth0 } from '@auth0/auth0-react';
import { firestore } from '../../firebase/utils';
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';

function Multiselect() {
  const { user, isAuthenticated } = useAuth0();
  const [selectedReasons, setSelectedReasons] = useState([]);

  useEffect(() => {
    // Update Firestore when selectedReasons change
    if (isAuthenticated && user.email) {
      updateFirestore(selectedReasons);
    }
  }, [selectedReasons, isAuthenticated, user.email]);

  const updateFirestore = async (updatedReasons) => {
    try {
      // Fetch user document from Firestore based on email
      const userDoc = await getUserDocument(user.email);
  
      // Get the existing reasons from the document
      const existingReasons = userDoc.data().reasons || [];
  
      // Check if the selected reasons are new (not already in existingReasons)
      const newReasons = updatedReasons.filter(
        (reason) => !existingReasons.includes(reason.value)
      );
  
      // If there are new reasons, update the Firestore document
      if (newReasons.length > 0) {
        // Combine existing and new reasons and remove duplicates
        const updatedReasonsArray = [...new Set([...existingReasons, ...newReasons.map((reason) => reason.value)])];
  
        // Update the Firestore document with the unique reasons array
        await updateDoc(doc(firestore, 'users', userDoc.id), {
          reasons: updatedReasonsArray,
        });
      }
    } catch (error) {
      console.error('Error updating Firestore:', error);
    }
  };
  
  
  
  

  const getUserDocument = async (email) => {
    const userRef = collection(firestore, 'users');
    const q = query(userRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      console.error('User document not found.');
      return null;
    }

    // Assuming there's only one user document for the given email
    return querySnapshot.docs[0];
  };

  const handleSelectChange = (selectedOptions) => {
    setSelectedReasons(selectedOptions);
  };

  return (
    <Select
      value={selectedReasons}
      isMulti
      name="Reason"
      options={reasons}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={handleSelectChange}
    />
  );
}

export default Multiselect;
