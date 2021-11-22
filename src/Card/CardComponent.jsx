import React from 'react'
import { Card } from 'antd';
import DummyBackground from "../dummyImages/dummyBackground.png"
import classes from "./CardComponent.module.css"
import { CardStyles } from "../Exporter/Exporter"
const { Meta } = Card;

// style={{ width : 250, borderRadius : 25, overflow : "hidden" }}
export const CardComponent = ({ title, description }) => {
    return (
        <div className={classes.container}>
            <Card className={classes.card} cover={<img src={DummyBackground} alt="" />} style={CardStyles.card} hoverable >
            <Meta title={title} description="SHIT SHIT SHIT SHIT"/>
            </Card>
        </div>
    )
}
