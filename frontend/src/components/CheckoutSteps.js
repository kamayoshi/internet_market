import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>Авторизація</Col>
      <Col className={props.step2 ? 'active' : ''}>Доставка</Col>
      <Col className={props.step3 ? 'active' : ''}>Вибір оплати</Col>
      <Col className={props.step4 ? 'active' : ''}>Перевірка даних та оплата</Col>
    </Row>
  );
}
