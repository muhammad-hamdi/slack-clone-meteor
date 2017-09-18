  SinglePageLogin.config({
      loginTitle: 'Single page login',
      signupTitle: 'Single page sign up',
      forgotPasswordTitle: 'Retrieve password',
      canRetrievePassword: true,
      passwordSignupFields: 'USERNAME_AND_EMAIL',
      forbidClientAccountCreation: false,
      routeAfterLogin: '/main/general',
      routeAfterSignUp: '/main/general',
      forceLogin: true,
      routeAfterLogout: '/login',
      exceptRoutes: ['home']
  });