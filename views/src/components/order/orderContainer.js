import { connect } from 'react-redux';
import Order from './order';

const mapStateToProps = (state) => {
    return {
        data: {}
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        
    }
};

export const OrderContainer = connect(mapStateToProps, mapDispatchToProps)(Order);
