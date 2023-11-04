import { MODE } from './application_mode';

export const PROTOCOL = MODE === 'DEVELOPMENT' ? 'http' : 'https';
//thay ip 192.168.1.10  thanh IP card mang cua may 192.168.168.54:8081
//json-server --host 192.168.1.7 --port 8081 cars.json 192.168.168.54:5000
export const REQUEST_IP = MODE === 'DEVELOPMENT' ? '192.168.168.54:8081' : '';

export const AUTH_IP = MODE === 'DEVELOPMENT' ? '192.168.168.54:5000' : '';

export const REQUEST_URL = `${PROTOCOL}://${REQUEST_IP}`;

export const AUTH_URL = `${PROTOCOL}://${AUTH_IP}`;

export const LOCAL_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJodXkyMDAyMTA5IiwiZ21haWwiOiJodXkyMDAyMTA5QGdtYWlsLmNvbSIsImF2YXRhciI6Imh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzY1OTYvNjU5NjEyMS5wbmciLCJpYXQiOjE1MTYyMzkwMjJ9.3hLzYtldBb_7_1SWGZNgLAsXzHRUxNSEYi1V4eYQiGQ';
