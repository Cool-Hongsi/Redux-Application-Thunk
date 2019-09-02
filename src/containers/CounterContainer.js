import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { changeColor, increment, decrement } from '../store/modules/counter';
import { getPost } from '../store/modules/post';

class CounterContainer extends Component{
    
    // In order to show first data on page
    componentDidMount = () => {
        const { number, getPost } = this.props; // number from counter reducer , getPost from post reducer
        getPost(number);
    };

     // Call this lifecycle method every the number value is different with present number value
    componentWillReceiveProps = (nextProps) => {
        const { number, getPost } = this.props;
        if(number !== nextProps.number){
            getPost(nextProps.number);
        };
    };

    onSelectedColor = (color) => {
        const { changeColor } = this.props;
        changeColor(color);
    };

    onSelectedIncrement = () => {
        const { increment } = this.props;
        increment();
    };

    onSelectedDecrement = () => {
        const { decrement } = this.props;
        decrement();
    };

    render(){

        const { color, number, pending, error, data } = this.props;

        return(
            <Counter
                color={color}
                number={number}
                pending={pending}
                error={error}
                data={data}
                onSelectedColor={this.onSelectedColor}
                onSelectedIncrement={this.onSelectedIncrement}
                onSelectedDecrement={this.onSelectedDecrement}
            />
        )
    }
};

const mapStateToProps = (state) => {
    // state means current state
    // Whenever the state value is changed, it is called and set the new value into state
    return {
        color : state.counter.color,
        number : state.counter.number,
        pending : state.post.pending,
        error : state.post.error,
        data : state.post.data
    }
};

const mapDispatchToProps = (dispatch) => {
    // set each function in reducers and call the dispatch with the return value
    return {
        changeColor : (color) => { dispatch(changeColor(color)) },
        increment : () => { dispatch(increment()) },
        decrement : () => { dispatch(decrement()) },
        getPost : (postId) => { dispatch(getPost(postId)) }
    }
};

// CounterContainer component can use mapStateToProps and mapDispatchToProps
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);