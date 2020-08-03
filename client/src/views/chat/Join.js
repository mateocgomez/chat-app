import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
const Join = () => {
  const [name, setname] = useState("");
  const [room, setroom] = useState("");

  return (
    <CRow>
      <CCol xs="12" sm="4">
        <CCard>
          <CCardHeader>
            <h4>Bienvenido al chat de Work.r</h4>
          </CCardHeader>
          <CCardBody>
            <CForm action="" method="post">
              <CFormGroup>
                <CInputGroup>
                  <CInputGroupPrepend>
                    <CInputGroupText>Usuario:</CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Usuario"
                    onChange={(e) => setname(e.target.value)}
                  />
                </CInputGroup>
              </CFormGroup>
              <CFormGroup>
                <CInputGroup>
                  <CInputGroupPrepend>
                    <CInputGroupText>Sala:</CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Usuario"
                    onChange={(e) => setroom(e.target.value)}
                  />
                </CInputGroup>
              </CFormGroup>
              <CFormGroup className="form-actions">
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                  <CButton type="submit" size="lg" color="primary">
                    Ingresar
                  </CButton>
                </Link>
              </CFormGroup>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Join;
