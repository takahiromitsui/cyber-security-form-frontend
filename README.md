# Secure Login Form

[Secure Login Form](https://cyber-security-form-frontend.vercel.app/) is a simple Login form to demonstrate security implementation for the Login form. This frontend page connects to [Secure Login Form API](https://github.com/takahiromitsui/login_form_cyber_security).

## Security

- [JWT token](https://www.npmjs.com/package/jsonwebtoken) implementation
- Route protection(ref: hoc/privateRoute.tsx and utils/auth_token.ts)
- Input validation(ref: helpers/auth.ts)
- Monitor vulnerability by [sonarCloud](https://sonarcloud.io)

## Threat Model

![login_thread_model](https://user-images.githubusercontent.com/78789212/201643015-c41af9d2-7ac4-46a7-81e7-e5f28c5959c6.png)

## Deployment

This App has been hosted on Vercel platform [here](https://cyber-security-form-frontend.vercel.app).

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file (you can copy and paste .env.example)

`JWT_SECRET`=> Enter random string, which is needed for encryption and decryption of JWT.

`BASE_URL`=> Your backend base url.

## Run Locally

Clone the project

```bash
  git clone https://github.com/takahiromitsui/cyber-security-form-frontend.git
```

Install dependencies

```bash
  npm install
```

Start the development server

```bash
  npm run dev
```

Start the production server

```bash
  npm run build
  npm start
```
