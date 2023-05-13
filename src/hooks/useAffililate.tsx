import { useContext } from 'react';
import { AffiliateContext } from '../contexts/AffiliateContext';

const useAffiliate = () => useContext(AffiliateContext);

export default useAffiliate;