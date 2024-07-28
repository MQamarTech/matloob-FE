export const apiEndpoints = {
  USER: '/users/',
  VENDOR: '/vendors/',
  TICKETS: '/tickets/',
  HOTEL: '/hotels/',
  TICKET_VENDOR: vendorId => `/tickets/vendor/${vendorId}`,
  HOTEL_VENDOR: vendorId => `/hotels/vendor/${vendorId}`,
};
