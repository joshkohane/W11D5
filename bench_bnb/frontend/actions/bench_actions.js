import { fetchBenches } from '../util/bench_api'

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

export const receiveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches
})

export const fetchAllBenches = () => dispatch => {
    fetchBenches()
        .then(res => dispatch(receiveBenches(res)))
}