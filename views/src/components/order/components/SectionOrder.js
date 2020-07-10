import React from 'react'

import { Row, Popconfirm, Divider, Table, Select, Button, Modal, Icon, InputNumber, Col, Popover } from 'antd'

import html2canvas from 'html2canvas'

import products from '../../../data/products'
import {
    setValueLocalstorage,
    getValueLocalstorage,
    handleInputNumber,
    extractIsDisplayProducts
} from '../../../common/function_common/functionCommon'
import Number from '../../../common/virtualkeyboard/number'


const Option = Select.Option;
export default class SectionOrder extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            record: null,
            loading: false,
            number: 1,
            ordered: getValueLocalstorage('ordered') ? JSON.parse(getValueLocalstorage('ordered')) : [],
            products: extractIsDisplayProducts(products)

        }

        //
        this.onRowNumberClick = this.onRowNumberClick.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.order = this.order.bind(this)
        this.onChangeNumber = this.onChangeNumber.bind(this)
        this.handleChangeSelectProduct = this.handleChangeSelectProduct.bind(this)
        this.delete = this.delete.bind(this)
        this.removeAll = this.removeAll.bind(this)
        this.onChangeNumber = this.onChangeNumber.bind(this)

        this.preview = this.preview.bind(this)
        this.next = this.next.bind(this)

        this.resetNumberState = this.resetNumberState.bind(this)
        this.handleInputNoKeyBoard = this.handleInputNoKeyBoard.bind(this)

    }

    onRowNumberClick(record) {
        this.setState({
            visible: true,
            record: record,
            number: record.number
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
        let preData = this.state.ordered;
        let preDataRecord = this.state.record;
        let preNumber = this.state.number;

        if (preData.length > 0) {
            for (let i in preData) {
                if (preData[i].key === preDataRecord.key) {
                    preData[i].number = preNumber;
                    preDataRecord.number = preNumber;
                    break;
                }
            }
        }

        this.setState({
            ordered: preData,
            record: preDataRecord,
            visible: false,
        })

        setValueLocalstorage('ordered', JSON.stringify(preData))
    }

    onChangeNumber(value) {
        this.setState({
            number: value
        })
    }

    handleChangeSelectProduct(value) {
        let preData = this.state.ordered;

        // Check if product is exist
        let check = true;
        if (preData.length > 0) {
            for (let i in preData) {
                if (preData[i].key === value) {
                    preData[i].number = preData[i].number + 1;
                    check = false;
                    break;
                }
            }
        }

        if (check) {
            let preAddValue = products[value - 1];
            preAddValue.number = 1;
            preData.unshift(preAddValue)
        }

        this.setState({
            ordered: preData
        })

        setValueLocalstorage('ordered', JSON.stringify(preData))

    }

    delete(record) {
        let preData = this.state.ordered;

        preData = preData.filter(function (item) {
            return item.key !== record.key;
        })

        this.setState({
            ordered: preData
        })

        setValueLocalstorage('ordered', JSON.stringify(preData))
    }

    removeAll() {
        let preData = []

        this.setState({
            ordered: preData
        })

        setValueLocalstorage('ordered', JSON.stringify(preData))
    }

    onChangeNumber(value) {
        this.setState({
            number: value
        })
    }

    preview() {
        let index = this.state.record.key
        let preData = this.state.ordered;

        if (index > 0) {
            this.setState({
                record: preData[index - 1],
                number: preData[index - 1].number
            })
        }
    }

    next() {
        let index = this.state.record.key
        let preData = this.state.ordered;

        if (index < preData.length - 1) {
            this.setState({
                record: preData[index + 1],
                number: preData[index - 1].number
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

    takeScreenshot = () => {
        let orderScreen = document.querySelector('#table-order');

        var today = new Date();
        let todayToString = today.getFullYear() + (today.getMonth() + 1) + today.getDate() + today.getHours() + today.getMinutes() + today.getSeconds();
        html2canvas(orderScreen, { useCORS: true }).then((canvas) => {
            // let imgData = canvas.toDataURL('image/png');
            // let saveImage = document.getElementById('testing').appendChild(canvas)

            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/png").replace("image/png", "image/png");
            a.download = 'chovietjp-' + todayToString + '.jpg';
            a.click();

        });
    }

    render() {
        const { products } = this.state;
        let columns = [
            {
                title: 'No',
                dataIndex: 'key',
                className: 'col-table-order',
                width: 15,
            },
            {
                title: 'SP',
                dataIndex: 'name',
                className: 'col-table-order',
                render: (text, record, index) => {
                    return <span>{record.name}{record.is_dis === "2" ? <span> (Hết Hàng)</span> : ''}</span>
                },
            },
            {
                title: 'SL',
                // dataIndex: 'number',
                className: 'col-table-order',
                width: 15,
                render: (record) =>
                    <Button onClick={this.onRowNumberClick.bind(this, record)} style={{ height: '25px' }}>{record.number}</Button>
            },
            {
                title: 'Giá',
                dataIndex: 'retail_price',
                className: 'col-table-order',
                width: 40,
            },
            {
                title: 'Tổng',
                dataIndex: 'totalRow',
                className: 'col-table-order',
                width: 50,
            },
            {
                title: 'Xóa',
                key: 'delete',
                className: 'col-table-order',
                render: (record) =>
                    <Popconfirm
                        title="Bạn Muốn Xóa Sản Phẩm Này ?"
                        onConfirm={this.delete.bind(this, record)}
                        // onCancel={cancel}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Icon type="delete" style={{ color: 'red' }} />
                    </Popconfirm>
                ,
                width: 20,
            },
        ]

        let predataOrdered = this.state.ordered;
        let totalOrder = 0;
        if (predataOrdered.length > 0) {
            for (let i in predataOrdered) {
                predataOrdered[i].key = parseInt(i) + 1;
                if (predataOrdered[i].is_dis !== "2") {
                    predataOrdered[i].totalRow = predataOrdered[i].number * predataOrdered[i].retail_price;
                    totalOrder = totalOrder + predataOrdered[i].totalRow;
                } else {
                    predataOrdered[i].totalRow = 0;
                }

            }
        }

        const children = [];
        for (let i = 0; i < products.length; i++) {
            children.push(<Option key={products[i].key}>{products[i].name}</Option>);
        }

        const headerTable = (
            <Row>
                <Col span={24}>
                    <p>
                        <strong>Tổng Tiền Hàng: </strong>{totalOrder} y
                        <span style={{ display: "block", fontStyle: "italic" }}>(Đơn Hàng Từ 1man2 đc miễn phí ship kiện hàng dưới 25kg)</span>
                        <span style={{ display: "block", fontStyle: "italic" }}>(Với khách hàng trong Hiroshima, bán kính từ SHOP từ 1~50km, SHOP lái xe giao hàng tận nơi, Vui lòng pm để biết PHÍ SHIP cụ thể)</span>
                    </p>
                    {
                        totalOrder <= 12000
                            ?
                            <p>
                                <strong>Phí Ship Thường:</strong> 800y
                                <span style={{ display: "block", fontStyle: "italic" }}>(Áp dụng cho kiện hàng từ 1 đến dưới 25kg)</span>
                            </p>
                            :
                            <p><strong>PHÍ SHIP:</strong> ĐƠN HÀNG ĐƯỢC MIỄN SHIP</p>
                    }
                    <p>
                        <strong>Phí Thu Lanh Nếu Có: </strong>600 y
                        <span style={{ display: "block", fontStyle: "italic" }}>(Các tỉnh nhận hàng trong 1 đến 2 ngày lựa chọn SHIP Thùng Xốp Đảm Bảo ko mất phi này)</span>
                        <strong>Phí Thu Tiền Hộ(Daibiki): </strong>400 y
                        <span style={{ display: "block", fontStyle: "italic" }}>(Chuyển Khoản Trước Không Mất Phí Này)</span>
                    </p>

                </Col>
            </Row>
        )

        // const footerTable = (
        //     <Row>
        //         <Button type="primary" style={{ marginLeft: '16px', float: 'right' }}>Lưu Đơn</Button>
        //     </Row>
        // )

        return (
            <div className={'secsion-order, content-jp'}>
                <div id="testing"></div>
                <Row>
                    <Divider orientation="left">Đơn Hàng</Divider>
                </Row>
                <Row style={{ marginBottom: '24px', padding: '0 16px' }}>
                    <Col span={6}>
                        <p style={{ paddingLeft: '8px' }}><strong>Thêm SP: </strong></p>
                    </Col>
                    <Col span={18}>
                        <Select
                            showSearch
                            style={{ width: "100%" }}
                            // placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={this.handleChangeSelectProduct}
                            // onFocus={handleFocus}
                            // onBlur={handleBlur}
                            filterOption={(input, option) => {
                                let convertString = option.props.children ? option.props.children : '';
                                convertString = convertString.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
                                convertString = convertString.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
                                convertString = convertString.replace(/ì|í|ị|ỉ|ĩ/g, "i");
                                convertString = convertString.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
                                convertString = convertString.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
                                convertString = convertString.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
                                convertString = convertString.replace(/đ/g, "d");
                                convertString = convertString.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
                                convertString = convertString.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
                                convertString = convertString.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
                                convertString = convertString.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
                                convertString = convertString.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
                                convertString = convertString.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
                                convertString = convertString.replace(/Đ/g, "D");

                                convertString = convertString.toLowerCase()

                                //
                                input = input.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
                                input = input.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
                                input = input.replace(/ì|í|ị|ỉ|ĩ/g, "i");
                                input = input.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
                                input = input.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
                                input = input.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
                                input = input.replace(/đ/g, "d");
                                input = input.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
                                input = input.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
                                input = input.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
                                input = input.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
                                input = input.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
                                input = input.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
                                input = input.replace(/Đ/g, "D");

                                input = input.toLowerCase()

                                if (convertString.includes(input))
                                    return true;
                            }}
                        // value={value.tantoId}
                        >
                            {
                                products.map((item, index) => {
                                    return <Option
                                        key={index}
                                        value={item.key}
                                    >
                                        {item.name}
                                    </Option>
                                })
                            }
                        </Select>
                    </Col>

                </Row>
                <Row style={{ marginBottom: '16px', textAlign: "right" }}>
                    <Popconfirm
                        title="Bạn Muốn Xóa Tất Cả Sản Phẩm ?"
                        onConfirm={this.removeAll.bind(this)}
                        // onCancel={cancel}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button>Xóa Hết</Button>
                    </Popconfirm>

                    <Button type="primary" style={{ marginLeft: '16px', float: 'right' }} onClick={this.takeScreenshot}>Lưu Đơn</Button>
                </Row>
                <Row>
                    <Table
                        bordered
                        components={this.components}

                        columns={columns}
                        dataSource={predataOrdered}

                        pagination={{ pageSize: 100 }}

                        // onRow={(record, rowIndex) => {
                        //     return {
                        //         onClick: this.onRowTableClick.bind(this, record), // click row
                        //         // onDoubleClick: event => { }, // double click row
                        //         // onContextMenu: event => { }, // right button click row
                        //         // onMouseEnter: event => { }, // mouse enter row
                        //         // onMouseLeave: event => { }, // mouse leave row
                        //     };
                        // }}

                        title={() => headerTable}
                        // footer={() => footerTable}

                        id="table-order"

                    />
                </Row>

                <Modal
                    visible={this.state.visible}
                    title={
                        (this.state.record && this.state.record.name ? this.state.record.name : 'ChoVietJP') + " " +
                        (this.state.record && this.state.record.retail_price ? this.state.record.retail_price : '') + "y" + " SL: " +
                        (this.state.record && this.state.record.number ? this.state.record.number : '')
                    }
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    // footer={
                    //     [
                    //         <Button key="preview" type="primary" onClick={this.preview.bind(this)}>
                    //             <Icon type="arrow-up" />
                    //         </Button>,
                    //         <Button key="next" type="primary" onClick={this.next.bind(this)}>
                    //             <Icon type="arrow-down" />
                    //         </Button>,
                    //         <Button key="close" onClick={this.handleCancel}>
                    //             <Icon type="close" />
                    //         </Button>,
                    //     ]
                    // }

                    footer=""
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
            </div>
        )
    }
}