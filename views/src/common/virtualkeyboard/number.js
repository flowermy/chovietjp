import React, { Component } from 'react';

import { Row, Button, Col } from 'antd'

export default class Number extends Component {

    handleInput(number) {
        this.props.handleInput(number)
    }

    render() {

        return (
            <Row className="num-keybroad">
                <Col span={18}>
                    <Row>
                        <Button onClick={() => this.handleInput('7')}>7</Button>
                        <Button onClick={() => this.handleInput('8')}>8</Button>
                        <Button onClick={() => this.handleInput('9')}>9</Button>
                    </Row>
                    <Row>
                        <Button onClick={() => this.handleInput('4')}>4</Button>
                        <Button onClick={() => this.handleInput('5')}>5</Button>
                        <Button onClick={() => this.handleInput('6')}>6</Button>
                    </Row>
                    <Row>
                        <Button onClick={() => this.handleInput('1')}>1</Button>
                        <Button onClick={() => this.handleInput('2')}>2</Button>
                        <Button onClick={() => this.handleInput('3')}>3</Button>
                    </Row>
                    <Row>
                        <Button onClick={() => this.handleInput('0')}>0</Button>
                        <Button onClick={() => this.handleInput('.')}>.</Button>
                        <Button disabled>-</Button>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row><Button onClick={() => this.handleInput('del')}>del</Button></Row>
                </Col>
            </Row>
        )
    }
}