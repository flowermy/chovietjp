import React from 'react'

import { Row, Divider, Table, Button, Modal, Icon, Col, InputNumber, Popover } from 'antd'
import products from '../../../data/products'
import { extractIsDisplayProducts, handleInputNumber } from '../../../common/function_common/functionCommon';

import Number from '../../../common/virtualkeyboard/number'

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
        record.number = 1;
        this.setState({
            visible: true,
            record: record,
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

        this.setState({
            visible: false
        })
    }

    onChangeNumber(value) {
        this.setState({
            number: value
        })
    }

    preview() {
        if (this.state.record.key > 1) {
            this.setState({
                record: products[this.state.record.key - 2],
                number: 1
            })
        }
    }

    next() {
        if (this.state.record.key < products.length) {
            this.setState({
                record: products[this.state.record.key],
                number: 1
            })
        }
    }

    resetNumberState = () => {
        this.setState({
            number: 0
        })
    }

    handleInputNoKeyBoard = (number) => {
        this.setState({
            number: handleInputNumber(number, this.state.number)
        })
    }


    render() {
        let columns = [
            {
                title: 'SKU',
                dataIndex: 'sku',
                key: 'sku',
                render: (text, record, index) => {
                    return <img
                        alt={record.sku}
                        src={record.image ? record.image : "http://chovietjp.com/0000.jpg"}
                        style={{ maxHeight: "45px", maxWidth: "45px" }}
                    />
                },
                width: 60,
                align: "center",
                className: "so-image",
            },
            {
                title: 'Tên Sản Phẩm',
                dataIndex: 'name',
                key: 'name',
                render: (text, record, index) => {
                    return <span>{record.name}{record.is_dis === "2" ? <span> (Hết Hàng)</span> : ''}</span>
                },
            },
            {
                title: 'Giá',
                dataIndex: 'retail_price',
                key: 'retail_price',
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
                    dataSource={extractIsDisplayProducts(products)}

                    pagination={{ pageSize: 300 }}

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
                        (this.state.record && this.state.record.retail_price ? this.state.record.retail_price : '') + "y"}
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
                    <Row gutter={16} style={{ textAlign: 'center' }}>
                        <Col span={12}>
                            <img src={
                                this.state.record && this.state.record.image
                                    ? this.state.record.image
                                    :
                                    "http://chovietjp.com/0000.jpg"
                            }
                                style={{ maxWidth: '100%' }} />
                        </Col>
                        <Col span={12} style={{ textAlign: "center" }}>
                            <Row>
                                <Popover placement="bottomRight" content={<Number handleInput={this.handleInputNoKeyBoard} />} trigger="click">
                                    <Button type='primary' onClick={this.resetNumberState}>SL</Button>
                                </Popover>
                                <InputNumber
                                    min={0}
                                    max={1000}
                                    defaultValue={this.state.record && this.state.record.number ? this.state.record.number : 1}
                                    value={this.state.number}
                                    disabled
                                    className="order-page-input"

                                />
                            </Row>

                            <Row>
                                <Button type="primary" onClick={this.order} style={{ marginTop: "16px" }}>Đặt Hàng</Button>
                            </Row>

                        </Col>

                        {/*  */}
                    </Row>
                </Modal>
            </Row>
        )
    }
}