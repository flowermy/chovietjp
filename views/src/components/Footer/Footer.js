import React from 'react'

import { Row, Modal, List, Typography, Icon, Col, PageHeader, Divider, Avatar } from 'antd'

import { FacebookProvider, Page } from 'react-facebook'

const dataLeftFooter = [
    {
        title: 'Giới Thiệu ChoVietJP',
    },
    {
        title: 'Liên Hệ',
    },
    {
        title: 'Hướng Dẫn Mua Hàng',
    },
    {
        title: 'HOTLINE: 080.1230.1486',
    },
];

const dataMiddleFooter = [
    {
        title: 'Chính Sách Thanh Toán',
    },
    {
        title: 'Chính Sách Giao Hàng',
    },
    {
        title: 'Khách Hàng Thân Thiết',
    },
    {
        title: 'Hướng Dẫn Sửa Dụng',
    },
];

export default class Footer extends React.Component {

    render() {

        const leftFooter = (
            <List
                itemLayout="horizontal"
                dataSource={dataLeftFooter}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar><Icon type="like" /></Avatar>}
                            title={<a href="/about"><span>{item.title}</span></a>}
                        // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        )

        const middleFooter = (
            <List
                itemLayout="horizontal"
                dataSource={dataMiddleFooter}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar><Icon type="like" /></Avatar>}
                            title={<a href="/about"><span>{item.title}</span></a>}
                        // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        )

        return (
            <Row id='footer'>
                <div id="footer-body">
                    <div id='footer-section-top'>
                        <PageHeader
                            backIcon={false}
                            onBack={() => null}
                            title="ChovietJP"
                            subTitle="Thực phẩm Việt tại Nhật, tươi, ngon, đảm bảo chất lượng, mua hàng đơn giản, nhận hàng gửi tiền!"
                        />
                    </div>
                    <Divider />
                    <div id='footer-section-body'>
                        <Row gutter={16}>
                            <Col xs={24} md={8}>
                                <PageHeader
                                    backIcon={false}
                                    onBack={() => null}
                                    title="ChovietJP"
                                // subTitle={leftFooter}
                                />
                                {leftFooter}
                            </Col>
                            <Col xs={24} md={8}>
                                <PageHeader
                                    backIcon={false}
                                    onBack={() => null}
                                    title="Dịch Vụ"
                                // subTitle={leftFooter}
                                />
                                {middleFooter}
                            </Col>
                            <Col xs={24} md={8}>
                                <FacebookProvider appId="2254916231387843">
                                    <Page href="https://www.facebook.com/chovietjphiro" tabs="timeline" />
                                </FacebookProvider>
                            </Col>
                        </Row>
                    </div>
                    <Divider />
                    <div id='footer-section-bottom'>
                        <div>
                            <strong>© 2018 - CHOVIETJP.COM - Hệ thống cửa hàng thực phẩm Việt tại Nhật</strong>
                        </div>
                        <div>
                            <strong>CÔNG TY CỔ PHẦN THỰC PHẨM HIROSHIMA CHO VIET</strong>
                        </div>
                        <div>
                            <p>Doanh Nghiệp Kinh Doanh Thực Phẩm</p>
                            <p>Địa Chỉ: 広島県広島市西区三篠町 2-14-8</p>
                            <p>Hotline: 080.1230.1486</p>
                        </div>
                    </div>
                </div>
            </Row>
        )
    }
}