import React from 'react'
import { Badge } from 'antd';

export default class CartMenu extends React.Component {

    render() {

        return (
            <Badge count={5}>
                <a href="#" className="head-example" />
            </Badge>
        )
    }
}