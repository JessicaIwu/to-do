import React, { Component } from 'react';

export default class Listing extends Component{
    state = {
        activity: this.props.activity
      }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.activity !== prevProps.activity) {
          this.state({
            activity: this.props.activity
          })
        }
    }
    render(){
        const { activity } = this.state;

        console.log(activity.delete)
        return(
            <div className="App-header">
                <p>
                What to do ...
                </p>
                <form className="">
                    <input placeholder="start to document stuff ..." id="inp" />
                    <button className="btn d-block btn-primary mt-1" onClick={activity.add}>Add to list</button>
                </form>
                <ul id="theUl">
                    {/* <li>{activity.task}</li> */}
                </ul>
            </div>
        )
    }
}
