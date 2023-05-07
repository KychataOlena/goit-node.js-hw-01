const contactsService = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.getAllContacts();
      return console.log(allContacts);

    case "get":
      const oneContact = await contactsService.getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contactsService.addContact(name, email, phone);
      return console.log(newContact);

    default:
      console.log("\x1B[31m Unknown action type!");
  }
};

invokeAction({
  action: "addContact",
  name: "Allen Raymond",
  email: "nulla.ante@vestibul.co.uk",
  phone: "(992) 914-3792",
});

// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       // ...
//       break;

//     case "get":
//       // ... id
//       break;

//     case "add":
//       // ... name email phone
//       break;

//     case "remove":
//       // ... id
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);
