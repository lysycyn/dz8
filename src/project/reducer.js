export default function reduce(store, action) {
  switch (action.type) {
    case 'setName':
      console.log('setName');
      return {
        ...store,
        name: action.name,
      };
    case 'serverSent':
      console.log('serverSent');
      return {
        ...store,
        serverName: action.name,
      };
    case 'newEvent':
      console.log('newEvent');
      return {
        ...store,
        events: [action.event, ...store.events],
      };
    default:
      return store;
  }
}
