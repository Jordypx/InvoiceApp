import React, { useReducer } from 'react';
import InvoiceContext from './invoiceContext';
import invoiceReducer from './invoiceReducer';
import {
  ADD_INVOICE,
  NEW_INVOICE_FORM,
  INVOICE_DETAILS,
  GO_BACK,
  DELETE_CONFIRMATION,
  EDIT_INVOICE_FORM,
  DISCARD,
  FILTER_INVOICES,
  MARK_PAID,
  CANCEL_DELETE,
  CONFIRM_DELETE,
  CANCEL_EDIT,
  SAVE_CHANGES,
} from '../types';

const InvoiceState = (props) => {
  const initialState = {
    invoices: [
      {
        id: 'RT3080',
        createdAt: '2021-08-18',
        paymentDue: '2021-08-19',
        description: 'Re-branding',
        paymentTerms: 1,
        clientName: 'Jensen Huang',
        clientEmail: 'jensenh@mail.com',
        status: 'paid',
        senderAddress: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
        clientAddress: {
          street: '106 Kendell Street',
          city: 'Sharrington',
          postCode: 'NR24 5WQ',
          country: 'United Kingdom',
        },
        items: [
          {
            name: 'Brand Guidelines',
            quantity: 1,
            price: 1800.9,
            total: 1800.9,
          },
        ],
        total: 1800.9,
      },
      {
        id: 'XM9141',
        createdAt: '2021-08-21',
        paymentDue: '2021-09-20',
        description: 'Graphic Design',
        paymentTerms: 30,
        clientName: 'Alex Grim',
        clientEmail: 'alexgrim@mail.com',
        status: 'pending',
        senderAddress: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
        clientAddress: {
          street: '84 Church Way',
          city: 'Bradford',
          postCode: 'BD1 9PB',
          country: 'United Kingdom',
        },
        items: [
          {
            name: 'Banner Design',
            quantity: 1,
            price: 156.0,
            total: 156.0,
          },
          {
            name: 'Email Design',
            quantity: 2,
            price: 200.0,
            total: 400.0,
          },
        ],
        total: 556.0,
      },
      {
        id: 'RG0314',
        createdAt: '2021-09-24',
        paymentDue: '2021-10-01',
        description: 'Website Redesign',
        paymentTerms: 7,
        clientName: 'John Morrison',
        clientEmail: 'jm@myco.com',
        status: 'paid',
        senderAddress: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
        clientAddress: {
          street: '79 Dover Road',
          city: 'Westhall',
          postCode: 'IP19 3PF',
          country: 'United Kingdom',
        },
        items: [
          {
            name: 'Website Redesign',
            quantity: 1,
            price: 14002.33,
            total: 14002.33,
          },
        ],
        total: 14002.33,
      },
      {
        id: 'RT2080',
        createdAt: '2021-10-11',
        paymentDue: '2021-10-12',
        description: 'Logo Concept',
        paymentTerms: 1,
        clientName: 'Alysa Werner',
        clientEmail: 'alysa@email.co.uk',
        status: 'pending',
        senderAddress: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
        clientAddress: {
          street: '63 Warwick Road',
          city: 'Carlisle',
          postCode: 'CA20 2TG',
          country: 'United Kingdom',
        },
        items: [
          {
            name: 'Logo Sketches',
            quantity: 1,
            price: 102.04,
            total: 102.04,
          },
        ],
        total: 102.04,
      },
      {
        id: 'AA1449',
        createdAt: '2021-10-7',
        paymentDue: '2021-10-14',
        description: 'Re-branding',
        paymentTerms: 7,
        clientName: 'Mellisa Clarke',
        clientEmail: 'mellisa.clarke@example.com',
        status: 'pending',
        senderAddress: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
        clientAddress: {
          street: '46 Abbey Row',
          city: 'Cambridge',
          postCode: 'CB5 6EG',
          country: 'United Kingdom',
        },
        items: [
          {
            name: 'New Logo',
            quantity: 1,
            price: 1532.33,
            total: 1532.33,
          },
          {
            name: 'Brand Guidelines',
            quantity: 1,
            price: 2500.0,
            total: 2500.0,
          },
        ],
        total: 4032.33,
      },
      {
        id: 'TY9141',
        createdAt: '2021-10-01',
        paymentDue: '2021-10-31',
        description: 'Landing Page Design',
        paymentTerms: 30,
        clientName: 'Thomas Wayne',
        clientEmail: 'thomas@dc.com',
        status: 'pending',
        senderAddress: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
        clientAddress: {
          street: '3964  Queens Lane',
          city: 'Gotham',
          postCode: '60457',
          country: 'United States of America',
        },
        items: [
          {
            name: 'Web Design',
            quantity: 1,
            price: 6155.91,
            total: 6155.91,
          },
        ],
        total: 6155.91,
      },
      {
        id: 'FV2353',
        createdAt: '2021-11-05',
        paymentDue: '2021-11-12',
        description: 'Logo Re-design',
        paymentTerms: 7,
        clientName: 'Anita Wainwright',
        clientEmail: '',
        status: 'draft',
        senderAddress: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
        clientAddress: {
          street: '',
          city: '',
          postCode: '',
          country: '',
        },
        items: [
          {
            name: 'Logo Re-design',
            quantity: 1,
            price: 3102.04,
            total: 3102.04,
          },
        ],
        total: 3102.04,
      },
    ],
    newInvoiceForm: false,
    invoiceDetails: false,
    editInvoiceForm: false,
    deleteConfirmation: false,
    currentUser: null,
    filters: ['paid', 'pending', 'draft'],
  };

  const [state, dispatch] = useReducer(invoiceReducer, initialState);

  // Add Invoice
  const addInvoice = (invoice, senderAddress, clientAddress, items) => {
    let tempId = '';
    for (let i = 0; i <= 1; i++) {
      tempId += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    for (let j = 0; j <= 3; j++) {
      tempId += Math.floor(Math.random() * 10);
    }

    let tempTotal = 0;
    items.forEach((item) => (tempTotal += parseFloat(item.total)));

    invoice.id = tempId;
    invoice.senderAddress = senderAddress;
    invoice.clientAddress = clientAddress;
    invoice.items = items;
    invoice.total = tempTotal;
    dispatch({ type: ADD_INVOICE, payload: invoice });
  };

  // Click on New Invoice Button
  const newInvoiceClick = () => {
    dispatch({ type: NEW_INVOICE_FORM, payload: true });
  };

  // Click on an invoice
  const invoiceDetailsClick = (invoice) => {
    dispatch({ type: INVOICE_DETAILS, payload: invoice });
  };

  // Click on Go Back
  const goBackClick = () => {
    dispatch({ type: GO_BACK, payload: ['draft', 'pending', 'paid'] });
  };

  // Click on Delete Button
  const deleteButtonClick = () => {
    dispatch({ type: DELETE_CONFIRMATION, payload: true });
  };

  // Click on Cancel Delete Button
  const cancelDeleteClick = () => {
    dispatch({ type: CANCEL_DELETE, payload: false });
  };

  // Click on Edit Button
  const editButtonClick = () => {
    dispatch({ type: EDIT_INVOICE_FORM, payload: true });
  };

  // Click on Mark as Paid Button
  const onMarkAsPaidClick = () => {
    const newCurrUser = state.currentUser;
    newCurrUser.status = 'paid';
    dispatch({ type: MARK_PAID, payload: newCurrUser });
  };

  // Click on Discard Button
  const discardClick = () => {
    dispatch({ type: DISCARD, payload: false });
  };

  // Check filter
  const filterCheck = (status) => {
    let tempFilters = state.filters;
    const index = tempFilters.indexOf(status);
    if (index >= 0) {
      tempFilters.splice(index, 1);
    } else {
      tempFilters.push(status);
    }

    dispatch({ type: FILTER_INVOICES, payload: tempFilters });
  };

  // Confirm Delete of Invoice
  const onConfirmDeleteClick = (currentUser) => {
    let newInvoices = state.invoices.filter(
      (invoice) => invoice.id !== currentUser.id
    );
    dispatch({ type: CONFIRM_DELETE, payload: newInvoices });
  };

  // Cancel Edit Click
  const cancelEditClick = () => {
    dispatch({ type: CANCEL_EDIT, payload: false });
  };

  // Save Changes Click
  const saveChangesClick = (
    updatedInvoice,
    updatedSenderAddress,
    updatedClientAddress,
    updatedItems
  ) => {
    let tempTotal = 0;
    updatedItems.forEach((item) => (tempTotal += parseFloat(item.total)));

    updatedInvoice.status === 'draft'
      ? (updatedInvoice.status = 'pending')
      : (updatedInvoice.status = updatedInvoice.status);

    updatedInvoice.senderAddress = updatedSenderAddress;
    updatedInvoice.clientAddress = updatedClientAddress;
    updatedInvoice.items = updatedItems;
    updatedInvoice.total = tempTotal;

    let newInvoices = state.invoices.map((invoice) => {
      if (invoice.id === updatedInvoice.id) {
        invoice = updatedInvoice;
      }
      return invoice;
    });

    dispatch({
      type: SAVE_CHANGES,
      payloadOne: newInvoices,
      payloadTwo: updatedInvoice,
    });
  };

  return (
    <InvoiceContext.Provider
      value={{
        invoices: state.invoices,
        newInvoiceForm: state.newInvoiceForm,
        currentUser: state.currentUser,
        invoiceDetails: state.invoiceDetails,
        editInvoiceForm: state.editInvoiceForm,
        deleteConfirmation: state.deleteConfirmation,
        filters: state.filters,
        newInvoiceClick,
        addInvoice,
        invoiceDetailsClick,
        goBackClick,
        deleteButtonClick,
        editButtonClick,
        discardClick,
        filterCheck,
        onMarkAsPaidClick,
        cancelDeleteClick,
        onConfirmDeleteClick,
        cancelEditClick,
        saveChangesClick,
      }}
    >
      {props.children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceState;
