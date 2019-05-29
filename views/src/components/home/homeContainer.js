import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = (state) => {
    return {
        data: {}
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        
    }
};

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
