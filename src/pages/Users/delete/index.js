import Modal from 'components/Modal';
import { useDeleteQuery } from 'services/query/user';

const UserDeleteModal = ({ recordToDelete, type }) => {
  const useMutation = useDeleteQuery();

  const handleOk = () => {
    const uid = recordToDelete.id;
    useMutation.mutate(uid);
  };

  return (
    <Modal title="Confirm Delete" handleOk={handleOk}>
      <p>Are you sure you want to delete {recordToDelete && recordToDelete.full_name}?</p>
    </Modal>
  );
};

export default UserDeleteModal;
