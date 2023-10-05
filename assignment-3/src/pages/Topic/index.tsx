import React from 'react';
//! imp Components
import DeleteIcon from '../../components/Icons/DeleteIcon';
import { ConfirmationModal, InputAddTopicModal } from '../../components/Modal';
import Table from '../../components/Table';
import { useStore } from '../../store';
//! types
import { TopicTableItem, TopicType } from '../../types';

function Topic() {
  const [selectedId, setSelectedId] = React.useState<
    string | number | undefined | null
  >(null);
  const [showModalConfirmation, setShowModalConfirmation] =
    React.useState<boolean>(false);
  const [showModalInputAddTopic, setShowModalInputAddTopic] =
    React.useState<boolean>(false);
  const [values, setValues] = React.useState<{ search: string }>({
    search: '',
  });
  const [modalConfirmation, setModalConfirmation] = React.useState<{
    content: string;
  }>({
    content: '',
  });

  const {
    state,
    contextActions: { topic },
  } = useStore();

  React.useEffect(() => {
    topic.fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e,
  ) => {
    topic.fetchTopicsByFilter({ search: e.target.value });

    //! debound
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickAdd: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void = (e) => {
    e.preventDefault();
    setShowModalInputAddTopic(true);
  };

  const handleClickConfirmDelete: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    topics: TopicType,
  ) => void = (e, topic) => {
    e.stopPropagation();
    setModalConfirmation({
      content: `Do you want to delete ${topic.name} topic.`,
    });
    setShowModalConfirmation(true);
    setSelectedId(topic.id!);
  };

  const handleDeleteTopicSubmit: () => void = () => {
    topic.findIdAndDelete(selectedId);

    // settopicDatas(data);
    setShowModalConfirmation(false);
  };

  const handleAddTopicSubmit: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: TopicType,
    resetForm: () => void,
  ) => void = (e, data, resetForm) => {
    e.preventDefault();

    //! resetForm
    resetForm();

    topic.create(data);
  };

  const handleClickCancel: (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLImageElement>,
  ) => void = (e) => {
    e.preventDefault();
    setShowModalConfirmation(false);
    setShowModalInputAddTopic(false);
    setSelectedId(null);
  };

  const tableHeaders: Array<string> = ['', 'Name', 'Action'];
  const tableDetails: Array<TopicTableItem> = state?.topics?.map(
    (topic, index) => {
      return {
        idx: index + 1,
        name: topic.name,
        action: (
          <button
            className="btn btn-delete"
            onClick={(e) => handleClickConfirmDelete(e, topic)}
          >
            <DeleteIcon color="#000000" />
          </button>
        ),
      };
    },
  );

  return (
    <div className="">
      <form>
        <div className="container__row inspiration-form-control-group">
          <div className="container__col-12 container__col-sm-9 inspiration-form-control form-control-search">
            <label className="label" htmlFor="ipt-search" id="label-search">
              <input
                type="text"
                id="ipt-search"
                name="search"
                aria-labelledby="search"
                value={values.search}
                onChange={handleChange}
              />
              <div className="inspiration-label-text">Search</div>
            </label>
          </div>
          <button
            className="container__col-sm-offset-1 container__col-sm-2 btn btn-add"
            type="submit"
            onClick={handleClickAdd}
          >
            Add
          </button>
        </div>
      </form>
      <Table tableHeaders={tableHeaders} tableDetails={tableDetails} />
      <ConfirmationModal
        submitLabelContent="Delete"
        isOpen={showModalConfirmation}
        handleSubmit={() => handleDeleteTopicSubmit()}
        handleClose={(e) => handleClickCancel(e)}
      >
        {modalConfirmation.content}
      </ConfirmationModal>
      <InputAddTopicModal
        submitLabelContent="Add"
        isOpen={showModalInputAddTopic}
        handleAddTopicSubmit={(e, data, resetForm) =>
          handleAddTopicSubmit(e, data, resetForm)
        }
        handleClose={(e) => handleClickCancel(e)}
      />
    </div>
  );
}

export default Topic;
