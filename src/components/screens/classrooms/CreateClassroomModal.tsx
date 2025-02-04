import React, { useRef } from 'react';
import { Modal, Button, Input } from 'react-daisyui';
import { useForm } from 'react-hook-form';
import { trpc } from '../../../utils/trpc';

type CreateClassroomForm = {
  name: string;
};

export const CreateClassroomModal = ({
  onCancel,
  onComplete,
  isOpen,
}: {
  onCancel: () => void;
  onComplete: () => void;
  isOpen: boolean;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateClassroomForm>();

  const createClassroom = trpc.useMutation('classroom.createClassroom');

  const onSubmit = handleSubmit(async (data) => {
    await createClassroom.mutateAsync({ name: data.name });
    reset();
    onComplete();
  });

  const handleCancel = () => {
    console.log('here');
    reset();
    onCancel();
  };

  return (
    <Modal
      open={isOpen}
      onClickBackdrop={handleCancel}
    >
      <Modal.Header className="font-bold">Create Classroom</Modal.Header>
      <form onSubmit={onSubmit}>
        <Modal.Body>
          <div className="flex flex-col gap-4">
            <label className="flex flex-col gap-2">
              <div>Name:</div>
              <Input
                placeholder="name"
                {...register('name', { required: true })}
              />
            </label>
            {errors.name?.type === 'required' && (
              <div className="text-red-500">Name is required</div>
            )}
          </div>
        </Modal.Body>

        <Modal.Actions>
          <Button
            onClick={handleCancel}
            type="button"
          >
            Cancel
          </Button>
          <Button
            color="primary"
            type="submit"
          >
            Create
          </Button>
        </Modal.Actions>
      </form>
    </Modal>
  );
};
