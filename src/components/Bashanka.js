import React, {Component} from 'react';


class Bashanka extends Component {
    render(){
        let mapItem = <MapItem lat={this.props.lat} lng={this.props.lng} />
        return(
            {mapItem}
        )
    }
}
export default Bashanka;