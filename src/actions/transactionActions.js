import {GET_ALL_TRANSACTIONS} from './types';


export const getTransactions = () => {
    return {
        type: GET_ALL_TRANSACTIONS
    }
}