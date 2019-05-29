import React, { Component } from 'react';

import {
    Modal,
    List,
} from 'antd'

import vietlogo from '../../common/images/vietnam.png'
import americalogo from '../../common/images/united-states.png'
import japanlogo from '../../common/images/japan.png'
import thailogo from '../../common/images/thailand.png'

const data = [
    {
        id: 1,
        name: 'Tiếng Việt',
        code: 'vi',
        logo: vietlogo
    },
    {
        id: 2,
        name: '日本語',
        code: 'ja',
        logo: japanlogo
    },
    {
        id: 3,
        name: 'English',
        code: 'en',
        logo: americalogo
    },
    {
        id: 4,
        name: 'ภาษาไทย',
        code: 'th',
        logo: thailogo
    },
];

export default class Lang extends Component {

    constructor(props) {
        super(props)

        // bind
        this.handleOkMlang = this.handleOkMlang.bind(this)
        this.handleCancelMlang = this.handleCancelMlang.bind(this)
        this.handleChooseLang = this.handleChooseLang.bind(this)
    }

    handleOkMlang() {
        this.props.onOk()
    }

    handleCancelMlang() {
        this.props.onCancel();
    }

    handleChooseLang(code){
        this.props.handleChooseLang(code)
    }

    render() {
        const { visible, title, footer, closable } = this.props
        return (
            <Modal
                visible={visible}
                onOk={this.handleOkMlang}
                onCancel={this.handleCancelMlang}
                title={title}
                footer={footer}
                closable={closable}
            >
                <List
                    header={null}
                    footer={null}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item key={item.id} onClick={this.handleChooseLang.bind(this, item.code)}>
                            <img src={item.logo} alt="logo-coutry" style={{ marginRight: '24px' }} />{item.name}
                        </List.Item>
                    )}
                />
            </Modal>
        )
    }
}