import { createContext, useState } from 'react';

export const ModalContext = createContext({});

const ModalContextProvider = ({ children }) => {
  const [modalType, setModalType] = useState([]);
  const [modalProps, setModalProps] = useState([]);

  const showModal = data => {
    setModalType(prev => [...prev, data.modalType]);
    setModalProps(prev => [...prev, data.modalProps]);
  };

  const hideModal = data => {
    let modalIdx;
    if (data) {
      modalIdx = modalType.findIndex(item => item === data.modalType);
    }

    setModalType(prev => (!data ? [] : prev.modalType.filter((item, _index) => _index !== modalIdx)));
    setModalProps(prev => (!data ? [] : prev.modalProps.filter((item, _index) => _index !== modalIdx)));
  };
  return (
    <ModalContext.Provider value={{ modalType, modalProps, showModal, hideModal }}>{children}</ModalContext.Provider>
  );
};

export default ModalContextProvider;
