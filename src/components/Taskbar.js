import React, { Component } from 'react';

class Taskbar extends Component {
    render() { 
        return (
            <div className={'Taskbar container rounded shadow ' + this.props.visibility}>
                <div className='row tb-bg pt-1 pb-1 pl-2 rounded-top'>
                    <span className='action-buttons'>
                        <button className='rounded-circle ml-1 tb-close' /> &thinsp;
                        <button className='rounded-circle mx-1 tb-min d-none d-md-inline' /> &thinsp;
                        <button className='rounded-circle mr-1 tb-max d-none d-md-inline' />
                    </span>
                    <h6 className='text-white m-auto tb-header pr-3'> HackathonUG2k19 </h6>
                </div>
            </div>
        );
    }
}
 
export default Taskbar;