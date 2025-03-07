import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactPortal from '../ReactPortal';
import { BookType, TopicType } from '../../types';

interface InputAddBookModalProps {
  topics: Array<TopicType>;
  submitLabelContent?: string;
  cancelLabelContent?: string;
  isOpen: boolean;
  handleClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleAddBookSubmit: (
    e: React.MouseEvent<HTMLButtonElement>,
    bookData: BookType,
    resetForm: () => void,
  ) => void;
}

function InputAddBookModal({
  topics,
  submitLabelContent = 'Add',
  cancelLabelContent = 'Cancel',
  isOpen,
  handleClose,
  handleAddBookSubmit,
}: InputAddBookModalProps) {
  const [values, setValues] = useState({
    name: '',
    author: '',
    topic: '',
  });
  const nodeRef = useRef(null);
  useEffect(() => {
    const closeOnEscapeKey = (e) =>
      e.key === 'Escape' ? handleClose(e) : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  function resetForm() {
    setValues({
      name: '',
      author: '',
      topic: '',
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const bookData = {
      name: values.name,
      author: values.author,
      topic: values.topic,
    };

    handleAddBookSubmit(e, bookData, resetForm);
  }

  const renderOptions = topics.map((opt) => {
    return <option key={opt.id}>{opt.name}</option>;
  });

  return (
    <ReactPortal wrapperId="modal-root">
      <CSSTransition
        in={isOpen}
        timeout={{ appear: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div className="modal" ref={nodeRef}>
          <form className="modal-wrapped" onSubmit={handleSubmit}>
            <div className="modal-header">Add Book</div>
            <div className="modal-body">
              <div className="modal-content">
                <div className="form-control-group">
                  <label className="label-form-control" htmlFor="ipt-name">
                    name
                    <input
                      id="ipt-name"
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Enter book's name..."
                      value={values.name}
                      onChange={handleChange}
                    />
                  </label>
                  <span className="focus-form-control" />
                </div>
                <div className="form-control-group">
                  <label className="label-form-control" htmlFor="author">
                    author
                    <input
                      className="form-control"
                      type="text"
                      name="author"
                      placeholder="Enter book's author..."
                      value={values.author}
                      onChange={handleChange}
                    />
                  </label>
                  <span className="focus-form-control" />
                </div>
                <div className="form-control-group">
                  <label className="label-form-control" htmlFor="slt-author">
                    author
                    <select
                      id="slt-author"
                      className="form-control"
                      name="topic"
                      placeholder="Enter book's author..."
                      value={values.topic}
                      onChange={handleChange}
                    >
                      <option value="">'Choose topic...'</option>
                      {renderOptions}
                    </select>
                  </label>

                  <span className="focus-form-control" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                id="modal__btn-delete"
                className="btn btn-delete"
                onClick={handleSubmit}
              >
                {submitLabelContent}
              </button>
              <button
                id="modal__btn-cancel"
                onClick={handleClose}
                className="btn btn-cancel"
              >
                {cancelLabelContent}
              </button>
            </div>
          </form>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}

export default InputAddBookModal;
