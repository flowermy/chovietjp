import React from 'react'

import { Row, Modal, List, Typography, Icon, Col, PageHeader, Divider, Avatar, Button } from 'antd'


const data = [
    {
        title: 'Thịt Cá Tươi',
    },
    {
        title: 'Gia Vị Việt',
    },
    {
        title: 'Rau Củ Quả',
    },
    {
        title: 'Đồ Khô',
    },
];

export default class SectionHomeCate extends React.Component {

    render() {

        return (
            <Row className={'secsion-category-list, content-jp'}>
                <Divider orientation="left">Danh Mục</Divider>
                <div style={{padding: "0px 16px"}}>
                    <Col span={24}>
                        <Button style={{ width: "100%", margin: '4px 0px' }} type="primary">Thịt Cá Tươi</Button>
                    </Col>
                    <Col span={24}>
                        <Button style={{ width: "100%", margin: '4px 0px' }} type="primary">Gia Vị Việt</Button>
                    </Col>
                    <Col span={24}>
                        <Button style={{ width: "100%", margin: '4px 0px' }} type="primary">Rau Củ Quả</Button>
                    </Col>
                    <Col span={24}>
                        <Button style={{ width: "100%", margin: '4px 0px' }} type="primary">Đồ Khô</Button>
                    </Col>
                </div>

            </Row>
        )
    }
}

