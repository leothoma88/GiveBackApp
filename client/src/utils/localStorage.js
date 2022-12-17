// boilerplate code for LocalStorage controls
export const getSavedDonationIds = () => {
    const savedDonationIds = localStorage.getItem('saved_donations')
      ? JSON.parse(localStorage.getItem('saved_donations'))
      : [];
  
    return savedDonationIds;
  };
  
  export const saveDonationIds = (donationIdArr) => {
    if (donationIdArr.length) {
      localStorage.setItem('saved_donations', JSON.stringify(donationIdArr));
    } else {
      localStorage.removeItem('saved_donations');
    }
  };

