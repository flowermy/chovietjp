import React from 'react'

import { Row, Col, Divider, Table, Badge, Button, Modal, Icon, InputNumber } from 'antd'
import products from '../../../data/products'

export default class SectionOrder extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            record: null,
            loading: false,
            number: 1
        }

        //
        this.onRowTableClick = this.onRowTableClick.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.order = this.order.bind(this)
        this.onChangeNumber = this.onChangeNumber.bind(this)

        this.preview = this.preview.bind(this)
        this.next = this.next.bind(this)

    }

    onRowTableClick(record) {
        this.setState({
            visible: true,
            record: record
        })
    }

    handleOk() {
        //

    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }

    order() {
        let preData = this.state.record;
        preData.number = this.state.number;

        this.props.order(preData)
    }

    onChangeNumber(value) {
        this.setState({
            number: value
        })
    }

    preview(){
        if(this.state.record.index > 1){
            this.setState({
                record: products[this.state.record.index - 2],
                number: 1
            })
        }
    }

    next(){
        if(this.state.record.index < products.length){
            this.setState({
                record: products[this.state.record.index],
                number: 1
            })
        }
    }

    render() {

        let columns = [
            {
                title: 'Stt',
                dataIndex: 'index',
                width: 30,
            },
            {
                title: 'Tên Sản Phẩm',
                dataIndex: 'name',
            },
            {
                title: 'Giá',
                dataIndex: 'price',
                width: 60,
            },
            {
                title: 'Xem',
                key: 'action',
                width: 50,
                render: () => <Icon type="shopping-cart" style={{ fontSize: '22px', color: '#fc5f10' }} />,
            },
        ]

        return (
            <Row className={'secsion-order, content-jp'}>
                <Divider orientation="left">Đặt Hàng</Divider>
                <Table
                    bordered
                    components={this.components}

                    columns={columns}
                    dataSource={products}

                    pagination={{ pageSize: 100 }}

                    onRow={(record, rowIndex) => {
                        return {
                            onClick: this.onRowTableClick.bind(this, record), // click row
                            // onDoubleClick: event => { }, // double click row
                            // onContextMenu: event => { }, // right button click row
                            // onMouseEnter: event => { }, // mouse enter row
                            // onMouseLeave: event => { }, // mouse leave row
                        };
                    }}

                />

                <Modal
                    visible={this.state.visible}
                    title={
                        (this.state.record && this.state.record.name ? this.state.record.name : 'ChoVietJP') + " " + 
                        (this.state.record && this.state.record.price ? this.state.record.price : '') + "y"}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={
                        [
                            <Button key="preview" type="primary" onClick={this.preview.bind(this)}>
                                <Icon type="arrow-up" />
                            </Button>,
                            <Button key="next" type="primary" onClick={this.next.bind(this)}>
                                <Icon type="arrow-down" />
                            </Button>,
                            <Button key="close" onClick={this.handleCancel}>
                                <Icon type="close" />
                            </Button>,
                        ]
                    }
                >
                    <Row gutter={16} style={{textAlign: 'center'}}>
                        <span>
                            <Button>Số Lượng</Button>
                            <InputNumber
                                min={1}
                                max={100}
                                defaultValue={1}
                                onChange={this.onChangeNumber}
                            />
                            <Button type="primary" onClick={this.order} >Đặt Hàng</Button>
                        </span>

                        {/* <img src="https://cdn2.iconfinder.com/data/icons/startup-and-new-business-2/200/vector_399_11-512.png" style={{ maxWidth: '100%' }} /> */}
                    </Row>
                </Modal>
            </Row>
        )
    }
}