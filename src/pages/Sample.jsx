import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";

const Sample = () => {
  const [showModal, setShowModal] = useState(false);
  const [cardData, setCardData] = useState({ title: "", description: "" });

  const handleModalOpen = (title, description) => {
    setCardData({ title, description });
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Card>
        <Card.Title>{cardData.title}</Card.Title>
        <Card.Text>{cardData.description}</Card.Text>
        <Button onClick={() => handleModalOpen("카드 제목", "카드 설명")}>
          모달 열기
        </Button>
      </Card>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{cardData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{cardData.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Sample;
