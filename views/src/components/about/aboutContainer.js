import { connect } from 'react-redux';
import About from './about';

const mapStateToProps = (state) => {
    return {
        data: {}
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        
    }
};

export const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About);
