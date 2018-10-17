import React, {Component} from 'react'
import { Card, Modal } from 'antd';

const { Meta } = Card;


class Cards extends Component {

  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }


/*<div>
            {this.props.data.title}
          </div>
          <div>{this.props.data.description}</div>
          */

  render() {
    console.log(this.props.data)
    return(
        <div>
          <div className="cardDiv">
          <Card
              onClick={this.showModal}
              hoverable
              style={{ width: 300, marginLeft:200, marginTop: 100 }}
              cover= {<img alt="img" src={this.props.data.imageURL}></img>}//{this.props.data.imageURL}
              /*{<img alt="example" src="https://i.imgur.com/lDNOf2n.png" />}*/
           >
              <Meta
                title={this.props.data.title}
              />
              <strong>Address: </strong>{this.props.data.address}

           </Card>

           <Modal
          title={this.props.data.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <hr/>
          <p><img alt="img" src={this.props.data.imageURL}style={{width:"95%"}}></img></p>
          <p>{this.props.data.description}</p>
          <p><strong>Animal Type:</strong> {this.props.data.animalType}</p>
          <p><strong>Animal Size:</strong> {this.props.data.animalSize}</p>
          <p><strong>Address:</strong> {this.props.data.address}</p>
          <p><strong>Phone Number:</strong> {this.props.data.phoneNumber}</p>
          <p><strong>Email:</strong> {this.props.data.email}</p>

        </Modal>

          </div>
        </div>
      )
  }
}

export default Cards