import React from 'react'
import { Col, Row } from 'antd';

type Props = {
    header: React.ReactNode[]
    children: React.ReactNode
}

const PageColumn = (props: Props) => {
    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Row
                    justify="space-between"
                    gutter={16}
                >
                    {props.header.map((item, index) => (
                        <Col key={index}>
                            {item}
                        </Col>
                    ))}
                </Row>
            </Col>
            <Col span={24}>
                {props.children}
            </Col>
        </Row>
    )
}

export default PageColumn