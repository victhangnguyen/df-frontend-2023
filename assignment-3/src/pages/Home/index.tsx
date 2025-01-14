import React from 'react';
//! imp Components
import DeleteIcon from '../../components/Icons/DeleteIcon';
import Table from '../../components/Table';
import { ConfirmationModal, InputAddBookModal } from '../../components/Modal';
import Pagination from '../../components/Pagination';
//! store
import { useStore } from '../../store';
//! types
import { BookTableItem, BookType } from '../../types';

function Home() {
  const [selectedId, setSelectedId] = React.useState<
    string | number | undefined | null
  >(null);
  const [showModalConfirmation, setShowModalConfirmation] =
    React.useState<boolean>(false);
  const [showModalInputAddBook, setShowModalInputAddBook] =
    React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const PER_PAGE = 5;

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
    contextActions: { book, topic },
  } = useStore();

  const fetchBooksWithSearch = React.useCallback(() => {
    book.fetchBooksByFilters(currentPage, PER_PAGE, {
      search: values.search,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, PER_PAGE, values.search]);

  React.useEffect(() => {
    topic.fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    fetchBooksWithSearch();
  }, [fetchBooksWithSearch]);

  const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e,
  ) => {
    const target = e.target as HTMLInputElement;
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleClickShowAddModal: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void = (e) => {
    e.preventDefault();

    setShowModalInputAddBook(true);
  };

  const handleClickConfirmDelete: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    book: BookType,
  ) => void = (e, book) => {
    e.stopPropagation();
    setModalConfirmation({
      content: `Do you want to delete ${book.name} book.`,
    });
    setShowModalConfirmation(true);
    setSelectedId(book.id);
    console.log('book.id: ', book.id);
  };

  const handleDeleteBookSubmit: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void = (e) => {
    e.preventDefault();

    book.findIdAndDelete(selectedId);

    setShowModalConfirmation(false);
    fetchBooksWithSearch();
  };

  const handleClickCancel = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLImageElement>,
  ) => {
    e.preventDefault();
    setShowModalConfirmation(false);
    setShowModalInputAddBook(false);
    setSelectedId(null);
  };

  const handleAddBookSubmit: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: BookType,
    resetForm: () => void,
  ) => void = (_e, data, resetForm) => {
    const bookData = {
      name: data.name,
      author: data.author,
      topic: data.topic,
    };

    book.create(bookData);

    //! resetForm
    resetForm();

    fetchBooksWithSearch();
  };

  const tableHeaders: Array<string> = ['', 'Name', 'Author', 'Topic', 'Action'];
  const tableDetails: Array<BookTableItem> = state.books?.map((book, index) => {
    return {
      idx: index + 1,
      name: book.name,
      author: book.author,
      topic: book.topic,
      action: (
        <button
          className="btn btn-delete"
          onClick={(e) => handleClickConfirmDelete(e, book)}
        >
          <DeleteIcon color="#000000" />
        </button>
      ),
    };
  });

  return (
    <div className="">
      <form>
        <div className="container__row inspiration-form-control-group">
          <div className="container__col-12 container__col-sm-9 inspiration-form-control form-control-search">
            <label className="label" htmlFor="ipt-search" id="label-search">
              <input
                id="ipt-search"
                type="text"
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
            onClick={handleClickShowAddModal}
          >
            Add
          </button>
        </div>
      </form>
      <div className="">
        {state.books && (
          <Table tableHeaders={tableHeaders} tableDetails={tableDetails} />
        )}
        <div className="d-flex justify-content-center">
          <Pagination
            currentPage={currentPage}
            itemsCount={state.bookCounts}
            itemsPerPage={PER_PAGE}
            setCurrentPage={setCurrentPage}
            alwaysShown
          />
        </div>
      </div>
      <ConfirmationModal
        submitLabelContent="Delete"
        isOpen={showModalConfirmation}
        handleSubmit={(e) => handleDeleteBookSubmit(e)}
        handleClose={(e) => handleClickCancel(e)}
      >
        {modalConfirmation.content}
      </ConfirmationModal>
      <InputAddBookModal
        topics={state.topics}
        submitLabelContent="Add"
        isOpen={showModalInputAddBook}
        handleAddBookSubmit={(e, data, resetForm) =>
          handleAddBookSubmit(e, data, resetForm)
        }
        handleClose={(e) => handleClickCancel(e)}
      />
    </div>
  );
}

export default Home;
