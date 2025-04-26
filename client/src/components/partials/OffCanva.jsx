import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useOffcanvas } from "../../hooks/useOffcanvas";
import { useTranslation } from "react-i18next"; //Use for translation functionality

const OffCanvas = () => {
  const { t } = useTranslation(); // Initialize translation function
  const { show, handleClose, handleShow } = useOffcanvas();

  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        Launch demo modal
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t("offCanvas.title")}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {t("offCanvas.body")}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;

