Meteor.startup(() => {
  
  var adminPass = process.env.ADMIN_PASSWORD || 'admin';

  if (!Meteor.users.findOne({ username: 'admin' })) {
    Accounts.createUser({
      username: 'admin',
      email: 'admin@admin.com',
      password: adminPass,
      plan: 'business'
    });
  }
});
