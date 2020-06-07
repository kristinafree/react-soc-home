import React from 'react';
import { play, stop } from '../../redux/users-reducer';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
import { connect } from 'react-redux';
import Music from './Music';
import { musicAPI } from '../../api/api';


class MusicContainer extends React.Component {
    componentDidMount() {
        
    }

    render () {
        return(
         <Music />
        )
    }
}

// let mapStateToProps = (state) => {
//     return {
//         playlist: state.music.playlist
//     }
// }

export default connect(mapStateToProps, {play, stop}) (MusicContainer);